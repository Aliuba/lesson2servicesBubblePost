import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../../models/Post';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  chosenPost: Post;

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
this.userService.getAllPosts().subscribe(value => this.posts=value);
  }

  getBubblePost(post: Post): void {
    console.log(post);
    this.chosenPost = post;
  }
}
