import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { TokenStorageService } from './../_services/token-storage.service';
import { PostService } from '../_services/post.service';
import Post from '../models/post';
import { ActivatedRoute, Router } from '@angular/router';
import { BoardParticipantService } from './../_services/board-participant.service';


@Component({
  selector: 'app-board-participant',
  templateUrl: './board-participant.component.html',
  styleUrls: ['./board-participant.component.css']
})
export class BoardParticipantComponent implements OnInit {
  content = '';
  isLoggedIn = false;
  username: string;
  role: string;
  posts: Post[];

  constructor(private route: ActivatedRoute, private userService: UserService, private tokenStorageService: TokenStorageService, private bs: BoardParticipantService, private ps: PostService, private router: Router) { }

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
}
