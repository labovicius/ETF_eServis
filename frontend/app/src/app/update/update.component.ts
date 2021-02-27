import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Predmet } from '../model/predmet.model';
import { User } from '../model/user.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private UserService: UserService, private router: Router) { }

  ngOnInit(): void {
    // INICIJALIZACIJA KORISNIKA I AUTORIZACIJA
    this.kor = JSON.parse(localStorage.getItem('prijavljen'));

    if (this.kor == null) {
      this.router.navigate(['/']);
    }

    if (this.kor.type != 'A') {
      this.router.navigate(['/']);
    }

    if (localStorage.getItem('promeniS'))
      this.student = JSON.parse(localStorage.getItem('promeniS'));

    if (localStorage.getItem('promeniZ'))
      this.zaposleni = JSON.parse(localStorage.getItem('promeniZ'));

    if (localStorage.getItem('promeniP'))
      this.predmet = JSON.parse(localStorage.getItem('promeniP'));

    this.kor = JSON.parse(localStorage.getItem('prijavljen'));
  }
  kor: User;
  predmet: Predmet;
  zaposleni: User;
  student: User;

  username: string;
  password: string;
  name: string;
  surname: string;
  index: string;
  type_st: string;
  changePass: string;

  username2: string;
  password2: string;
  name2: string;
  surname2: string;
  address: string;
  phone: string;
  web: string;
  title: string;
  cabinet: string;
  photo: string;

  naziv: String;
  smer: String;
  cilj: String;
  fond: String;
  poeni: String;
  sifra: String;
  semestar: String;
  type: String;
  textO: String;
  putanjaO: String;
  textL: String;
  putanjaL: String;
  textI: String;
  putanjaI: String;
  textP: String;
  putanjaP: String;
  textPr: String;
  putanjaPr: String;
  textV: String;
  putanjaV: String;
  danasnjiDatum = new Date();

  // AZURIRANJE STUDENTA
  changeS() {
    this.UserService.editS(this.username, this.password, this.name, this.surname, this.index, this.type_st).subscribe((odg) => {
      if (odg['poruka'] == -1) {
        alert("Bad");
      }
      else {
        localStorage.removeItem('promeniS');
        this.router.navigate(['/admin']);

      }
    })
  }
  // AZURIRANJE ZAPOSLENOG
  changeZ() {
    this.UserService.editZ(this.username2, this.password2, this.name2, this.surname2, this.address, this.phone, this.web, this.title, this.cabinet).subscribe((odg) => {
      if (odg['poruka'] == -1) {
        alert("Bad");
      }
      else {
        localStorage.removeItem('promeniZ');
        this.router.navigate(['/admin']);

      }
    })
  }
  // AZURIRANJE PREDMETA
  changeP() {

    this.UserService.editP(this.naziv, this.smer, this.cilj, this.fond, this.poeni, this.sifra, this.semestar, this.type, this.textI, this.putanjaI,
      this.textL, this.putanjaL, this.textO, this.putanjaO, this.textP, this.putanjaP, this.textPr, this.putanjaPr, this.textV, this.putanjaV, this.danasnjiDatum).subscribe((odg) => {
        if (odg['poruka'] == -1) {
          alert("Bad");
        }
        else {
          localStorage.removeItem('promeniP');
          this.router.navigate(['/admin']);
        }
      });

  }

}
