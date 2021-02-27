import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private ruter: Router) { }

  ngOnInit(): void {

    // INICIJALIZACIJA KORISNIKA 
    this.kor = JSON.parse(localStorage.getItem("prijavljen"));
    if (this.kor != null) this.ulogovan = 1;
  }

  username: string;
  password: string;
  ulogovan: number = 0;
  poruka: string;
  kor: User;


  // LOGOVANJE KORISNIKA
  login() {
    this.userService.login(this.username, this.password).subscribe((user: User) => {
      this.kor = user;
      if (user) {
        localStorage.setItem('prijavljen', JSON.stringify(user));
        if (user.type == "A") {
          this.ulogovan = 1;
          location.reload();
        }
        else if (!user.status) {
          localStorage.removeItem('prijavljen');
          this.poruka = 'Administrator jos uvek nije odobrio vas nalog!';
        } else if (user.type == "S") {
          this.ulogovan = 1;

          if (user.changePass == 1)
            this.ruter.navigate(['/student']);
          else
            location.reload();
        }
        else if (user.type == "Z") {
          this.ulogovan = 1;
          if (user.changePass == 1)
            this.ruter.navigate(['/zaposlen']);
          else
            location.reload();
        }
      }
      else {
        this.poruka = "Losi podaci, pokusajte ponovo!";
      }
    });
  }
}
