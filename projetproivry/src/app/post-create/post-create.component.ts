import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../_services/post.service';



import * as io from 'socket.io-client';
import { WebsocketService } from '../_services/websocket.service';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  angForm: FormGroup;
  upload: File = null;
  url = "UNKNOW";
  constructor(private fb: FormBuilder, private ps: PostService, private router: Router, private ws: WebsocketService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      auteur: ['', Validators.required]
    });
  }

  addPost(title, content, auteur) {
    if (!this.url) {
      console.log("Patiente pendant l'upload wehs; ");
    } else {
      this.ps.addPost(title, content, auteur, this.url);
    }

    // this.router.navigate(['post']);
  }
  logout() {
    document.getElementById("mat-side").style.background = '#00000000';
  }

  handleFileInput(files: File) {
    let reader = new FileReader();
    if (files) {
      let file = files[0];
      this.url = "http://localhost/upload/" + file.name;
      let size = file.size;
      reader.addEventListener('load', (event) => {
        var rawData = file;
        let fileName = file.name;
        if (reader.readyState == 2) {
          this.ws.emit("upload-image-post", { data: rawData, name: fileName });
        }
      });
      reader.readAsArrayBuffer(file);
    }
  }

  ngOnInit(): void {
  }
}
