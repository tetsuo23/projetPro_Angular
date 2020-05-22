import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TokenStorageService } from './_services/token-storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // start auth----------------------------------------

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

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  // end auth --------------------------------------------------



  @HostListener('window:scroll', ['$event'])
  // --------------------------------------------background-color de la nav---------------------------
  onWindowScroll(e) {
    let element = document.querySelector('.nav');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('nav_scroll');
    } else {
      element.classList.remove('nav_scroll');
    };
    let element2 = document.querySelector('.nav2');
    if (window.pageYOffset > element2.clientHeight) {
      element2.classList.add('nav_scroll2');
    } else {
      element2.classList.remove('nav_scroll2');
    }
  }






}
export class RegisterComponent implements OnInit {
  angForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      MemberName: ['', Validators.required],
      MemberBio: ['', Validators.required],
      MemberAge: ['', Validators.required],
      MemberMail: ['', Validators.required,
        Validators.pattern('^[a-z0-9.-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]
    });

  }

  ngOnInit(): void {
  }
}

export class ContactAddComponent implements OnInit {
  angForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      Name: ['', Validators.required],
      Mail: ['', Validators.required],
      Contact: ['', Validators.required,
        Validators.pattern('^[a-z0-9.-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]
    });

  }

  ngOnInit(): void {
  }
}

export class LoginComponent implements OnInit {
  angForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      Pseudo: ['', Validators.required],
      Password: ['', Validators.required,

        Validators.pattern('^[a-z0-9.-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]
    });

  }

  ngOnInit(): void {
  }
}

