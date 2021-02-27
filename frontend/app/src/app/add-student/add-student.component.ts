import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {


  constructor(private userService: UserService, private ruter: Router) { }

  ngOnInit(): void {

    // INICIJALIZACIJA KORISNIKA I AUTORIZACIJA

    this.kor = JSON.parse(localStorage.getItem('prijavljen'));

    if (this.kor == null) {
      this.ruter.navigate(['/']);
    }

    if (this.kor.type != 'A') {
      localStorage.removeItem('prijavljen');
      this.ruter.navigate(['/']);
    }
  }
  kor: User;
  username: string;
  password: string;
  name: string;
  surname: string;
  index: string;
  studije: string;

  greska: string;


  // DODAVANJE NOVOG STUDENTA

  add_student() {

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
      this.userService.register(this.username, this.password, this.name, this.surname, this.index, this.studije).subscribe(ob => {
        if (ob['user'] == 'ok') {
          alert('User added');
          location.reload();
        }
      })
    }
  }
}