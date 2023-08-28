import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/services/auth/auth.service';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { DataService } from 'src/app/services/data/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, mergeMap } from 'rxjs';
import { PostData } from 'src/app/model/postdata';
import { PostCardComponent } from 'src/app/components/post/post.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, HeaderComponent, PostCardComponent],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  userName = this.auth.getUserName() as string;
  postData: Observable<PostData>;
  constructor(
    private auth: AuthService,
    private data: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    console.log(this.activatedRoute.queryParams);
    this.postData = this.activatedRoute.params.pipe(
      map((params) => params['id']),
      mergeMap((id) => this.data.getPost(id))
    );
  }
  logout() {
    this.auth.logout();
  }
  returnToMainPage() {
    this.router.navigateByUrl('');
  }
}
