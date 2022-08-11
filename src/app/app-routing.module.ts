import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { QuienesSomosComponent } from "./quienes-somos/quienes-somos.component";
import { ProgramasComponent } from "./programas/programas.component";
import { AprendeComponent } from "./aprende/aprende.component";
import { NoticiasComponent } from "./noticias/noticias.component";

const routes: Routes = [ 
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'quienes-somos', component: QuienesSomosComponent},
  {path: 'programas', component: ProgramasComponent},
  {path: 'aprende', component: AprendeComponent},
  {path: 'noticias', component: NoticiasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
