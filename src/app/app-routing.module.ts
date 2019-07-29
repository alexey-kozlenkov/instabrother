import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoPostsFeedComponent } from './photo-posts/photo-posts-feed/photo-posts-feed.component';
import { PhotoPostComponent } from './photo-posts/photo-post/photo-post.component';
import { TemplateFormComponent } from './photo-posts/photo-post-form/template-form/template-form.component';

const routes: Routes = [
  {
    path: 'list',
    component: PhotoPostsFeedComponent
  },
  {
    path: 'create',
    component: TemplateFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
