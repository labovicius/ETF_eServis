import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Predmet } from '../model/predmet.model';
import { User } from '../model/user.model';

@Component({
  selector: 'app-add-student-predmet',
  templateUrl: './add-student-predmet.component.html',
  styleUrls: ['./add-student-predmet.component.css']
})
export class AddStudentPredmetComponent implements OnInit {

  constructor(private UserService: UserService, private router: Router) { }

  ngOnInit(): void {
    // INICIJALIZACIJA SVIH PREDMETA

    this.UserService.getPredmeti().subscribe((p: Predmet[]) => {
      this.predmeti = p;
    });

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
  predmeti: Predmet[];

  // PRIHVATANJE STUDENTSKE PRIJAVE ZA PREDMET
  odobravanje(p, s) {
    this.UserService.odobravanje(p.sifra, s).subscribe((odg) => {
      if (odg['poruka'] == -1) {
        alert("Bad");
      }
      else {
        location.reload();
      }
    });
  }

  // ODBIJANJE STUDENTSKE PRIJAVE ZA PREDMET
  odbijanje(p, s) {
    this.UserService.odbijanje(p.sifra, s).subscribe((odg) => {
      if (odg['poruka'] == -1) {
        alert("Bad");
      }
      else {
        location.reload();
      }
    });
  }

}
