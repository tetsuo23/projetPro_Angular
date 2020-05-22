import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { AngularMaterialModule } from './../angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],

})
export class AccueilComponent implements OnInit {
  @ViewChild('section1') section1: ElementRef;
  content: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
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
