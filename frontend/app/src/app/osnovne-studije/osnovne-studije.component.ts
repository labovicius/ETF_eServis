import { Predmet } from './../model/predmet.model';
import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-osnovne-studije',
  templateUrl: './osnovne-studije.component.html',
  styleUrls: ['./osnovne-studije.component.css']
})
export class OsnovneStudijeComponent implements OnInit {

  constructor(private UserService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

}
