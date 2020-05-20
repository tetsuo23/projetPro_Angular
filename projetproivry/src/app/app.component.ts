import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projetproivry';
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