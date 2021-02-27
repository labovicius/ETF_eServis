import { Tipovi } from './../model/typesNot.model';
import { UserService } from './../services/user.service';
import { Component, LOCALE_ID, OnInit } from '@angular/core';

@Component({
  selector: 'app-obavestenja',
  templateUrl: './obavestenja.component.html',
  styleUrls: ['./obavestenja.component.css']
})
export class ObavestenjaComponent implements OnInit {

  constructor(private UserService: UserService) { }

  ngOnInit(): void {

    // INICIJALIZACIJA SVIH NOTIFIKACIJA
    this.UserService.getNotifications().subscribe((n: Notification[]) => {
      this.obavestenja = n;
      this.sorting();
    });
    this.danasnjiDatum.setMonth(this.danasnjiDatum.getMonth() - 3);

    // INICIJALIZACIJA SVIH TIPOVA NOTIFIKACIJA
    this.UserService.getTypeNot().subscribe((n: Tipovi[]) => {
      this.typeNot = n;
    });

  }

  typeNot: Tipovi[];
  obavestenja: Notification[];
  danasnjiDatum = new Date();

  // SORTIRANJE NOTIFIKACIJA PO DATUMU
  // I POSTAVLJANJE FLAG NA 0
  // UKOLIKO JE PROSLO TRI MESECA OD NOTIFIKACIJE
  sorting() {

    for (var i = 0; i < this.obavestenja.length; i++) {
      this.obavestenja[i]['dat'] = new Date(this.obavestenja[i]['datum']);
      this.obavestenja[i]['flag'] = 1;
    }

    this.obavestenja = this.obavestenja.sort((a, b) => {
      if (this.danasnjiDatum > a['dat']) a['flag'] = 0;
      if (this.danasnjiDatum > b['dat']) b['flag'] = 0;
      if (a['dat'] > b['dat']) return -1;
      else {
        if (a['dat'] < b['dat']) return 1;
        else return 0;
      }
    });
  }
}

