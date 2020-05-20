import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();
  @Output()
  private _loginToggle = new EventEmitter();
  public get loginToggle() {
    return this._loginToggle;
  }
  public set loginToggle(value) {
    this._loginToggle = value;
  }

  constructor() { }

  ngOnInit() {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
  public onToggleLogin = () => {
    this.loginToggle.emit();
  }

}
