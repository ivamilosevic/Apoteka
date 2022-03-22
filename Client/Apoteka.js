import { Nabavka } from "./Nabavka.js";
import { Lek } from "./Lek.js";;

export class Apoteka{

   constructor(naziv,listaLekova,listaProizvodjaca)
   {
       this.naziv=naziv;
       this.listaLekova=listaLekova;
       this.listaProizvodjaca=listaProizvodjaca;
       this.kontejner=null;
    }

   crtaj(host)
   {
       this.kontejner = document.createElement("div");
       this.kontejner.className = "NajvisiKontejner";
       host.appendChild(this.kontejner);

       let kontNaslov = document.createElement("div");
       kontNaslov.className = "PomocniKontejner";
       this.kontejner.appendChild(kontNaslov);
       
       let kontGlavni = document.createElement("div");
       kontGlavni.className="GlavniKontejner";
       this.kontejner.appendChild(kontGlavni);

       let kontPomocni1 = document.createElement("div");
       kontPomocni1.className = "PomocniKontejner";
       kontGlavni.appendChild(kontPomocni1);

       let kontPomocni2 = document.createElement("div");
       kontPomocni2.className = "PomocniKontejner";
       kontGlavni.appendChild(kontPomocni2);

       let kontForma1 = document.createElement("div");
       kontForma1.className="Forma1";
       kontPomocni1.appendChild(kontForma1);

       let kontForma2 = document.createElement("div");
       kontForma2.className="Forma2";
       kontPomocni1.appendChild(kontForma2);

       //let kontSlika = document.createElement("div");
       //kontSlika.className="Slika";
       //kontPomocni1.appendChild(kontSlika);
       
       let kontNabavke = document.createElement("div");
       kontNabavke.className="Nabavke";
       kontPomocni2.appendChild(kontNabavke);

       let kontSlika = document.createElement("div");
       kontSlika.className="Slika";
       kontPomocni2.appendChild(kontSlika);

       this.crtajNaslov(kontNaslov);
       this.crtajFormu1(kontForma1);
       this.crtajFormu2(kontForma2);
       //this.crtajSliku(kontSlika);
       this.crtajNabavke(kontNabavke);
       this.crtajSliku(kontSlika);
    }

   crtajNaslov(host)
   {
       let red = this.crtajRed(host);

       let l = document.createElement("h1");
       l.innerHTML = this.naziv;
       l.className="Naslov";
       red.appendChild(l);
    }

   crtajRed(host)
   {
       let red = document.createElement("div");
       red.className="red";
       host.appendChild(red);
       return red;
    }

