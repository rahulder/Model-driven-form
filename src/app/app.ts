import { Component, Inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('Model-driven-form');

  mdForm!: FormGroup;
  // fb: FormBuilder = Inject(FormBuilder);

  constructor(private fb: FormBuilder) {
    this.mdForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength]],
      lastname: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  get firstname() {
    return this.mdForm.get('firstname');
  }

  get lastname() {
    return this.mdForm.get('lastname');
  }
}
