import { Predmet } from './../model/predmet.model';
import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-zaposlen-predmet',
  templateUrl: './zaposlen-predmet.component.html',
  styleUrls: ['./zaposlen-predmet.component.css']
})
export class ZaposlenPredmetComponent implements OnInit {

  constructor(private UserService: UserService, private router: Router) { }

  ngOnInit(): void {

    // INICIJALIZACIJA KORISNIKA I AUTORIZACIJA
    this.z = JSON.parse(localStorage.getItem('prijavljen'));
    if (this.z == null) {
      this.router.navigate(['/']);
    }

    if (this.z.type != 'Z') {
      this.router.navigate(['/']);
    }

    // INICIJALIZACIJA SVIH PREDMETA
    this.UserService.getPredmeti().subscribe((p: Predmet[]) => {
      this.predmeti = p;
    })
  }

  z: User;
  predmeti: Predmet[];
  pred: String;
  predmet: Predmet;
  public selected = "Obavestenja o predmetu";
  putanjaP: String;
  putanjaV: String;
  putanjaI: String;
  putanjaL: String;
  putanjaPro: String;

  public navItems = [
    { name: "reorder", text: "Obavestenja o predmetu" },
    { name: "info", text: "Informacije o predmetu" },
    { name: "menu_book", text: "Predavanja" },
    { name: "fitness_center", text: "Vezbe" },
    { name: "quiz", text: "Ispitna pitanja" },
    { name: "science", text: "Laboratorija" },
    { name: "laptop_chromebook", text: "Projekat / Domaci zadaci" }

  ];

  public navigate(item) {
    this.selected = item.text;
  }

  // UCITAVANJE PREDMETA ZA PRIKAZ
  load() {
    this.predmeti.forEach(element => {
      if (element['naziv'] == this.pred)
        this.predmet = element;
    });
  }

  // DODAVANJE NOVOG PREDAVANJA
  addPredavanja(p) {
    this.UserService.addPredavanja(p.sifra, this.putanjaP).subscribe(ob => {
      if (ob['poruka'] == 1)
        alert("Dodato novo predavanje");
      location.reload();
    });
  }

  // DODAVANJE NOVOG ISPITA
  addIspit(p) {

    this.UserService.addIspit(p.sifra, this.putanjaI).subscribe(ob => {
      if (ob['poruka'] == 1)
        alert("Dodat novi ispit");
      location.reload();
    });

  }
  // DODAVANJE NOVIH VEZBI
  addVezbe(p) {

    this.UserService.addVezbe(p.sifra, this.putanjaV).subscribe(ob => {
      if (ob['poruka'] == 1)
        alert("Dodate nove vezbe");
      location.reload();
    });

  }

  // DODAVANJE NOVOG PROJEKTA
  addProjekat(p) {

    this.UserService.addProjekat(p.sifra, this.putanjaPro).subscribe(ob => {
      if (ob['poruka'] == 1)
        alert("Dodat novi projekat");
      location.reload();
    });

  }
  // DODAVANJE NOVOG LABA
  addLab(p) {

    this.UserService.addLab(p.sifra, this.putanjaL).subscribe(ob => {
      if (ob['poruka'] == 1)
        alert("Dodat novi lab");
      location.reload();
    });

  }
  // BRISANJE PREDAVANJA
  deletePredavanja(predmet, text, putanja) {
    this.UserService.deletePredavanja(predmet.sifra, text, putanja).subscribe(ob => {
      if (ob['poruka'] == 1)
        alert("Obrisano");
      location.reload();
    });
  }
  // BRISANJE ISPITA
  deleteIspit(predmet, text, putanja) {
    this.UserService.deleteIspit(predmet.sifra, text, putanja).subscribe(ob => {
      if (ob['poruka'] == 1)
        alert("Obrisano");
      location.reload();
    });
  }
  // BRISANJE VEZBI
  deleteVezbe(predmet, text, putanja) {
    this.UserService.deleteVezbe(predmet.sifra, text, putanja).subscribe(ob => {
      if (ob['poruka'] == 1)
        alert("Obrisano");
      location.reload();
    });
  }

  // BRISANJE PROJEKTA
  deleteProjekat(predmet, text, putanja) {
    this.UserService.deleteProjekat(predmet.sifra, text, putanja).subscribe(ob => {
      if (ob['poruka'] == 1)
        alert("Obrisano");
      location.reload();
    });
  }

  // BRISANJE LABA
  deleteLab(predmet, text, putanja) {
    this.UserService.deleteLab(predmet.sifra, text, putanja).subscribe(ob => {
      if (ob['poruka'] == 1)
        alert("Obrisano");
      location.reload();
    });
  }

  // CUVANJE OBAVESTENJA
  saveO(p) {
    this.UserService.addO(p.sifra, p).subscribe(ob => {
      if (ob['poruka'] == 'ok')
        alert("Sacuvano");
      location.reload();
    });
  }
  // BRISANJE OBAVESTENJA
  deleteO(p, ob) {
    this.UserService.deleteO(p.sifra, ob.datum, ob.putanja, ob.text, ob.nastavnik).subscribe(ob => {
      if (ob['poruka'] == 1)
        alert("Obrisano");
      location.reload();
    });
  }

  // PROMENA PROJEKTA ILI LABORATORIJA
  change(p) {
    this.UserService.change(p, p.sifra).subscribe(ob => {
      if (ob['poruka'] == 'ok')
        alert("Promenjeno");
      location.reload();
    });
  }
  // CUVANJE INFORMACIJA O PREDMETU
  save(predmet) {
    this.UserService.savePredmet(predmet, predmet.sifra).subscribe(ob => {
      if (ob['predmet'] == 'ok') {
        alert('Sacuvano');
        location.reload();
      }
    });
  }

}