   crtajFormu1(host)
   {
       let red = this.crtajRed(host);

       let l = document.createElement("h2");
       l.innerHTML = "NABAVKE";
       l.className="NabavkaText";
       red.appendChild(l);
   
       red=this.crtajRed(host);
   
       l= document.createElement("label");
       l.innerHTML="Lekovi: ";
       l.className="LekoviText";
       red.appendChild(l);
   
       let se=document.createElement("select");
       se.className = "lekDodaj";
       //se.id = "selectSlika";
       red.appendChild(se);
   
       let op;
       this.listaLekova.forEach(p=>{
   
        op=document.createElement("option");
        op.value=p.id;
        op.innerHTML=p.naziv;
        op.className="LekoviOpcija";
        se.appendChild(op);
   
        })

        let btnPrikazi = document.createElement("button");
        btnPrikazi.className = "DugmePrikaziSliku";
        btnPrikazi.innerHTML = "Prikazi sliku";
        btnPrikazi.onclick=(ev)=>this.prikaziSliku();
        red.appendChild(btnPrikazi);

        red=this.crtajRed(host);
   
        l= document.createElement("label");
        l.innerHTML="Proizvodjaci: ";
        l.className="ProizvodjaciText";
        red.appendChild(l);
   
        let cbbox= document.createElement("div");
        cbbox.className="cbbox";
        //se.id = "selectSlika2";
        red.appendChild(cbbox);
   
        let cbboxLevi= document.createElement("div");
        cbboxLevi.className="cbboxLevi";
        cbbox.appendChild(cbboxLevi);
   
        let cbboxDesni= document.createElement("div");
        cbboxDesni.className="cbboxDesni";
        cbbox.appendChild(cbboxDesni);
   
   
        let cb;
        let cbDiv;
        this.listaProizvodjaca.forEach((r,index)=>{
            cbDiv = document.createElement("div");
   
            cb=document.createElement("input");
            cb.type="checkbox";
            cb.value=r.id;
            cbDiv.appendChild(cb);
   
            l=document.createElement("label");
            l.innerHTML=r.firma;
            l.className="ProizvodjaciSvi";
            cbDiv.appendChild(l);
            if(index%2==0){
   
                cbboxLevi.appendChild(cbDiv);
   
            }
            else{
                cbboxDesni.appendChild(cbDiv);
            }
            //cbbox.appendChild(l);
   
        })
        red=this.crtajRed(host);
   
        let btnNadji=document.createElement("button");
        btnNadji.onclick=(ev)=>this.nadjiNabavku();
        btnNadji.innerHTML="Nadji nabavku";
        btnNadji.className="DugmePronadjiNabavku";
        red.appendChild(btnNadji);

        /*let btnObrisiNabavku = document.createElement("button");
        btnObrisiNabavku.innerHTML = "Brisi nabavku";
        btnObrisiNabavku.className="ObrisiNabavku";
        btnObrisiNabavku.onclick=(ev)=>this.obrisiNabavku();
        red.appendChild(btnObrisiNabavku);*/
   
        red=this.crtajRed(host);
   
        l = document.createElement("label");
        l.innerHTML="Kolicina: ";
        l.className="KolicinaText";
        red.appendChild(l);
        var Kolicina= document.createElement("input");
        Kolicina.type="number";
        Kolicina.className="Kolicina";
        red.appendChild(Kolicina);

        red=this.crtajRed(host);

        l = document.createElement("label");
        l.innerHTML="Cena: ";
        l.className="CenaText";
        red.appendChild(l);
        var Cena= document.createElement("input");
        Cena.type="number";
        Cena.className="Cena";
        red.appendChild(Cena);
   
        red=this.crtajRed(host);
   
        let btnUpisi=document.createElement("button");
        btnUpisi.onclick=(ev)=>this.upisiNabavku(Kolicina.value,Cena.value);
        btnUpisi.innerHTML="Upisi nabavku";
        btnUpisi.className="DugmeUpisiNabavku";
        red.appendChild(btnUpisi);

        let btnPromeniNabavku=document.createElement("button");
        btnPromeniNabavku.onclick=(ev)=>this.promeniNabavku(Kolicina.value,Cena.value);
        btnPromeniNabavku.innerHTML="Promeni nabavku";
        btnPromeniNabavku.className="DugmePromeniNabavku";
        red.appendChild(btnPromeniNabavku);
    }

