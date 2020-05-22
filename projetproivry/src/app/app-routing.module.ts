import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BoardJuryComponent } from './board-jury/board-jury.component';
import { BoardParticipantComponent } from './board-participant/board-participant.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';


const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'connexion', component: LoginComponent },
  { path: 'jury', component: BoardJuryComponent },
  { path: 'participant', component: BoardParticipantComponent },
  { path: 'admin', component: BoardAdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
