import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from "@angular/common/http";

import { HomeComponent } from './home/home.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ProgramasComponent } from './programas/programas.component';
import { AprendeComponent } from './aprende/aprende.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { RealidadComponent } from './aprende/realidad/realidad.component';
import { GuadalupeComponent } from './programas/guadalupe/guadalupe.component';
import { MujeresDelAlmaComponent } from './programas/mujeres-del-alma/mujeres-del-alma.component';
import { BuzonNaranjaComponent } from './programas/buzon-naranja/buzon-naranja.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuienesSomosComponent,
    ProgramasComponent,
    AprendeComponent,
    NoticiasComponent,
    RealidadComponent,
    GuadalupeComponent,
    MujeresDelAlmaComponent,
    BuzonNaranjaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