    crtajFormu2(host)
   {
        let red = this.crtajRed(host);

        let l = document.createElement("h2");
        l.innerHTML = "DODAVANJE LEKOVA";
        l.className="LekoviText";
        red.appendChild(l);

        red=this.crtajRed(host);

        l = document.createElement("label");
        l.innerHTML="Naziv: "
        l.className="LekoviNaziv";
        red.appendChild(l);
        var naziv= document.createElement("input");
        naziv.type="text";
        naziv.className="Naziv";
        red.appendChild(naziv);

        red=this.crtajRed(host);

        l = document.createElement("label");
        l.innerHTML="Rezim izdavanja: ";
        l.className="RezimText";
        red.appendChild(l);
        var rezimIzdavanja= document.createElement("input");
        rezimIzdavanja.type="text";
        rezimIzdavanja.className="RezimIzdavanja";
        red.appendChild(rezimIzdavanja);

        red=this.crtajRed(host);

        l = document.createElement("label");
        l.innerHTML="Farmaceutski oblik: ";
        l.className="FarmText";
        red.appendChild(l);
        var farmaceutskiOblik= document.createElement("input");
        farmaceutskiOblik.type="text";
        farmaceutskiOblik.className="FarmaceutskiOblik";
        red.appendChild(farmaceutskiOblik);

        red=this.crtajRed(host);

        l = document.createElement("label");
        l.innerHTML="Gramaza: ";
        l.className="GramazaText";
        red.appendChild(l);
        var gramaza= document.createElement("input");
        gramaza.type="text";
        gramaza.className="Gramaza";
        red.appendChild(gramaza);

        red=this.crtajRed(host);

        let btnUpisiLek=document.createElement("button");
        btnUpisiLek.onclick=(ev)=>this.upisiLek(naziv.value,rezimIzdavanja.value,farmaceutskiOblik.value,gramaza.value);
        btnUpisiLek.innerHTML="Upisi lek";
        btnUpisiLek.className="DugmeUpisiLek";
        red.appendChild(btnUpisiLek);

        let btnObrisiLek=document.createElement("button");
        btnObrisiLek.onclick=(ev)=>this.obrisiLek();
        btnObrisiLek.innerHTML="Brisi lek";
        btnObrisiLek.className="DugmeObrisiLek";
        red.appendChild(btnObrisiLek);
    }

    crtajNabavke(host)
    {
        var tabela = document.createElement("table");
        tabela.className="Tabela";
        host.appendChild(tabela);

        var tabelahead=document.createElement("thead");
        tabela.appendChild(tabelahead);

        var tr=document.createElement("tr");
        tabelahead.appendChild(tr);

        var tabelaBody=document.createElement("tbody");
        tabelaBody.className="TabelaPodaci";

        tabela.appendChild(tabelaBody);

        let th;
        var zag=["Naziv","Rezim izdavanja","Farmaceutski oblik","Firma","Telefon","Ime","Prezime","Kolicina","Cena"];
        zag.forEach(el=>{
            th=document.createElement("th");
            th.innerHTML=el;
            tr.appendChild(th);
        })

    }

    //nabavke

    upisiNabavku(Kolicina,Cena)
    {
        if(Kolicina===null || Kolicina===undefined || Kolicina==="" || Kolicina>100 || Kolicina<0){
            alert("Pogresno uneta kolicina");
            return;
        }

        if(Cena===null || Cena===undefined || Cena==="" || Cena>100000 || Cena<0){
            alert("Pogresno uneta cena");
            return;
        }

        let proizvodjaci=this.kontejner.querySelectorAll("input[type='checkbox']:checked");
    
        if(proizvodjaci===null || proizvodjaci.length!=1){
            alert("Morate uneti samo jednog proizvodjaca");
            return;
        }
    
        let optionEl=this.kontejner.querySelector("select");
        var lekovi=optionEl.options[optionEl.selectedIndex].value;
    
        console.log("kolicina "+Kolicina);
        console.log("cena "+Cena);
        console.log("lek "+lekovi);
        console.log("proizvodjac "+proizvodjaci[0].value);

    
        fetch("https://localhost:5001/Apoteka/DodajNabavku/"+lekovi+"/"+proizvodjaci[0].value+"/"+Kolicina+"/"+Cena,
        {
            method:"POST"
        }).then(s=>{
            if(s.status==400)
            {
                alert("Vec imate nabavku za ovaj lek od ovog proizvodjaca ili pogresno unesena nabavka");
                return;
            }
            if(s.ok){
                var teloTabele=this.obrisiPrethodniSadrzaj();
                s.json().then(data=>{
                    console.log(data);
                    data.forEach(st =>{
                        const nabavka=new Nabavka(st.naziv,st.rezimIzdavanja,st.farmaceutskiOblik,st.firma,st.telefon,st.ime,st.prezime,st.kolicina,st.cena);
                        console.log(nabavka);
                        nabavka.crtaj(teloTabele);
                    })
                })
            }
        })
    
    }

