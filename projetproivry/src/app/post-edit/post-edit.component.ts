import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../_services/post.service';

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

  constructor(private route: ActivatedRoute, private router: Router, private ps: PostService, private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      Title: ['', Validators.required],
      Content: ['', Validators.required],

    });
  }
  editPost(id: any) {
    return this
      .http
      .get(`${this.uri}/edit/${id}`);
  }
  updatePost(Title, Content, ) {
    this.route.params.subscribe(params => {
      this.ps.updatePost(Title, Content, params.id);
      this.router.navigate(['post']);
    });
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
