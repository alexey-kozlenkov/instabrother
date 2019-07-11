import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoPostsFeedComponent } from './photo-posts-feed/photo-posts-feed.component';
import { PhotoPostComponent } from './photo-post/photo-post.component';
import { ZoomDirective } from './photo-post/zoom.directive';
import { LikePipe } from './photo-post/like.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    PhotoPostsFeedComponent,
    PhotoPostComponent,
    ZoomDirective,
    LikePipe
  ],
  exports: [PhotoPostsFeedComponent]
})
export class PhotoPostsModule {}
