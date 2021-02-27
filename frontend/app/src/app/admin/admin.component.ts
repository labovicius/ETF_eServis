import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { User } from './../model/user.model';
import { Component, OnInit } from '@angular/core';
import { Predmet } from '../model/predmet.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private UserService: UserService, private router: Router) { }

  ngOnInit(): void {
    localStorage.removeItem('promeniS');
    localStorage.removeItem('promeniZ');
    localStorage.removeItem('promeniP');

    // INICIJALIZACIJA KORISNIKA I AUTORIZACIJA
    this.korisnik = JSON.parse(localStorage.getItem('prijavljen'));
    if (this.korisnik == null) {
      this.router.navigate(['/']);
    }

    if (this.korisnik.type != 'A') {
      this.router.navigate(['/']);
    }

    // INICIJALIZACIJA SVIH ZAPOSLENIH
    this.UserService.getStaff().subscribe((z: User[]) => {
      this.zaposleni = z;
    });

    // INICIJALIZACIJA SVIH STUDENATA
    this.UserService.getStudents().subscribe((s: User[]) => {
      this.studenti = s;
    });

    // INICIJALIZACIJA SVIH PREDMETA
    this.UserService.getPredmeti().subscribe((p: Predmet[]) => {
      this.predmeti = p;
    });

  }
  predmeti: Predmet[];
  korisnik: User;
  zaposleni: User[];
  studenti: User[];

  // AZURIRANJE STUDENTA
  editS(u) {
    localStorage.setItem('promeniS', JSON.stringify(u));
    this.router.navigate(['update']);
  }

  // BRISANJE STUDENTA
  deleteS(u) {

    this.UserService.deleteS(u.username).subscribe((odg) => {
      if (odg['poruka'] == -1) {
        alert("Bad");
      }
      else {
        this.ngOnInit();
      }
    })
  }
  // AZURIRANJE PREDMETA
  editP(u) {
    localStorage.setItem('promeniP', JSON.stringify(u));
    this.router.navigate(['update']);
  }
  // BRISANJE PREDMETA
  deleteP(u) {

    this.UserService.deleteP(u.naziv, u.sifra).subscribe((odg) => {
      if (odg['poruka'] == -1) {
        alert("Bad");
      }
      else {
        this.ngOnInit();
      }
    })
  }

  // AZURIRANJE ZAPOSLENOG
  editZ(u) {
    localStorage.setItem('promeniZ', JSON.stringify(u));
    this.router.navigate(['update']);
  }

  // BRISANJE ZAPOSLENOG
  deleteZ(u) {
    this.UserService.deleteZ(u.username).subscribe((odg) => {
      if (odg['poruka'] == -1) {
        alert("Bad");
      }
      else {
        this.ngOnInit();
      }
    })
  }

}