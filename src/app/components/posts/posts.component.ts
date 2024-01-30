import { Component, OnInit } from '@angular/core';
import { PostService } from '../../post.service';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent implements OnInit {
  constructor(
    private postService: PostService,
    private userService: UserService
  ) {}
  post: any = null;
  user: any = [];

  ngOnInit() {
    this.postService.getPosts().subscribe((res) => {
      console.log('POSTS:', res);
    });

    this.userService
      .getAllUsers()
      .subscribe((res) => console.log('USERS:', res));

    this.userService
      .addUser({
        id: 6,
        userName: 'Igor',
        email: 'user6@email.com',
      })
      .subscribe((res) => console.log('POST METHOD:', res));

    this.userService
      .getAllUsers()
      .subscribe((res) => console.log('USERS:', res));

    this.userService.getUserById(6).subscribe((user) => {
      console.log(user);
    });

    this.userService
      .deleteUser(6)
      .subscribe((res) => console.log('DELETE METHOD:', res));

    this.userService
      .getAllUsers()
      .subscribe((res) => console.log('USERS:', res));
  }

  getPostById(id: number) {
    this.postService.getPostById(id).subscribe((post) => {
      console.log(post);
      this.post = post;
    });
  }

  getUserByName(userName: string) {
    this.userService
      .getUserByName(userName)
      .subscribe((user) => console.log('GET USER WITH HttpParams', user));
  }
}
