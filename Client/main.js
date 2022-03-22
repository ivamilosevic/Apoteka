import { Lek } from "./Lek.js";
import { Apoteka } from "./Apoteka.js";
import { Proizvodjac } from "./Proizvodjac.js";

var listaLekova=[];
fetch("https://localhost:5001/Apoteka/PreuzmiLek")
.then(p=>{
    p.json().then(lekovi=>{    
        lekovi.forEach(lek => {
            
            var p = new Lek(lek.id, lek.naziv, lek.rezimIzdavanja, lek.farmaceutskiOblik, lek.gramaza, lek.cena, lek.kolicina);
            listaLekova.push(p);
            
        });

        
        var listaProizvodjaca=[];
fetch("https://localhost:5001/Apoteka/PreuzmiProizvodjaca")
.then(p=>{
    p.json().then(proizvodjaci=>{    
        proizvodjaci.forEach(proizvodjac => {
            
            var r = new Proizvodjac(proizvodjac.id,proizvodjac.firma,proizvodjac.adresa,proizvodjac.grad,proizvodjac.telefon,proizvodjac.ime,proizvodjac.prezime);
            listaProizvodjaca.push(r);
            
        })

        var n = new Apoteka("T.H.P.",listaLekova,listaProizvodjaca);
        n.crtaj(document.body);

        var n2 = new Apoteka("S.R.P.",listaLekova,listaProizvodjaca);
        n2.crtaj(document.body);
  
    })
    
})


      
    })
    
})

//console.log(listaLekova);