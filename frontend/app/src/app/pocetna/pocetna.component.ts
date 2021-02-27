import { User } from './../model/user.model';
import { Component, OnInit, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css']
})
export class PocetnaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.removeItem('zaposlen');
    localStorage.removeItem('predmet');
    // INICIJALIZACIJA KORISNIKA
    this.kor = JSON.parse(localStorage.getItem("prijavljen"));
  }

  kor: User;
  public slides = [
    {
      src: "assets/etf-zgrada.jpg"
    },
    {
      src: "assets/etf-tesla.jpg"
    },
    {
      src: "assets/etf-sala.jpg"
    }
  ];

}
