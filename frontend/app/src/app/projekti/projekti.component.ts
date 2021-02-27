import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-projekti',
  templateUrl: './projekti.component.html',
  styleUrls: ['./projekti.component.css']
})
export class ProjektiComponent implements OnInit {

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    // INICIJALIZACIJA SVIH ZAPOSLENIH
    this.UserService.getStaff().subscribe((z: User[]) => {
      this.zaposleni = z;
    });
  }

  zaposleni: User[];

  // TRAZENJE ZAPOSLENOG NA PROJEKTU U NIZU SVIH ZAPOSLENIH
  find(u) {
    this.zaposleni.forEach(element => {
      if (element['username'] == u)
        localStorage.setItem('zaposlen', JSON.stringify(element));

    });
  }

}
