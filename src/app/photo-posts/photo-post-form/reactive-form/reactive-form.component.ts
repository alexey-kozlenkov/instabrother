import { Component, Output, EventEmitter } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { PhotoPost } from 'src/app/types';

const requiredValidator = (
  control: AbstractControl
): ValidationErrors | null => {
  if (!control) {
    return null;
  }

  const value: string = control.value;
  return value && value.length > 0 ? null : { required: true };
};

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
      title: ['', { validators: requiredValidator, updateOn: 'blur' }],
      description: ['', [Validators.required, Validators.minLength(3)]],
      photoUrl: ['', Validators.required],
      author: ['']
    });
  }

  onSubmit(post: Partial<PhotoPost>) {
    this.addPost.emit(post);
  }
}
