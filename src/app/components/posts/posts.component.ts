import { Component, OnInit } from '@angular/core';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent implements OnInit {
  constructor(private postService: PostService) {}
  postList: any[] = [];
  post: any = null;

  ngOnInit(): void {
    this.postService.getPosts().subscribe((val) => {
      console.log(val);
    });
  }

  getPostById(id: number) {
    this.postService.getPostById(id).subscribe((val) => {
      console.log(val);
      this.post = val;
    });
  }
}
