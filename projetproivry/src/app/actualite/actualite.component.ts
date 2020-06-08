import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.css']
})
export class ActualiteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  to2() {
    document.getElementById("section2").scrollIntoView({ behavior: "smooth", block: "start" });
    document.getElementById('ent').style.display = 'block';
    document.getElementById('real').style.display = 'block';
  }
}
