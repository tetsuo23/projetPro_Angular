import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  @ViewChild('section1') section1: ElementRef;

  onScroll(): void {
    this.section1.nativeElement.scrollTo({ left: (this.section1.nativeElement.scrollLeft + 150), behavior: 'smooth' });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
