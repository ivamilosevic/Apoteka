using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;

namespace WebProjekat.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ApotekaController : ControllerBase
    {
        public ApotekaContext Context { get; set; }
        public ApotekaController(ApotekaContext context)
        {
            Context = context;                               
        }

        /*[Route("Lekovi")]
        [HttpGet]
        public ActionResult Preuzmi()
        {
            var lekovi = Context.Lekovi;
            return Ok(lekovi);
        }*/

        [EnableCors("CORS")]
        [Route("Pretraga/{proizvodjac}/{lekID}")]
        [HttpGet]
        public async Task<ActionResult> Pretraga(string proizvodjac,int lekID)
        {
            if(proizvodjac==""){
                return BadRequest("Unesite proizvodjaca");
            }
             
            var proizvodjacID=proizvodjac.Split('a')
            .Where(x=> int.TryParse(x,out _))
            .Select(int.Parse)
            .ToList();

            var lekipro = Context.Nabavke
                .Include(p => p.Lek)
                .Include(p => p.Proizvodjac)
                .Where(p=>p.Lek.ID==lekID
                && proizvodjacID.Contains(p.Proizvodjac.ID));
                
            
            var mesano=await lekipro.ToListAsync();

            return Ok
            (
                mesano.Select(p=>
                new{
                    Firma=p.Proizvodjac.Firma,
                    Telefon=p.Proizvodjac.Telefon,
                    Ime=p.Proizvodjac.Ime,
                    Prezime=p.Proizvodjac.Prezime,
                    Naziv=p.Lek.Naziv,
                    RezimIzdavanja=p.Lek.RezimIzdavanja,
                    FarmaceutskiOblik=p.Lek.FarmaceutskiOblik,
                    Kolicina=p.Kolicina,
                    Cena=p.Cena

                }).ToList()
            );
        }

        [Route("PreuzmiLek")]
        [HttpGet]
        public async Task<ActionResult> PreuzmiLek() 
        {
            try{
                return Ok(await Context.Lekovi.Select( p=>
                new
                {
                    ID=p.ID,
                    Naziv=p.Naziv,
                    RezimIzdavanja=p.RezimIzdavanja,
                    FarmaceutskiOblik=p.RezimIzdavanja,
                    Gramaza=p.Gramaza
                }).ToListAsync());

                
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }

        [Route("PreuzmiProizvodjaca")]
        [HttpGet]
        public async Task<ActionResult> PreuzmiProizvodjaca()
        {
            try{
                return Ok(await Context.Proizvodjaci.Select( p=>
                new
                {
                    ID=p.ID,
                    Firma=p.Firma,
                    Adresa=p.Adresa,
                    Grad=p.Grad,
                    Telefon=p.Telefon,
                    Ime=p.Ime,
                    Prezime=p.Prezime
                }).ToListAsync());

                
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }

        [Route("PreuzmiNabavku")]
        [HttpGet]

        public async Task<ActionResult> PreuzmiNabavku()
        {
            var lekovi = Context.Lekovi
                .Include(p => p.NabavkaLekovi)
                .ThenInclude( p=> p.Proizvodjac);   //u tabeli poslenjeg iskljucimo vezu ka prethodnom

            var lek = await lekovi.ToListAsync();

            return Ok
            (
                lek.Select(p=>
                new{

                    Naziv=p.Naziv,
                    RezimIzdavanja=p.RezimIzdavanja,
                    FarmaceutskiOblik=p.FarmaceutskiOblik,
                    Proizvodjaci=p.NabavkaLekovi.Select(q=>
                    new{
                        Kolicina=q.Kolicina,
                        Cena=q.Cena,
                        Firma=q.Proizvodjac.Firma,
                        Telefon=q.Proizvodjac.Telefon,
                        Ime=q.Proizvodjac.Ime,
                        Prezime=q.Proizvodjac.Prezime
                    })


                }).ToList()
            );

        }

        /*[Route("PreuzmiLekDva/{naziv}")]
        [HttpGet]
        public async Task<ActionResult> PreuzmiLekDva(string naziv) 
        {
            var lek = await Context.Lekovi.Where(p => p.Naziv == naziv).FirstOrDefaultAsync();

            try{

                return Ok(lek);
                
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
            
        }*/

        [Route("DodatiLek/{naziv}/{rezimIzdavanja}/{farmaceutskiOblik}/{gramaza}")]
        [HttpPost]
        public async Task<ActionResult> DodajLek(string naziv,string rezimIzdavanja,string farmaceutskiOblik,string gramaza)
        {
            try
            {
                if (naziv.Length > 50 || string.IsNullOrWhiteSpace(naziv))
                {
                    return BadRequest("Pogresan naziv!");
                }

                if (rezimIzdavanja.Length > 50 || string.IsNullOrWhiteSpace(rezimIzdavanja))
                {
                    return BadRequest("Pogresan rezim izdavanja!");
                }

                if (farmaceutskiOblik.Length > 50 || string.IsNullOrWhiteSpace(farmaceutskiOblik))
                {
                    return BadRequest("Pogresan farmaceutski oblik!");
                }

                if (gramaza.Length > 50 || string.IsNullOrWhiteSpace(gramaza))
                {
                    return BadRequest("Pogresna gramaza!");
                }


                var lek = await Context.Lekovi.Where(p => p.Naziv == naziv).FirstOrDefaultAsync();

                if(lek!=null){
                    return BadRequest("Vec postoji lek sa tim nazivom");
                }


                Lek l = new Lek
                {
                    Naziv = naziv,
                    RezimIzdavanja=rezimIzdavanja,
                    FarmaceutskiOblik=farmaceutskiOblik,
                    Gramaza=gramaza
                };

                Context.Lekovi.Add(l);
                await Context.SaveChangesAsync();

                return Ok(l);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("DodajNabavku/{lekID}/{proizvodjacID}/{kolicina}/{cena}")]
        [HttpPost]
        public async Task<ActionResult> DodajNabavku(int lekID,int proizvodjacID,int kolicina,int cena)
        {
            try
            {

                if(kolicina<0 || kolicina>100)
                {
                    return BadRequest("Nedozvoljena kolicina");
                }

                if(cena<0 || cena>100000)
                {
                    return BadRequest("Nedozvoljena cena");
                }

                var lek = await Context.Lekovi.Where(p => p.ID == lekID).FirstOrDefaultAsync();
                var proizvodjac = await Context.Proizvodjaci.Where(p => p.ID == proizvodjacID).FirstOrDefaultAsync();

                var vecBio=Context.Nabavke
                    .Include(x => x.Lek)
                    .Include(x => x.Proizvodjac)
                    .Where(x => x.Lek.ID==lek.ID
                    && x.Proizvodjac.ID==proizvodjac.ID)
                    .FirstOrDefault();

                if(vecBio!=null){
                    return BadRequest("Vec imate ovu nabavku");
                }


                Nabavka s = new Nabavka
                {
                    Lek = lek,
                    Proizvodjac = proizvodjac,
                    Kolicina = kolicina,
                    Cena = cena
                };

                Context.Nabavke.Add(s);
                await Context.SaveChangesAsync();

                var podaci= await Context.Nabavke
                        .Include(p => p.Lek)
                        .Include(p => p.Proizvodjac)
                        .Where(p => p.Lek.ID == lekID)
                        .Select(p =>
                        new
                        {
                            Naziv = p.Lek.Naziv,
                            RezimIzdavanja = p.Lek.RezimIzdavanja,
                            FarmaceutskiOblik = p.Lek.FarmaceutskiOblik,
                            Cena=p.Cena,
                            Kolicina = p.Kolicina,
                            Firma = p.Proizvodjac.Firma,
                            Telefon = p.Proizvodjac.Telefon,
                            Ime = p.Proizvodjac.Ime,
                            Prezime = p.Proizvodjac.Prezime,
                        }).ToListAsync();
                return Ok(podaci);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("PromenitNabavkuDva/{sifra}/{idpro}/{kolicina}/{cena}")]                      
        [HttpPut]
        public async Task<ActionResult> PromeniNabavkuDva(int sifra,int idpro,int kolicina,int cena)
        {
            try
            {
                var lek = Context.Lekovi.Where(p => p.ID == sifra).FirstOrDefault();
                var proizvodjac = Context.Proizvodjaci.Where(p => p.ID == idpro).FirstOrDefault();

                var nabavka =await Context.Nabavke.Where(p=>p.Proizvodjac==proizvodjac && p.Lek==lek).FirstOrDefaultAsync();

                if (nabavka != null)
                {
                    nabavka.Kolicina = kolicina;
                    nabavka.Cena=cena;

                    await Context.SaveChangesAsync();
                    return Ok($"Uspesno promenjena nabavka!");
                }
                else
                {
                    return BadRequest("Nabavka nije pronadjena.");
                }
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }       

        [Route("ObrisiLek/{lekid}")]
        [HttpDelete]
        public async Task<ActionResult> ObrisiLek(int lekid)
        {
            var lek=Context.Lekovi.Where(p=>p.ID==lekid).FirstOrDefault();

            try
            {
                if(lek!=null)
                {
                    Context.Lekovi.Remove(lek);
                    await Context.SaveChangesAsync();
                    return Ok("Uspešno izbrisan lek");
                }
                else
                {
                    return BadRequest("Lek nije pronadjen.");
                }
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [Route("ObrisiNabavkuDva/{proizvodjaci}/{lekovi}")]
        [HttpDelete]
        public async Task<ActionResult> ObrisiNabavkuDva(string proizvodjaci,string lekovi)
        {
            var proizvodjacc=Context.Proizvodjaci.Where(p=>p.Firma==proizvodjaci).FirstOrDefault();
            var lekk=Context.Lekovi.Where(p=>p.Naziv==lekovi).FirstOrDefault();

            try
            {
                var nabavka =await Context.Nabavke.Where(p=>p.Proizvodjac==proizvodjacc && p.Lek==lekk).FirstOrDefaultAsync();

                if(nabavka!=null)
                {
                    Context.Nabavke.Remove(nabavka);
                    await Context.SaveChangesAsync();
                    return Ok("Uspešno izbrisana nabavka");
                }
                else
                {
                    return BadRequest("Nabavka ne postoji.");
                }
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        /*[Route("ObrisiNabavkuTri/{idnabavke}")]
        [HttpDelete]
        public async Task<ActionResult> ObrisiNabavkuTri(int idnabavke)
        {
            if(idnabavke<=0)
            {
                return BadRequest("Pogresan broj indeksa!");
            }

            try
            {
                var nabavka = await Context.Nabavke.FindAsync(idnabavke);
                if (nabavka == null)
                    return BadRequest("Ne postoji nabavka!");

                Context.Nabavke.Remove(nabavka);
                await Context.SaveChangesAsync();
                return Ok("Izbrisano izvodjenje!");
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }*/

    }
}
