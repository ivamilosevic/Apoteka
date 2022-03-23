export class Nabavka
{
    constructor(naziv,rezimIzdavanja,farmaceutskiOblik,firma,telefon,ime,prezime,kolicina,cena)
    {
        this.naziv=naziv;
        this.rezimIzdavanja=rezimIzdavanja;
        this.farmaceutskiOblik=farmaceutskiOblik;
        this.firma=firma;
        this.telefon=telefon;
        this.ime=ime;
        this.prezime=prezime;
        this.kolicina=kolicina;
        this.cena=cena;
    }

    crtaj(host)
    {
        var tr=document.createElement("tr");
        host.appendChild(tr);

        var el=document.createElement("td");
        el.innerHTML=this.naziv;
        tr.appendChild(el);

        el=document.createElement("td");
        el.innerHTML=this.rezimIzdavanja;
        tr.appendChild(el);

        el=document.createElement("td");
        el.innerHTML=this.farmaceutskiOblik;
        tr.appendChild(el);

        el=document.createElement("td");
        el.innerHTML=this.firma;
        tr.appendChild(el);

        el=document.createElement("td");
        el.innerHTML=this.telefon;
        tr.appendChild(el);

        el=document.createElement("td");
        el.innerHTML=this.ime;
        tr.appendChild(el);

        el=document.createElement("td");
        el.innerHTML=this.prezime;
        tr.appendChild(el);

        el=document.createElement("td");
        el.innerHTML=this.kolicina;
        el.className="kol";
        tr.appendChild(el);

        el=document.createElement("td");
        el.innerHTML=this.cena;
        tr.appendChild(el);

        var dugmici=document.createElement("td");
        tr.appendChild(dugmici);

        var btnObrisiNabavku = document.createElement("button");
        btnObrisiNabavku.innerHTML = "Brisi nabavku";
        btnObrisiNabavku.className="DugmeObrisiNabavku";
        btnObrisiNabavku.onclick=(ev)=>this.obrisiNabavku(tr);
        dugmici.appendChild(btnObrisiNabavku);
    }

    obrisiNabavku(host)
    {
        fetch("https://localhost:5001/Apoteka/ObrisiNabavkuDva/"+this.firma+"/"+this.naziv,
        {
            method:"DELETE"
        }).then(s =>
        {
            if(s.status == 400)
            {
                alert("Nabavka ne postoji");
                return;
            }
            if(s.ok)
            {
                alert("Uspesno obrisana nabavka");
                this.obrisiNabavkuIzTabele(host);
            }
            
        })
    }

    obrisiNabavkuIzTabele(host)
    {
        let roditelj=host.parentNode;
        roditelj.removeChild(host);
    }

}