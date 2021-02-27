import { ZaposlenObavestenjeComponent } from './zaposlen-obavestenje/zaposlen-obavestenje.component';
import { ZaposlenPredmetComponent } from './zaposlen-predmet/zaposlen-predmet.component';
import { AktivnostComponent } from './aktivnost/aktivnost.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { ProjektiZComponent } from './projekti-z/projekti-z.component';
import { AddObavestenjaComponent } from './add-obavestenja/add-obavestenja.component';
import { AddStudentPredmetComponent } from './add-student-predmet/add-student-predmet.component';
import { ZaposlenProfilComponent } from './zaposlen-profil/zaposlen-profil.component';
import { UpdateComponent } from './update/update.component';
import { PlanComponent } from './plan/plan.component';
import { AddPredmetComponent } from './add-predmet/add-predmet.component';
import { ZaposleniInfoComponent } from './zaposleni-info/zaposleni-info.component';
import { PredmetComponent } from './predmet/predmet.component';
import { StudentComponent } from './student/student.component';
import { AddZaposleniComponent } from './add-zaposleni/add-zaposleni.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { IstrazivanjaComponent } from './istrazivanja/istrazivanja.component';
import { RtiComponent } from './rti/rti.component';
import { SiComponent } from './si/si.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { LoginComponent } from './login/login.component';
import { MasterStudijeComponent } from './master-studije/master-studije.component';
import { NaukaComponent } from './nauka/nauka.component';
import { ObavestenjaComponent } from './obavestenja/obavestenja.component';
import { OsnovneStudijeComponent } from './osnovne-studije/osnovne-studije.component';
import { OstaliComponent } from './ostali/ostali.component';
import { ProjektiComponent } from './projekti/projekti.component';
import { RegisterComponent } from './register/register.component';
import { ZaposleniComponent } from './zaposleni/zaposleni.component';
import { ZaposlenComponent } from './zaposlen/zaposlen.component';

const routes: Routes = [
  { path: "", component: PocetnaComponent },
  { path: "zaposlen", component: ZaposlenComponent },
  { path: "zaposlen-profil", component: ZaposlenProfilComponent },
  { path: "zaposleni", component: ZaposleniComponent },
  { path: "zaposleni-info", component: ZaposleniInfoComponent },
  { path: "zaposlen_obavestenje", component: ZaposlenObavestenjeComponent },
  { path: "zaposlen_predmet", component: ZaposlenPredmetComponent },
  { path: "obavestenja", component: ObavestenjaComponent },
  { path: "projekti", component: ProjektiComponent },
  { path: "projekti_zaposleni", component: ProjektiZComponent },
  { path: "master_studije", component: MasterStudijeComponent },
  { path: "kontakt", component: KontaktComponent },
  { path: "predmet", component: PredmetComponent },
  { path: "admin", component: AdminComponent },
  { path: "student", component: StudentComponent },
  { path: "register", component: RegisterComponent },
  { path: "si", component: SiComponent },
  { path: "rti", component: RtiComponent },
  { path: "ostali_odseci", component: OstaliComponent },
  { path: "istrazivanja", component: IstrazivanjaComponent },
  { path: "aktivnost", component: AktivnostComponent },
  { path: "add_obavestenja", component: AddObavestenjaComponent },
  { path: "add_zaposleni", component: AddZaposleniComponent },
  { path: "add_student", component: AddStudentComponent },
  { path: "add_student_predmet", component: AddStudentPredmetComponent },
  { path: "add_predmet", component: AddPredmetComponent },
  { path: "plan", component: PlanComponent },
  { path: "update", component: UpdateComponent },
  { path: "**", component: PocetnaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
