import { User } from './../model/user.model';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Predmet } from '../model/predmet.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rti',
  templateUrl: './rti.component.html',
  styleUrls: ['./rti.component.css']
})
export class RtiComponent implements OnInit {


  constructor(private UserService: UserService, private router: Router) { }

  ngOnInit(): void {
    // INICIJALIZACIJA SVIH RTI PREDMETA
    this.UserService.getPredmetiRTI().subscribe((p: Predmet[]) => {
      this.predmeti = p;
    });
    // INICIJALIZACIJA KORISNIKA
    this.korisnik = JSON.parse(localStorage.getItem('prijavljen'));
  }
  predmeti: Predmet[];
  korisnik: User;
  greska: string;

  // CUVANJE PREDMETA U LOCALSTORAGE KOJI CE SE PRIKAZATI NA NOVOJ STRANICI
  save(p) {

    if (this.korisnik == null)
      alert("Niste prijavljeni za ovaj predmet!");
    if (p.student == null)
      alert("Niste prijavljeni za ovaj predmet!");
    let flag = 1;
    if (this.korisnik != null)
      if (this.korisnik.type == 'S') {
        p.student.forEach(element => {
          if (this.korisnik.username == element) {
            localStorage.setItem('predmet', JSON.stringify(p));
            this.router.navigate(['/predmet']);
            flag = 0;
          }
        });
      }
      else if (this.korisnik.type == 'Z') {
        p.nastavnik.forEach(element => {
          if (this.korisnik.username == element) {
            localStorage.setItem('predmet', JSON.stringify(p));
            this.router.navigate(['/predmet']);
            flag = 0;
          }
        });
      }
      else if (this.korisnik.type == 'A') {
        localStorage.setItem('predmet', JSON.stringify(p));
        this.router.navigate(['/predmet']);
      }
      else alert("Niste prijavljeni za ovaj predmet!");

    if (this.korisnik != null)
      if (this.korisnik.type != 'A')
        if (flag)
          alert("Niste prijavljeni za ovaj predmet!");

  }
}
