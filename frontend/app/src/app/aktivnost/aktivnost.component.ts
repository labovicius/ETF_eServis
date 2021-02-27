import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-aktivnost',
  templateUrl: './aktivnost.component.html',
  styleUrls: ['./aktivnost.component.css']
})
export class AktivnostComponent implements OnInit {

  constructor(private UserService: UserService, private router: Router) { }

  ngOnInit(): void {

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
  }


  korisnik: User;
  zaposleni: User[];
  studenti: User[];

  // POSTAVLJANJE AKTIVNOSTI NA 1
  plus(data) {
    this.UserService.plus(data).subscribe();
    location.reload();
  }

  // POSTAVLJANJE AKTIVNOSTI NA 0
  minus(data) {
    this.UserService.minus(data).subscribe();
    location.reload();
  }

}
