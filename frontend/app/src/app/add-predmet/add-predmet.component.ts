import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-add-predmet',
  templateUrl: './add-predmet.component.html',
  styleUrls: ['./add-predmet.component.css']
})
export class AddPredmetComponent implements OnInit {

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
  }


  kor: User;
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


  // DODAVANJE NOVOG PREDMETA

  add() {

    let pom = this.danasnjiDatum.getMonth() + 1;
    let mesec;
    if (pom < 10) {
      mesec = "0" + pom;
    }
    else mesec = pom;
    let datum = this.danasnjiDatum.getFullYear().toString() + "-" + mesec + "-" + this.danasnjiDatum.getDate().toString();

    this.UserService.add_predmet(this.naziv, this.smer, this.cilj, this.fond, this.poeni, this.sifra, this.semestar, this.type, this.textI, this.putanjaI,
      this.textL, this.putanjaL, this.textO, this.putanjaO, this.textP, this.putanjaP, this.textPr, this.putanjaPr, this.textV, this.putanjaV, datum).subscribe((odg) => {
        if (odg['poruka'] == -1) {
          alert("Bad");
        }
        else {
          alert('Predmet added');
          location.reload();
        }
      });
  }

}
