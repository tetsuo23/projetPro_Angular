import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardParticipantComponent } from './board-participant/board-participant.component';
import { BoardJuryComponent } from './board-jury/board-jury.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { IndexComponent } from './index/index.component';
import { WebsocketService } from './_services/websocket.service';
import { ActualiteComponent } from './actualite/actualite.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AccueilComponent,
    HeaderComponent,
    SidenavListComponent,
    LoginComponent,
    RegisterComponent,
    BoardAdminComponent,
    BoardParticipantComponent,
    BoardJuryComponent,
    PostCreateComponent,
    PostEditComponent,
    IndexComponent,
    ActualiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,

  ],
  providers: [authInterceptorProviders, WebsocketService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
