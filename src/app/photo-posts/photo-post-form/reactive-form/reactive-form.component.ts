import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  ValidationErrors,
  AbstractControl
} from '@angular/forms';

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
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', { validators: requiredValidator, updateOn: 'blur' }],
      description: ['', [Validators.required, Validators.minLength(3)]],
      photoUrl: ['', Validators.required],
      author: ['']
    });
  }
}

