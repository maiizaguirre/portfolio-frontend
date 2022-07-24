import { LoginGuard } from './guards/login.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { ListaProductoComponent } from './producto/lista-producto.component';
//import { PersonaComponent } from './persona/persona.component';
//import { NuevoProductoComponent } from './producto/nuevo-producto.component';
import { EditarAboutComponent } from './about/editar-about.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { PortfolioGuardService } from './guards/portfolio-guard.service';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CompetencesComponent } from './competences/competences.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';

const routes: Routes = [
  { path: '', component: PortfolioComponent, canActivate: [PortfolioGuardService], data: { expectedRol: ['admin', 'user'] } },
  { path: 'home', component: HomeComponent },
  //{ path:'portfolio', component: PortfolioComponent, canActivate: [PortfolioGuardService], data: { expectedRol: ['admin', 'user'] } },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'registro', component: RegistroComponent, canActivate: [LoginGuard] },
  { path: 'about', component: AboutComponent },
  { path: 'competences', component: CompetencesComponent },
  { path: 'education', component: EducationComponent },
  //{ path: 'nuevo', component: NuevoProductoComponent, canActivate: [PersonaGuardService], data: { expectedRol: ['admin'] } },
  { path: 'editar-about/:id', component: EditarAboutComponent, canActivate: [PortfolioGuardService], data: { expectedRol: ['admin'] } } ,
  { path: 'editar-competences/:id', component: EditarAboutComponent, canActivate: [PortfolioGuardService], data: { expectedRol: ['admin'] } } ,
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
