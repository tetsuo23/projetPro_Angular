import { Component, OnInit, ViewChild, Renderer2, ElementRef, AfterViewInit } from '@angular/core';
import { MatVideoComponent } from 'mat-video/lib/video.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  @ViewChild('video') video: ElementRef;
  @ViewChild('video2') video2: ElementRef;

  constructor(private renderer: Renderer2, private router: Router) { }
  videoEnd() {
    this.video.nativeElement.style.display = "none";
    setTimeout(() => {

      this.video2.nativeElement.style.display = "block";
    }, 10000);
  }
  ngOnInit() {

  }


}  
