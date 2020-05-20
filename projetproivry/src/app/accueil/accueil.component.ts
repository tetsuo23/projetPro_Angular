import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { AngularMaterialModule } from './../angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],

})
export class AccueilComponent implements OnInit {
  @ViewChild('section1') section1: ElementRef;

  // onScroll(): void {
  //   this.section1.nativeElement.scrollTo({ left: (this.section1.nativeElement.scrollLeft + 150), behavior: 'smooth' });
  // }

  constructor() { }

  ngOnInit(): void {
  }
  to3() {
    document.getElementById("section3").scrollIntoView({ behavior: "smooth", block: "start" });
  }
  to2() {
    document.getElementById("section2").scrollIntoView({ behavior: "smooth", block: "start" });
  }
  to4() {
    document.getElementById("section4").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
