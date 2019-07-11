import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './photo-post-form/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './photo-post-form/template-form/template-form.component';
import { LikePipe } from './photo-post/like.pipe';
import { PhotoPostComponent } from './photo-post/photo-post.component';
import { ZoomDirective } from './photo-post/zoom.directive';
import { PhotoPostsFeedComponent } from './photo-posts-feed/photo-posts-feed.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [
    PhotoPostsFeedComponent,
    PhotoPostComponent,
    ZoomDirective,
    LikePipe,
    TemplateFormComponent,
    ReactiveFormComponent
  ],
  exports: [PhotoPostsFeedComponent, TemplateFormComponent, ReactiveFormComponent]
})
export class PhotoPostsModule {}