    promeniNabavku(Kolicina,Cena)
    {
        if(Kolicina===null || Kolicina===undefined || Kolicina==="" || Kolicina>100 || Kolicina<0){
            alert("Pogresno uneta kolicina");
            return;
        }

        if(Cena===null || Cena===undefined || Cena==="" || Cena>100000 || Cena<0){
            alert("Pogresno uneta cena");
            return;
        }

        let proizvodjaci=this.kontejner.querySelectorAll("input[type='checkbox']:checked");
    
        if(proizvodjaci===null || proizvodjaci.length!=1){
            alert("Morate uneti samo jednog proizvodjaca");
            return;
        }
        let optionEl=this.kontejner.querySelector("select");
        var lekovi=optionEl.options[optionEl.selectedIndex].value;

        console.log("kolicina "+Kolicina);
        console.log("cena "+Cena);
        console.log("lek "+lekovi);
        console.log("proizvodjac "+proizvodjaci[0].value);


        fetch("https://localhost:5001/Apoteka/PromenitNabavkuDva/"+lekovi+"/"+proizvodjaci[0].value+"/"+Kolicina+"/"+Cena,
        {
            method:"PUT"
        }).then(s =>
        {
            if(s.status == 400)
            {
                alert("Greska");
                return;
            }
            if(s.ok)
            {
                alert("Uspesno promenjena nabavka");
            
            }
            
        })

    }

    nadjiNabavku()
    {
        let optionEl=this.kontejner.querySelector("select");
        var lekID=optionEl.options[optionEl.selectedIndex].value;
        console.log(lekID);
    
        let proizvodjaci=this.kontejner.querySelectorAll("input[type='checkbox']:checked");
        console.log(proizvodjaci);
        /*if(proizvodjaci===null || proizvodjaci==="" || proizvodjaci===undefined)
        {
            alert("Izaberi");
            return;
    
        }*/
    
        let nizProizvodjaca="";
        for(let i=0;i<proizvodjaci.length;i++)
        {
            nizProizvodjaca=nizProizvodjaca.concat(proizvodjaci[i].value,"a");
        }
        console.log(nizProizvodjaca);
    
        this.ucitajNabavku(lekID,nizProizvodjaca);
        //this.ucitaj();
        //this.ucitajdva();
    }

    ucitajNabavku(lekID,nizProizvodjaca)
    {
        if(nizProizvodjaca===0 || nizProizvodjaca==="" || nizProizvodjaca===undefined){
            alert("Unesite proizvodjaca");
            return;
        }

        fetch("https://localhost:5001/Apoteka/Pretraga/"+nizProizvodjaca+"/"+lekID,
        {
        method:"GET"
        })
        .then(s=>{
            /*if(s.status==400){
                alert("Izaberite proizvodjaca");
                return;
    
            }*/
    
            if(s.ok){
                var teloTabele = this.obrisiPrethodniSadrzaj();
                s.json().then(data=>
                    {
                        data.forEach(s=>{
    
                            let lp=new Nabavka(s.naziv,s.rezimIzdavanja,s.farmaceutskiOblik,s.firma,s.telefon,s.ime,s.prezime,s.kolicina,s.cena);
                            lp.crtaj(teloTabele);
                        })
    
                    })
            }
        })
    
    }

    obrisiPrethodniSadrzaj()
    {
        var teloTabele = this.kontejner.querySelector(".TabelaPodaci");
        var roditelj = teloTabele.parentNode;
        roditelj.removeChild(teloTabele);
    
        teloTabele = document.createElement("tbody");
        teloTabele.className="TabelaPodaci";
        roditelj.appendChild(teloTabele);
        return teloTabele;
    }

