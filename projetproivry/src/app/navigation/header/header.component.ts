import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AngularMaterialModule } from './../../angular-material.module';
import { TokenStorageService } from './../../_services/token-storage.service';

import { HostListener } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();


  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showParticipantBoard = false;
  username: string;
  email: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showParticipantBoard = this.roles.includes('ROLE_PARTICIPANT');

      this.username = user.username;
      this.email = user.email;
      this.username = user.username;
    }
  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();

  }
  login() {
    document.getElementById("mat-side").style.background = '#000000BB';
  }

}
