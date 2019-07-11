import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhotoPost } from 'src/app/types';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['../photo-post-form.scss']
})
export class ReactiveFormComponent {
  @Output() addPost = new EventEmitter<Partial<PhotoPost>>();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: [null, Validators.required],
      description: [null, [Validators.required, Validators.minLength(10)]],
      photoUrl: [null, Validators.required],
      author: [null]
    });
  }

  onSubmit(post: Partial<PhotoPost>) {
    this.addPost.emit(post);
  }
}
