import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { QuienesSomosComponent } from "./quienes-somos/quienes-somos.component";
import { ProgramasComponent } from "./programas/programas.component";
import { AprendeComponent } from "./aprende/aprende.component";
import { NoticiasComponent } from "./noticias/noticias.component";
import { RealidadComponent } from "./aprende/realidad/realidad.component";
import { GuadalupeComponent } from "./programas/guadalupe/guadalupe.component";
import { MujeresDelAlmaComponent } from "./programas/mujeres-del-alma/mujeres-del-alma.component";
import { BuzonNaranjaComponent } from "./programas/buzon-naranja/buzon-naranja.component";

const routes: Routes = [ 
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'quienes-somos', component: QuienesSomosComponent},
  {path: 'programas', component: ProgramasComponent},
  {path: 'programas/guadalupe', component: GuadalupeComponent},
  {path: 'programas/mujeres-del-alma', component: MujeresDelAlmaComponent},
  {path: 'programas/buzon-naranja', component: BuzonNaranjaComponent},
  {path: 'aprende', component: AprendeComponent},
  {path: 'aprende/realidad', component: RealidadComponent},
  {path: 'noticias', component: NoticiasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
