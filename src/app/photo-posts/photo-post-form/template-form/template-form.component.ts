import { Component, Output, EventEmitter } from '@angular/core';
import { PhotoPost } from 'src/app/types';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['../photo-post-form.scss']
})
export class TemplateFormComponent  {
  @Output() addPost = new EventEmitter<Partial<PhotoPost>>();

  onSubmit(value: Partial<PhotoPost>) {
    this.addPost.emit(value);
  }

}
