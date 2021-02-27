import { Router } from '@angular/router';
import { Predmet } from './../model/predmet.model';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-predmet',
  templateUrl: './predmet.component.html',
  styleUrls: ['./predmet.component.css']
})
export class PredmetComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

    // INICIJALIZACIJA KORISNIKA I AUTORIZACIJA
    this.korisnik = JSON.parse(localStorage.getItem('prijavljen'));
    if (this.korisnik == null) {
      this.router.navigate(['/']);
    }
    // INICIJALIZACIJA PREDMETA ZA PRIKAZIVANJE
    this.predmet = JSON.parse(localStorage.getItem('predmet'));
    this.danasnjiDatum.setDate(this.danasnjiDatum.getDate() - 7);
    for (var i = 0; i < this.predmet.obavestenja.length; i++) {
      this.predmet.obavestenja[i]['dat'] = new Date(this.predmet.obavestenja[i]['datum']);
      this.predmet.obavestenja[i]['flag'] = 1;
    }

    this.sorting();
  }

  public navItems = [
    { name: "reorder", text: "Obavestenja o predmetu" },
    { name: "info", text: "Informacije o predmetu" },
    { name: "menu_book", text: "Predavanja" },
    { name: "fitness_center", text: "Vezbe" },
    { name: "quiz", text: "Ispitna pitanja" },
    { name: "science", text: "Laboratorija" },
    { name: "laptop_chromebook", text: "Projekat / Domaci zadaci" }

  ];
  korisnik: User;
  predmet: Predmet;
  danasnjiDatum = new Date();
  public selected = "Obavestenja o predmetu";


  // SORTIRANJE OBAVESTENJA NA PREDMETU
  sorting() {

    this.predmet.obavestenja = this.predmet.obavestenja.sort((a, b) => {
      if (this.danasnjiDatum > a['dat']) a['flag'] = 0;
      if (this.danasnjiDatum > b['dat']) b['flag'] = 0;
      if (a['dat'] > b['dat']) return -1;
      else {
        if (a['dat'] < b['dat']) return 1;
        else return 0;
      }
    });
  }

  // PRIKAZ KONKRETNE STRANICE NA PREDMETU
  public navigate(item) {
    this.selected = item.text;
  }


}
