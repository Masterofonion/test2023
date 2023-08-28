import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { PostData } from 'src/app/model/postdata';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostCardComponent {
  @Input() shownInfo: PostData;
  @Output() openPost = new EventEmitter<number>();
  openDetailedInfo() {
    this.openPost.emit(this.shownInfo.id);
  }
}
