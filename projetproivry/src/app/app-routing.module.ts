import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BoardJuryComponent } from './board-jury/board-jury.component';
import { BoardParticipantComponent } from './board-participant/board-participant.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostEditComponent } from './post-edit/post-edit.component';


const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'connexion', component: LoginComponent },
  { path: 'jury', component: BoardJuryComponent },
  { path: 'participant', component: BoardParticipantComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'mod', component: BoardParticipantComponent },
  { path: 'mod/post/create', component: PostCreateComponent },
  { path: 'post/:id', component: PostEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
