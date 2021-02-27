import { NgLocalization } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-zaposleni',
  templateUrl: './add-zaposleni.component.html',
  styleUrls: ['./add-zaposleni.component.css']
})
export class AddZaposleniComponent implements OnInit {

  constructor(private userService: UserService, private ruter: Router) { }

  ngOnInit(): void {

    // INICIJALIZACIJA KORISNIKA I AUTORIZACIJA
    this.kor = JSON.parse(localStorage.getItem('prijavljen'));

    if (this.kor == null) {
      this.ruter.navigate(['/']);
    }

    if (this.kor.type != 'A') {
      this.ruter.navigate(['/']);
    }
  }
  kor: User;
  username: string;
  password: string;
  name: string;
  surname: string;
  address: string;
  phone: string;
  web: string;
  title: string;
  cabinet: string;
  photo: string;

  greska: string;

  // DODAVANJE NOVOG ZAPOSLENOG
  add_zaposleni() {

    if (this.cabinet == null) {
      this.greska = 'Morate uneti broj kabineta!\n';
    }

    if (this.title == null) {
      this.greska = 'Morate odabrati zvanje!\n';
    }

    if (this.surname == null) {
      this.greska = 'Morate uneti prezime!\n';
    }

    if (this.name == null) {
      this.greska = 'Morate uneti ime!\n';
    }

    if (this.password == null) {
      this.greska = 'Morate uneti sifru!\n';
    }

    if (this.username == null) {
      this.greska = 'Morate uneti korisnicko ime!\n';
    }

    if (!this.greska) {
      this.userService.add_zaposleni(this.username, this.password, this.name, this.surname, this.address, this.phone, this.web, this.title, this.cabinet).subscribe(ob => {
        if (ob['user'] == 'ok') {
          alert('Zaposleni added');
          location.reload();
        }
        else if (ob['user'] == 'postoji') {
          this.greska = 'Korisnicko ime je zauzeto!\n';
        }
      })
    }
  }
}
