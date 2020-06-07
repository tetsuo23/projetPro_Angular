import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { TokenStorageService } from './../_services/token-storage.service';
import { PostService } from '../_services/post.service';
import Post from '../models/post';
import { ActivatedRoute, Router } from '@angular/router';
import { BoardParticipantService } from './../_services/board-participant.service';
import { WebsocketService } from '../_services/websocket.service';
import { ChatService } from '../_services/chat.service';
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

  constructor(private route: ActivatedRoute, private userService: UserService, private tokenStorageService: TokenStorageService, private bs: BoardParticipantService, private ps: PostService, private router: Router, private ws: WebsocketService, cs: ChatService, private sanitazer: DomSanitizer) {
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
    this.bs
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

}
