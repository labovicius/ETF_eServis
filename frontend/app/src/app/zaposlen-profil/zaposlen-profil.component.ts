import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-zaposlen-profil',
  templateUrl: './zaposlen-profil.component.html',
  styleUrls: ['./zaposlen-profil.component.css']
})
export class ZaposlenProfilComponent implements OnInit {

  constructor(private UserService: UserService, private router: Router) { }

  ngOnInit(): void {

    // INICIJALIZACIJA KORISNIKA I AUTORIZACIJA
    this.zaposlen = JSON.parse(localStorage.getItem('prijavljen'));
    if (this.zaposlen == null) {
      this.router.navigate(['/']);
    }

    if (this.zaposlen.type != 'Z') {
      this.router.navigate(['/']);
    }
  }

  zaposlen: User;

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

  // AZURIRANJE ZAPOSLENOG
  changeZ() {
    this.UserService.editZ(this.username, this.password, this.name, this.surname, this.address, this.phone, this.web, this.title, this.cabinet).subscribe((odg) => {
      if (odg['poruka'] == -1) {
        alert("Bad");
      }
      else {
        location.reload();
      }
    })
  }
}
