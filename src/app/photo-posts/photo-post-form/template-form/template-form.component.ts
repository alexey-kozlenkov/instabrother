import { Component, EventEmitter, Output } from '@angular/core';
import { PhotoPost } from 'src/app/types';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['../photo-post-form.scss']
})
export class TemplateFormComponent {
  @Output() addPost = new EventEmitter<Partial<PhotoPost>>();

  onSubmit(post: Partial<PhotoPost>) {
    this.addPost.emit(post);
  }
}
