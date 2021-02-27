import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Predmet } from '../model/predmet.model';
import { User } from '../model/user.model';


@Component({
  selector: 'app-zaposlen-obavestenje',
  templateUrl: './zaposlen-obavestenje.component.html',
  styleUrls: ['./zaposlen-obavestenje.component.css']
})
export class ZaposlenObavestenjeComponent implements OnInit {

  constructor(private UserService: UserService, private router: Router) { }

  ngOnInit(): void {
    // INICIJALIZACIJA KORISNIKA I AUTORIZACIJA
    this.z = JSON.parse(localStorage.getItem('prijavljen'));
    if (this.z == null) {
      this.router.navigate(['/']);
    }

    if (this.z.type != 'Z') {
      this.router.navigate(['/']);
    }

    // INICIJALIZACIJA SVIH PREDMETA
    this.UserService.getPredmeti().subscribe((p: Predmet[]) => {
      this.predmeti = p;
    })
  }

  z: User;
  predmeti: Predmet[];
  naslov: String;
  tekst: String;
  predmet: String;
  datum: String;
  file: String;
  predmetic: Predmet;

  // DODAVANJE NOVOG OBAVESTENJA
  add() {
    this.UserService.novoObavestenje(this.tekst, this.predmet, this.datum, this.file, this.z.username).subscribe(ob => {
      if (ob['poruka'] == 1) {
        alert("Dodato novo obavestenje");
      }
    });
  }
}
