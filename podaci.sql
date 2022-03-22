INSERT INTO LEKOVI (ID,NAZIV,REZIMIZDAVANJA,FARMACEUTSKIOBLIK,GRAMAZA) VALUES (1,'Acerola','Bez recepta','tablete','100mg');
INSERT INTO LEKOVI (ID,NAZIV,REZIMIZDAVANJA,FARMACEUTSKIOBLIK,GRAMAZA) VALUES (2,'Aminofilin','Uz recept','tablete','350mg');
INSERT INTO LEKOVI (ID,NAZIV,REZIMIZDAVANJA,FARMACEUTSKIOBLIK,GRAMAZA) VALUES (3,'Amoksicilin','Uz recept','kapsula','500mg');
INSERT INTO LEKOVI (ID,NAZIV,REZIMIZDAVANJA,FARMACEUTSKIOBLIK,GRAMAZA) VALUES (4,'Aspirin','Bez recepta','tablete','100mg');
INSERT INTO LEKOVI (ID,NAZIV,REZIMIZDAVANJA,FARMACEUTSKIOBLIK,GRAMAZA) VALUES (5,'Atorvastatin','Bez recepta','tablete','400mg');
INSERT INTO LEKOVI (ID,NAZIV,REZIMIZDAVANJA,FARMACEUTSKIOBLIK,GRAMAZA) VALUES (6,'Bactrim','Uz recept','sirup','100ml');
INSERT INTO LEKOVI (ID,NAZIV,REZIMIZDAVANJA,FARMACEUTSKIOBLIK,GRAMAZA) VALUES (7,'Bensedin','Uz recept','tablete','5mg');
INSERT INTO LEKOVI (ID,NAZIV,REZIMIZDAVANJA,FARMACEUTSKIOBLIK,GRAMAZA) VALUES (8,'Bromazepan','Uz recept','tablete','250mg');
INSERT INTO LEKOVI (ID,NAZIV,REZIMIZDAVANJA,FARMACEUTSKIOBLIK,GRAMAZA) VALUES (9,'Cefaklon','Uz recept','sirup','60ml');
INSERT INTO LEKOVI (ID,NAZIV,REZIMIZDAVANJA,FARMACEUTSKIOBLIK,GRAMAZA) VALUES (10,'Cilazapril','Uz recept','tablete','5mg');
INSERT INTO LEKOVI (ID,NAZIV,REZIMIZDAVANJA,FARMACEUTSKIOBLIK,GRAMAZA) VALUES (11,'Dermodrin','Bez recepta','krema','100ml');
INSERT INTO LEKOVI (ID,NAZIV,REZIMIZDAVANJA,FARMACEUTSKIOBLIK,GRAMAZA) VALUES (12,'Diklofen','Bez recepta','tablete','100mg');
INSERT INTO LEKOVI (ID,NAZIV,REZIMIZDAVANJA,FARMACEUTSKIOBLIK,GRAMAZA) VALUES (13,'Dopamin','Uz recept','tablete','300mg');
INSERT INTO LEKOVI (ID,NAZIV,REZIMIZDAVANJA,FARMACEUTSKIOBLIK,GRAMAZA) VALUES (14,'Fromilid','Uz recept','tablete','500mg');
INSERT INTO LEKOVI (ID,NAZIV,REZIMIZDAVANJA,FARMACEUTSKIOBLIK,GRAMAZA) VALUES (15,'Katopil','Uz recept','tablete','50mg');
INSERT INTO LEKOVI (ID,NAZIV,REZIMIZDAVANJA,FARMACEUTSKIOBLIK,GRAMAZA) VALUES (16,'Paracetamol','Bez recepta','tablete','500mg');
INSERT INTO LEKOVI (ID,NAZIV,REZIMIZDAVANJA,FARMACEUTSKIOBLIK,GRAMAZA) VALUES (17,'Paracetamol','Bez recepta','tablete','500mg');

