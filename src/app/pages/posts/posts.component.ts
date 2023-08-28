import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DataService } from 'src/app/services/data/data.service';
import { PostData } from 'src/app/model/postdata';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { PostCardComponent } from 'src/app/components/post/post.component';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    PostCardComponent,
    MatCardModule,
    MatPaginatorModule,
  ],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  userName = this.auth.getUserName() as string;
  currentPage = 0;
  posts: PostData[] = [];
  shownPosts: PostData[] = [];
  isContentLoaded = false;
  constructor(
    private auth: AuthService,
    private data: DataService,
    private router: Router
  ) {}
  ngOnInit() {
    this.data.getPosts().subscribe((posts) => {
      this.posts = posts;
      this.shownPosts = this.posts.slice(0, 10);
      this.isContentLoaded = true;
    });
  }
  handlePageEvent(e: PageEvent) {
    console.log(e);
    this.currentPage = e.pageIndex;
    let startElement = this.currentPage * 10;
    this.shownPosts = this.posts.slice(startElement, startElement + 10);
  }
  logout() {
    this.auth.logout();
  }
  openDetailedInfo(id: number) {
    this.router.navigateByUrl(`post/${id}`);
  }
}
