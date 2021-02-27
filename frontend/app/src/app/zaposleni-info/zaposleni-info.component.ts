import { User } from './../model/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zaposleni-info',
  templateUrl: './zaposleni-info.component.html',
  styleUrls: ['./zaposleni-info.component.css']
})
export class ZaposleniInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // INICIJALIZACIJA ZAPOSLENOG ZA PRIKAZIVANJE
    this.zaposlen = JSON.parse(localStorage.getItem('zaposlen'));
  }

  zaposlen: User;

}