INSERT INTO PROIZVODJACI (ID, FIRMA, ADRESA, GRAD, TELEFON, IME, PREZIME) VALUES (1,'UNION-MEDIC','Pancevacka','Novi Sad','062-14-55-848','Dragan','Knezevic');
INSERT INTO PROIZVODJACI (ID, FIRMA, ADRESA, GRAD, TELEFON, IME, PREZIME) VALUES (2,'Hemofarm','Beogradski put','Vrsac','061-54-78-124','Goran','Milosevic');
INSERT INTO PROIZVODJACI (ID, FIRMA, ADRESA, GRAD, TELEFON, IME, PREZIME) VALUES (3,'Galenika','Batajnicki drum','Beograd','061-45-78-487','Jasmina','Bozinovic');
INSERT INTO PROIZVODJACI (ID, FIRMA, ADRESA, GRAD, TELEFON, IME, PREZIME) VALUES (4,'KRKA-FARMA','Jurija Gagarina 26','Beograd','065-56-56-565','Petar','Petrovic');
INSERT INTO PROIZVODJACI (ID, FIRMA, ADRESA, GRAD, TELEFON, IME, PREZIME) VALUES (5,'Actavis','Djordja Stanojevica 12','Beograd','069-65-47-855','Marija','Mandic');
INSERT INTO PROIZVODJACI (ID, FIRMA, ADRESA, GRAD, TELEFON, IME, PREZIME) VALUES (6,'Roche','Milutina Milankovica 11a','Beograd','063-25-41-871','Ivana','Jocic');
INSERT INTO PROIZVODJACI (ID, FIRMA, ADRESA, GRAD, TELEFON, IME, PREZIME) VALUES (7,'AbelaPharm','Viline Vode','Beograd','063-33-32-545','Dusan','Milic');
INSERT INTO PROIZVODJACI (ID, FIRMA, ADRESA, GRAD, TELEFON, IME, PREZIME) VALUES (8,'Goodwill Pharma','Matije Gupca 14','Subotica','062-50-65-599','Milan','Tosic');
INSERT INTO PROIZVODJACI (ID, FIRMA, ADRESA, GRAD, TELEFON, IME, PREZIME) VALUES (9,'INNventa Pharm','Sumatovacka 36','Beograd','062-57-84-151','Jelena','Mitic');
INSERT INTO PROIZVODJACI (ID, FIRMA, ADRESA, GRAD, TELEFON, IME, PREZIME) VALUES (10,'Erma','Autoput za Novi Sad 96a Zemun','Beograd','068-58-58-774','Aleksandar','Dacic');

INSERT INTO NABAVKE(ID,LEKID,PROIZVODJACID,KOLICINA,CENA) VALUES (1,1,1,5,1000);
INSERT INTO NABAVKE(ID,LEKID,PROIZVODJACID,KOLICINA,CENA) VALUES (2,1,2,3,1200);
INSERT INTO NABAVKE(ID,LEKID,PROIZVODJACID,KOLICINA,CENA) VALUES (3,2,3,1,100);
INSERT INTO NABAVKE(ID,LEKID,PROIZVODJACID,KOLICINA,CENA) VALUES (4,5,7,3,2000);
INSERT INTO NABAVKE(ID,LEKID,PROIZVODJACID,KOLICINA,CENA) VALUES (5,8,9,2,280);
INSERT INTO NABAVKE(ID,LEKID,PROIZVODJACID,KOLICINA,CENA) VALUES (6,6,6,7,3500);
INSERT INTO NABAVKE(ID,LEKID,PROIZVODJACID,KOLICINA,CENA) VALUES (7,9,2,3,370);
INSERT INTO NABAVKE(ID,LEKID,PROIZVODJACID,KOLICINA,CENA) VALUES (8,13,2,5,1450);
INSERT INTO NABAVKE(ID,LEKID,PROIZVODJACID,KOLICINA,CENA) VALUES (9,12,6,7,2430);
INSERT INTO NABAVKE(ID,LEKID,PROIZVODJACID,KOLICINA,CENA) VALUES (10,4,4,9,5000);