import { User } from './../model/user.model';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Predmet } from '../model/predmet.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private UserService: UserService, private router: Router) { }

  ngOnInit(): void {
    // INICIJALIZACIJA KORISNIKA I AUTORIZACIJA
    this.korisnik = JSON.parse(localStorage.getItem('prijavljen'));
    if (this.korisnik == null) {
      this.router.navigate(['/']);
    }

    if (this.korisnik.type != 'S') {
      this.router.navigate(['/']);
    }
    // INICIJALIZACIJA SVIH PREDMETA
    this.UserService.getPredmeti().subscribe((p: Predmet[]) => {
      this.predmeti = p;
    })
  }

  obavestenja: Notification[];
  korisnik: User;
  predmeti: Predmet[];
  old_password: string;
  new_password: string;
  greska: string;

  // PROMENA LOZINKE
  changePass() {
    this.UserService.changePass(this.korisnik.username, this.old_password, this.new_password).subscribe((user: User) => {
      if (user) {
        localStorage.removeItem('prijavljen');
        this.router.navigate(['/']);
      }
      this.greska = 'Stara lozinka nije tacna';
    });
  }

  // PRIJAVA PREDMETA 
  prijavi(p) {
    this.UserService.prijavi(p.sifra, this.korisnik.username).subscribe((odg) => {
      if (odg['poruka'] == -1) {
        alert("Bad");
      }
      else {
        location.reload();
      }
    });
  }
  // ODJAVA PREDMETA
  odjavi(p) {
    this.UserService.odjavi(p.sifra, this.korisnik.username).subscribe((odg) => {
      if (odg['poruka'] == -1) {
        alert("Bad");
      }
      else {
        location.reload();
      }
    });
  }

}
