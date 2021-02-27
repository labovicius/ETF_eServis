import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4000'

  login(username, password) {
    const data = {
      username: username,
      password: password
    }

    return this.http.post(`${this.uri}/login`, data);
  }
  register(username, password, name, surname, index, type_st) {
    const data = {
      username: username,
      password: password,
      name: name,
      surname: surname,
      index: index,
      type_st: type_st,
      changePass: 1,
      status: 0,
      type: "S"
    }
    return this.http.post(`${this.uri}/register`, data);
  }
  add_zaposleni(username, password, name, surname, address, phone, web, title, cabinet) {
    const data = {
      username: username,
      password: password,
      name: name,
      surname: surname,
      address: address,
      phone: phone,
      web: web,
      title: title,
      cabinet: cabinet,
      changePass: 1,
      status: 1,
      type: "Z"
    }
    return this.http.post(`${this.uri}/add_zaposleni`, data);
  }

  add_student(username, password, name, surname, index, type_st) {
    const data = {
      username: username,
      password: password,
      name: name,
      surname: surname,
      index: index,
      type_st: type_st,
      changePass: 1,
      status: 1,
      type: "S"
    }
    return this.http.post(`${this.uri}/add_student`, data);
  }

  add_predmet(naziv, smer, cilj, fond, poeni, sifra, semestar, type, textI, putanjaI,
    textL, putanjaL, textO, putanjaO, textP, putanjaP, textPr, putanjaPr, textV, putanjaV, datum) {
    const data = {
      naziv: naziv,
      smer: smer,
      cilj: cilj,
      poeni: poeni,
      sifra: sifra,
      fond: fond,
      semestar: semestar,
      type: type,
      textI: textI,
      putanjaI: putanjaI,
      textO: textO,
      putanjaO: putanjaO,
      textL: textL,
      putanjaL: putanjaL,
      textP: textP,
      putanjaP: putanjaP,
      textPr: textPr,
      putanjaPr: putanjaPr,
      textV: textV,
      putanjaV: putanjaV,
      datum: datum
    }
    return this.http.post(`${this.uri}/add_predmet`, data);
  }

  changePass(username, old_password, new_password) {
    const data = {
      username: username,
      old_password: old_password,
      new_password: new_password
    }
    return this.http.post(`${this.uri}/changePass`, data);
  }


  addGroupP(naziv, profesorP, br1, br2) {
    const data = {
      naziv: naziv,
      profesorP: profesorP,
      br1: br1,
      br2: br2
    }
    return this.http.post(`${this.uri}/addGroupP`, data);
  }

  addGroupV(naziv, profesorV, br1, br2) {
    const data = {
      naziv: naziv,
      profesorV: profesorV,
      br1: br1,
      br2: br2
    }
    return this.http.post(`${this.uri}/addGroupV`, data);
  }

  addStudentPredmet(naziv, student) {
    const data = {
      naziv: naziv,
      student: student
    }
    return this.http.post(`${this.uri}/addStudentPredmet`, data);
  }

  plus(data) {
    const d = {
      data: data
    }
    return this.http.post(`${this.uri}/plus`, d);
  }
  minus(data) {
    const d = {
      data: data
    }
    return this.http.post(`${this.uri}/minus`, d);
  }

  prijavi(sifra, username) {
    const data = {
      sifra: sifra,
      username: username
    }

    return this.http.post(`${this.uri}/prijavi`, data);

  }

  odjavi(sifra, username) {
    const data = {
      sifra: sifra,
      username: username
    }

    return this.http.post(`${this.uri}/odjavi`, data);

  }


  odbijanje(sifra, username) {
    const data = {
      sifra: sifra,
      username: username
    }

    return this.http.post(`${this.uri}/odbijanje`, data);

  }

  odobravanje(sifra, username) {
    const data = {
      sifra: sifra,
      username: username
    }

    return this.http.post(`${this.uri}/odobravanje`, data);

  }

  setNew(novi_tip) {
    const data = {
      novi_tip: novi_tip
    }

    return this.http.post(`${this.uri}/setNewType`, data);
  }

  createNewNotification(tip, obavestenje, datum) {
    const data = {
      tip: tip,
      obavestenje: obavestenje,
      datum: datum
    }

    return this.http.post(`${this.uri}/createNewNotification`, data);
  }

  editS(username, password, name, surname, index, type_st) {
    const data = {
      username: username,
      password: password,
      name: name,
      surname: surname,
      index: index,
      type_st: type_st,
      changePass: 0,
      status: 1,
      type: "S"
    }
    return this.http.post(`${this.uri}/editS`, data);
  }

  deleteS(index) {
    const data = {
      index: index
    }
    return this.http.post(`${this.uri}/deleteS`, data);
  }

  editZ(username, password, name, surname, address, phone, web, title, cabinet) {
    const data = {
      username: username,
      password: password,
      name: name,
      surname: surname,
      address: address,
      phone: phone,
      web: web,
      title: title,
      cabinet: cabinet,
      changePass: 0,
      status: 1,
      type: "Z"
    }
    return this.http.post(`${this.uri}/editZ`, data);
  }


  deleteZ(username) {
    const data = {
      username: username
    }
    return this.http.post(`${this.uri}/deleteZ`, data);
  }

  editP(naziv, smer, cilj, fond, poeni, sifra, semestar, type, textI, putanjaI,
    textL, putanjaL, textO, putanjaO, textP, putanjaP, textPr, putanjaPr, textV, putanjaV, datum) {
    const data = {
      naziv: naziv,
      smer: smer,
      cilj: cilj,
      poeni: poeni,
      sifra: sifra,
      fond: fond,
      semestar: semestar,
      type: type,
      textI: textI,
      putanjaI: putanjaI,
      textO: textO,
      putanjaO: putanjaO,
      textL: textL,
      putanjaL: putanjaL,
      textP: textP,
      putanjaP: putanjaP,
      textPr: textPr,
      putanjaPr: putanjaPr,
      textV: textV,
      putanjaV: putanjaV,
      datum: datum
    }
    return this.http.post(`${this.uri}/editP`, data);
  }

  savePredmet(predmet, sifra) {
    const data = {
      predmet: predmet,
      sifra: sifra
    }

    return this.http.post(`${this.uri}/savePredmet`, data);
  }
  novoObavestenje(tekst, predmet, datum, file, nastavnik) {

    const data = {
      tekst: tekst,
      predmet: predmet,
      datum: datum,
      file: file,
      nastavnik: nastavnik
    }

    return this.http.post(`${this.uri}/novoObavestenje`, data);

  }
  change(predmet, sifra) {

    const data = {
      predmet: predmet,
      sifra: sifra
    }

    return this.http.post(`${this.uri}/change`, data);

  }

  addPredavanja(sifra, putanja) {
    const data = {
      sifra: sifra,
      putanja: putanja
    }

    return this.http.post(`${this.uri}/addPredavanja`, data);

  }

  deletePredavanja(sifra, text, putanja) {
    const data = {
      sifra: sifra,
      text: text,
      putanja: putanja
    }

    return this.http.post(`${this.uri}/deletePredavanja`, data);

  }

  addVezbe(sifra, putanja) {
    const data = {
      sifra: sifra,
      putanja: putanja
    }

    return this.http.post(`${this.uri}/addVezbe`, data);

  }

  deleteVezbe(sifra, text, putanja) {
    const data = {
      sifra: sifra,
      text: text,
      putanja: putanja
    }

    return this.http.post(`${this.uri}/deleteVezbe`, data);

  }


  addIspit(sifra, putanja) {
    const data = {
      sifra: sifra,
      putanja: putanja
    }

    return this.http.post(`${this.uri}/addIspit`, data);

  }

  deleteIspit(sifra, text, putanja) {
    const data = {
      sifra: sifra,
      text: text,
      putanja: putanja
    }

    return this.http.post(`${this.uri}/deleteIspit`, data);

  }

  addProjekat(sifra, putanja) {
    const data = {
      sifra: sifra,
      putanja: putanja
    }

    return this.http.post(`${this.uri}/addProjekat`, data);

  }

  deleteProjekat(sifra, text, putanja) {
    const data = {
      sifra: sifra,
      text: text,
      putanja: putanja
    }

    return this.http.post(`${this.uri}/deleteProjekat`, data);

  }

  addLab(sifra, putanja) {
    const data = {
      sifra: sifra,
      putanja: putanja
    }

    return this.http.post(`${this.uri}/addLab`, data);

  }

  deleteLab(sifra, text, putanja) {
    const data = {
      sifra: sifra,
      text: text,
      putanja: putanja
    }

    return this.http.post(`${this.uri}/deleteLab`, data);
  }

  addO(sifra, predmet) {

    const data = {
      sifra: sifra,
      predmet: predmet
    }

    return this.http.post(`${this.uri}/addO`, data);
  }


  deleteO(sifra, datum, putanja, text, nastavnik) {

    const data = {
      sifra: sifra,
      datum: datum,
      putanja: putanja,
      text: text,
      nastavnik: nastavnik
    }

    return this.http.post(`${this.uri}/deleteO`, data);
  }

  deleteP(naziv, sifra) {
    const data = {
      naziv: naziv,
      sifra: sifra
    }
    return this.http.post(`${this.uri}/deleteP`, data);
  }

  getUsers() {
    return this.http.get(`${this.uri}/getUsers`);
  }

  getNotifications() {
    return this.http.get(`${this.uri}/getNotifications`);
  }

  getPredmeti() {
    return this.http.get(`${this.uri}/getPredmeti`);
  }

  getPredmetiRTI() {
    return this.http.get(`${this.uri}/getPredmetiRTI`);
  }

  getPredmetiSI() {
    return this.http.get(`${this.uri}/getPredmetiSI`);
  }

  getStaff() {
    return this.http.get(`${this.uri}/getStaff`);
  }

  getAdmin() {
    return this.http.get(`${this.uri}/getAdmin`);
  }

  getStudents() {
    return this.http.get(`${this.uri}/getStudents`);
  }

  getTypeNot() {
    return this.http.get(`${this.uri}/getTypeNot`);
  }

}

