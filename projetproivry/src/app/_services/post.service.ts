import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  uri = 'http://localhost:8080/posts';
  update = new Date();
  constructor(private http: HttpClient) { }
  addPost(title, content) {
    const obj = {
      title,
      content,


    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));

  }
  getPosts() {
    return this
      .http
      .get(`${this.uri}`);
  }
  updatePost(Title: any, Content: any, id: any) {
    const obj = {
      Title,
      Content,

    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }
  editPost(id: any) {
    return this
      .http
      .get(`${this.uri}/edit/${id}`);
  }
  deletePost(id) {
    return this
      .http
      .get(`${this.uri}/delete/${id}`);
  }
}
