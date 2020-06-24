import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './../_services/token-storage.service';
import { PostService } from '../_services/post.service';
import Post from '../models/post';
import { WebsocketService } from '../_services/websocket.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-board-participant',
  templateUrl: './board-participant.component.html',
  styleUrls: ['./board-participant.component.css']
})
export class BoardParticipantComponent implements OnInit {
  content = '';
  isLoggedIn = false;
  username: string;
  auteur: string;
  role: string;
  posts: Post[];
  message: string;
  messages: Array<{ message: String, username: String }> = [];

  constructor(private tokenStorageService: TokenStorageService, private ps: PostService, private ws: WebsocketService, private sanitazer: DomSanitizer) {
    this.ws.listen('new-message').subscribe((response) => {
      console.log(response);
      this.messages.push({
        message: response['message'],
        username: response['username']
      });
    });
  }

  deletePost(id: any, index: number) {
    this.ps.deletePost(id).subscribe(res => {
      this.posts.splice(index, 1);
    });
  }



  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.username = user.username;
    }
    this.ps
      .getPosts()
      .subscribe((data: Post[]) => {
        this.posts = data;
      });
  }
  login() {
    document.getElementById("mat-side").style.background = '#000000BB';
  }
  sendMessage() {
    this.ws.sendMessage(this.message, this.username);
    console.log('message envoyé', this.message)
  }

  safeUrl(url) {
    return this.sanitazer.bypassSecurityTrustResourceUrl(url);
  }
  close() {
    document.getElementById('mat-side').style.width = "20%";
    document.getElementById('participant').style.display = "none";
    document.getElementById('ent').style.display = 'block';
    document.getElementById('real').style.display = 'block';
  }
}