    //lek

    upisiLek(naziv,rezimIzdavanja,farmaceutskiOblik,gramaza)
    {
        if(naziv===null || naziv===undefined || naziv==="" || rezimIzdavanja===null || rezimIzdavanja===undefined || rezimIzdavanja==="" || farmaceutskiOblik===null || farmaceutskiOblik===undefined || farmaceutskiOblik==="" || gramaza===null || gramaza===undefined || gramaza===""){
            alert("Pogresno uneti podaci o leku");
            return;
        }

        console.log("naziv "+naziv);
        console.log("rezimIzdavanja "+rezimIzdavanja);
        console.log("farmaceutskiOblik "+farmaceutskiOblik);
        console.log("gramaza "+gramaza);
    
        fetch("https://localhost:5001/Apoteka/DodatiLek/"+naziv+"/"+rezimIzdavanja+"/"+farmaceutskiOblik+"/"+gramaza,
        {
            method:"POST"
        }).then(s=>{
            if(s.ok)
            {
                s.json().then(s=>{
                    let lek=new Lek(s.id,s.naziv,s.rezimIzdavanja,s.farmaceutskiOblik,s.gramaza);
                    alert("Lek je uspesno upisan");
                    this.osveziPrikazLeka();
                })
            }
            if(s.status==400){
                alert("Lek sa tim nazivom vec postoji ili pogresno upisan lek");
                return;
            }
        })
    
    }

    obrisiLek()
    {
        let optionEl=this.kontejner.querySelector("select");
        var lekovi=optionEl.options[optionEl.selectedIndex].value;
    
        fetch("https://localhost:5001/Apoteka/ObrisiLek/"+lekovi,
        {
            method:"DELETE"
        }).then(s =>
        {
            if(s.status == 400)
            {
                alert("Uzbuna");
                return;
            }
            if(s.ok)
            {
               alert("Uspesno obrisan lek"); 
               this.osveziPrikazLeka();
            }
            
        })
    }

    osveziPrikazLeka()
    {
        fetch("https://localhost:5001/Apoteka/PreuzmiLek")
            .then(p => {
                p.json().then(lek => {
                    console.log(lek);
                    this.listaLekova=lek;
                    this.updateLek(this.kontejner.querySelector(".lekDodaj"))
                })
            })
    }

    updateLek(selectLek)
    {
        var length = selectLek.options.length;
        for (let i = length; i >= 0; i--)
            selectLek.options[i] = null;

        let op;
        this.listaLekova.forEach(p=>{
            
        op=document.createElement("option");
        op.value=p.id;
        op.innerHTML=p.naziv;
        selectLek.appendChild(op);
            
       });
    }

    //slika

    crtajSliku(host)
    {
        var slika = document.createElement("img");
        slika.className = "SlikaZaPrikaz";
        slika.id = "slikaZaPrikaz";
        host.appendChild(slika);
    }

    obrisiPrethodniSadrzajSlika()
    {
        var mestoSlike = this.kontejner.querySelector(".SlikaZaPrikaz");
        var roditelj = mestoSlike.parentNode;
        roditelj.removeChild(mestoSlike);

        mestoSlike = document.createElement("img");
        mestoSlike.className = "SlikaZaPrikaz";
        roditelj.appendChild(mestoSlike);
        return mestoSlike;
    }

    prikaziSliku()
    {   
        let optionEl=this.kontejner.querySelector("select");
        var lekovi=optionEl.options[optionEl.selectedIndex].value;

        let proizvodjaci=this.kontejner.querySelectorAll("input[type='checkbox']:checked");
        var proizvodjac=proizvodjaci[0].value;

        var kon=lekovi+proizvodjac;

        var slika = this.obrisiPrethodniSadrzajSlika();
        slika.src = "../Slike/"+kon+".jpg"; 
    }
   

}