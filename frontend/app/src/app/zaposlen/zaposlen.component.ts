import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { User } from './../model/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zaposlen',
  templateUrl: './zaposlen.component.html',
  styleUrls: ['./zaposlen.component.css']
})
export class ZaposlenComponent implements OnInit {

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
  old_password: string;
  new_password: string;
  greska: string;

  // PROMENA LOZINKE
  changePass() {
    this.UserService.changePass(this.zaposlen.username, this.old_password, this.new_password).subscribe((user: User) => {
      if (user) {
        localStorage.removeItem('prijavljen');
        this.router.navigate(['/']);
      }
      this.greska = 'Stara lozinka nije tacna';
    });
  }
}
