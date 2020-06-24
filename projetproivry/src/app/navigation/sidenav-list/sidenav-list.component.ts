import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();

  }
  to2() {
    document.getElementById("section2").scrollIntoView({ behavior: "smooth", block: "start" });
    document.getElementById('ent').style.display = 'block';
    document.getElementById('real').style.display = 'block';
  }
  to3() {
    document.getElementById("section3").scrollIntoView({ behavior: "smooth", block: "start" });
    document.getElementById('ent').style.display = 'none';
    document.getElementById('real').style.display = 'none';
  }
  to4() {
    document.getElementById("section4").scrollIntoView({ behavior: "smooth", block: "start" });
    document.getElementById('ent').style.display = 'none';
    document.getElementById('real').style.display = 'none';
  }
  to5() {
    document.getElementById("section5").scrollIntoView({ behavior: "smooth", block: "start" });
    document.getElementById('ent').style.display = 'none';
    document.getElementById('real').style.display = 'none';
  }
}
