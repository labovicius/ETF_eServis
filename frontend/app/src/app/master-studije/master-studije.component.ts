import { User } from './../model/user.model';
import { Predmet } from './../model/predmet.model';
import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-studije',
  templateUrl: './master-studije.component.html',
  styleUrls: ['./master-studije.component.css']
})
export class MasterStudijeComponent implements OnInit {

  constructor(private UserService: UserService, private router: Router) { }

  ngOnInit(): void {

    // INICIJALIZACIJA SVIH PREDMETA
    this.UserService.getPredmeti().subscribe((p: Predmet[]) => {
      this.predmeti = p;
    });

    // INICIJALIZACIJA KORISNIKA 
    this.korisnik = JSON.parse(localStorage.getItem('prijavljen'));

  }

  predmeti: Predmet[];
  korisnik: User;


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
