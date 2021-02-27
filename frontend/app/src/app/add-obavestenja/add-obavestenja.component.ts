import { Router } from '@angular/router';
import { User } from './../model/user.model';
import { Tipovi } from './../model/typesNot.model';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-obavestenja',
  templateUrl: './add-obavestenja.component.html',
  styleUrls: ['./add-obavestenja.component.css']
})
export class AddObavestenjaComponent implements OnInit {

  constructor(private UserService: UserService, private router: Router) { }

  ngOnInit(): void {
    //  INICIJALIZUJI SE SVI TIPOVI OBAVESTENJA
    this.UserService.getTypeNot().subscribe((n: Tipovi[]) => {
      this.typeNot = n;
    });


    //  INICIJALIZUJI SE KORISNIK I VRSI SE AUTORIZACIJA
    this.kor = JSON.parse(localStorage.getItem('prijavljen'));

    if (this.kor == null) {
      this.router.navigate(['/']);
    }

    if (this.kor.type != 'A') {
      this.router.navigate(['/']);
    }
  }
  kor: User;
  typeNot: Tipovi[];
  novi_tip: string;
  obavestenje: string;
  type: string;
  danasnjiDatum = new Date();


  // DODAVANJE NOVOG TIPA
  new_type() {
    this.UserService.setNew(this.novi_tip).subscribe(ob => {
      if (ob['poruka'] == 1)
        alert("Dodat novi tip");
      location.reload();
    });
  }

  // DODAVANJE NOVE NOTIFIKACIJE
  newNotification() {

    let pom = this.danasnjiDatum.getMonth() + 1;
    let mesec;
    if (pom < 10) {
      mesec = "0" + pom;
    }
    else mesec = pom;
    let datum = this.danasnjiDatum.getFullYear().toString() + "-" + mesec + "-" + this.danasnjiDatum.getDate().toString();
    this.UserService.createNewNotification(this.type, this.obavestenje, datum).subscribe(ob => {
      if (ob['poruka'] == 1) {
        alert("Dodato obavestenje");
        location.reload();
      }
    });
  }

}
