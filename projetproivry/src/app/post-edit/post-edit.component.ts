import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../_services/post.service';
import { WebsocketService } from '../_services/websocket.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  angForm: FormGroup;
  post: any = {};
  http: any;
  uri: any;
  url = "UNKNOW";
  upload: File = null;
  constructor(private route: ActivatedRoute, private router: Router, private ps: PostService, private fb: FormBuilder, private ws: WebsocketService) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      Title: ['', Validators.required],
      Content: ['', Validators.required],
      Auteur: ['', Validators.required]
    });
  }
  editPost(id: any) {
    return this
      .http
      .get(`${this.uri}/edit/${id}`);
  }
  updatePost(Title, Content, Auteur) {
    this.route.params.subscribe(params => {
      this.ps.updatePost(Title, Content, Auteur, this.url, params.id);
      this.router.navigate(['post']);
    });
  }
  handleFileInput(files: File) {
    let reader = new FileReader();
    if (files) {
      let file = files[0];
      this.url = "http://localhost/upload/" + file.name;
      let size = file.size;
      let fileType = file.type;
      if (!fileType.startsWith("image")) { return console.log("Le fichier n'est pas une image.") }
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
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.ps.editPost(params[`id`]).subscribe(res => {
        this.post = res;
        console.log(this.post)
      });
    });
  }
}
