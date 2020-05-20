import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() loginClose = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  public onLoginClose = () => {
    this.loginClose.emit();

  }
}
