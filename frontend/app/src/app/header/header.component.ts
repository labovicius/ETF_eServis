import { User } from './../model/user.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

    // INICIJALIZACIJA KORISNIKA 
    this.korisnik = JSON.parse(localStorage.getItem('prijavljen'));
  }

  korisnik: User;

  public odsek: Array<{ field: string }> = [
    { field: "SI" },
    { field: "RTI" },
    { field: "Ostali odseci" }
  ];

  public nauka: Array<{ field: string }> = [
    { field: "Istrazivanja" },
    { field: "Projekti" }
  ];



  // NAVIGACIJA KA STRANICAMA SA DROPDOWN MENU
  forward(nfield) {
    switch (nfield) {
      case "SI":
        this.router.navigate(['/si']);
        break;
      case "RTI":
        this.router.navigate(['/rti']);
        break;
      case "Ostali odseci":
        this.router.navigate(['/ostali_odseci']);
        break;
      case "Istrazivanja":
        this.router.navigate(['/istrazivanja']);
        break;
      case "Projekti":
        this.router.navigate(['/projekti']);
        break;
    }
  }

  // LOGOUT
  logout() {
    localStorage.removeItem('prijavljen');
    this.router.navigate(['/']);
    location.reload();
  }

}
