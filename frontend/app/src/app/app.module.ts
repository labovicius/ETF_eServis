import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { NaukaComponent } from './nauka/nauka.component';
import { MasterStudijeComponent } from './master-studije/master-studije.component';
import { OsnovneStudijeComponent } from './osnovne-studije/osnovne-studije.component';
import { ObavestenjaComponent } from './obavestenja/obavestenja.component';
import { OstaliComponent } from './ostali/ostali.component';
import { StudentComponent } from './student/student.component';
import { ProjektiComponent } from './projekti/projekti.component';
import { RtiComponent } from './rti/rti.component';
import { SiComponent } from './si/si.component';
import { ZaposleniComponent } from './zaposleni/zaposleni.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  IgxDropDownModule, IgxButtonModule, IgxIconModule,
  IgxLayoutModule, IgxNavigationDrawerModule, IgxRippleModule,
  IgxToggleModule, IgxCarouselModule, IgxSliderModule
} from "igniteui-angular";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IstrazivanjaComponent } from './istrazivanja/istrazivanja.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddZaposleniComponent } from './add-zaposleni/add-zaposleni.component';
import { PredmetComponent } from './predmet/predmet.component';
import { ZaposlenComponent } from './zaposlen/zaposlen.component';
import { ZaposleniInfoComponent } from './zaposleni-info/zaposleni-info.component';
import { AddPredmetComponent } from './add-predmet/add-predmet.component';
import { PlanComponent } from './plan/plan.component';
import { UpdateComponent } from './update/update.component';
import { ZaposlenProfilComponent } from './zaposlen-profil/zaposlen-profil.component';
import { AddStudentPredmetComponent } from './add-student-predmet/add-student-predmet.component';
import { AddObavestenjaComponent } from './add-obavestenja/add-obavestenja.component';
import { ProjektiZComponent } from './projekti-z/projekti-z.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { AktivnostComponent } from './aktivnost/aktivnost.component';
import { ZaposlenPredmetComponent } from './zaposlen-predmet/zaposlen-predmet.component';
import { ZaposlenObavestenjeComponent } from './zaposlen-obavestenje/zaposlen-obavestenje.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    AdminComponent,
    KontaktComponent,
    NaukaComponent,
    MasterStudijeComponent,
    OsnovneStudijeComponent,
    ObavestenjaComponent,
    OstaliComponent,
    StudentComponent,
    ProjektiComponent,
    RtiComponent,
    SiComponent,
    ZaposleniComponent,
    RegisterComponent,
    IstrazivanjaComponent,
    AddStudentComponent,
    AddZaposleniComponent,
    PredmetComponent,
    ZaposlenComponent,
    ZaposleniInfoComponent,
    AddPredmetComponent,
    PlanComponent,
    UpdateComponent,
    ZaposlenProfilComponent,
    AddStudentPredmetComponent,
    AddObavestenjaComponent,
    ProjektiZComponent,
    PocetnaComponent,
    AktivnostComponent,
    ZaposlenPredmetComponent,
    ZaposlenObavestenjeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    IgxDropDownModule,
    IgxButtonModule,
    IgxIconModule,
    IgxLayoutModule,
    IgxNavigationDrawerModule,
    IgxRippleModule,
    IgxToggleModule,
    IgxCarouselModule,
    IgxSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
