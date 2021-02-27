import { Predmet } from './../model/predmet.model';
import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-zaposleni',
  templateUrl: './zaposleni.component.html',
  styleUrls: ['./zaposleni.component.css']
})
export class ZaposleniComponent implements OnInit {

  constructor(private UserService: UserService, private router: Router) { }

  ngOnInit(): void {
    // INICIJALIZACIJA SVIH ZAPOSLENIH
    this.UserService.getStaff().subscribe((z: User[]) => {
      this.zaposleni = z;
    });

  }

  zaposleni: User[];

  // CUVANJE ZAPOSLENOG KOJI CE SE PRIKAZATI NA NOVOJ STRANICI
  save(z) {
    localStorage.setItem('zaposlen', JSON.stringify(z));
  }
}
