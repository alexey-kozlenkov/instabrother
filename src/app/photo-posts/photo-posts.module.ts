import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PhotoPostsFeedComponent } from './photo-posts-feed/photo-posts-feed.component';
import { PhotoPostComponent } from './photo-post/photo-post.component';
import { ZoomDirective } from './photo-post/zoom.directive';
import { LikePipe } from './photo-post/like.pipe';
import { TemplateFormComponent } from './photo-post-form/template-form/template-form.component';
import { ReactiveFormComponent } from './photo-post-form/reactive-form/reactive-form.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PhotoPostsService } from './photo-posts.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PhotoPostsFeedComponent,
    PhotoPostComponent,
    ZoomDirective,
    LikePipe,
    TemplateFormComponent,
    ReactiveFormComponent
  ],
  exports: [
    PhotoPostsFeedComponent,
    PhotoPostComponent,
    TemplateFormComponent,
    ReactiveFormComponent
  ]
})
export class PhotoPostsModule {}
