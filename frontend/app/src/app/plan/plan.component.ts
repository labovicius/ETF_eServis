import { Router } from '@angular/router';
import { Predmet } from './../model/predmet.model';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

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


  // DODAVANJE PROFESORA ZA PREDAVANJA U PLANU ANGAZMANA
  addP(p) {

    if (p.profesorP != null) {
      var br1 = 0;
      var br2 = 0;
      if (p.grupa != 0) {
        br1 = p.grupa[0].p;
        br2 = p.grupa[0].v;
      }
      this.UserService.addGroupP(p.naziv, p.profesorP, br1, br2).subscribe((odg) => {
        if (odg['poruka'] == -1) {
          alert("Bad");
        }
        else {
          location.reload();
        }
      });
    }
    else alert('Polje profesor je obavezno');
  }
  // DODAVANJE PROFESORA ZA VEZBE U PLANU ANGAZMANA
  addV(p) {
    if (p.profesorV != null) {

      var br1 = 0;
      var br2 = 0;

      if (p.grupa != 0) {
        br1 = p.grupa[0].p;
        br2 = p.grupa[0].v;
      }
      this.UserService.addGroupV(p.naziv, p.profesorV, br1, br2).subscribe((odg) => {
        if (odg['poruka'] == -1) {
          alert("Bad");
        }
        else {
          location.reload();
        }
      });
    }
    else alert('Polje profesor je obavezno');

  }

}
