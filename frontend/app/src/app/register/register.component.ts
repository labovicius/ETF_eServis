import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private servis: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  username: string;
  password: string;
  name: string;
  surname: string;
  index: string;
  studije: string;

  greska: string;
  // REGISTRACIJA NOVIH STUDENATA
  register() {

    if (this.studije == null) {
      this.greska = 'Morate uneti tip!\n';
    }

    if (this.index == null) {
      this.greska = 'Morate uneti indeks!\n';
    }

    if (this.surname == null) {
      this.greska = 'Morate uneti prezime!\n';
    }

    if (this.name == null) {
      this.greska = 'Morate uneti ime!\n';
    }

    if (this.password == null) {
      this.greska = 'Morate uneti sifra!\n';
    }

    if (this.username == null) {
      this.greska = 'Morate uneti korisnicko ime!\n';
    }

    let i = this.name.charAt(0).toLowerCase();
    let p = this.surname.charAt(0).toLowerCase();
    let god = this.index.slice(2);
    god = god.replace('/', '');
    var regex = new RegExp(p + i + god + this.studije + "@student.etf.bg.ac.rs$");


    if (!regex.test(this.username)) {
      this.greska = 'Korisnicko ime je u losem formatu!\n';
    }

    if (!this.greska) {
      this.servis.register(this.username, this.password, this.name, this.surname, this.index, this.studije).subscribe(ob => {
        if (ob['user'] == 'ok') {
          this.router.navigate(['/']);
        }
      })
    }
  }
}
