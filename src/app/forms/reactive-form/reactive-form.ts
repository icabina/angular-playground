import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {
  userForm!: FormGroup;
  formSub!: Subscription;
  emailSub!: Subscription;

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      subscribed: new FormControl(false),
    });

    // Subscribe to the whole form
    this.formSub = this.userForm.valueChanges.subscribe((value) => {
      console.log('Form changed', value);
    });

    // Subscribe to a single control
    this.emailSub = this.userForm
      .get('email')!
      ?.valueChanges.subscribe((email) => {
        console.log('Email changed', email);
      });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      console.log('Form submitted:', this.userForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  ngOnDestroy(): void {
    this.formSub?.unsubscribe();
    this.emailSub?.unsubscribe();
  }
}

// --------------------------------------------------------------------------------------
// Property / Method	          Description	                                  Returns
// valueChanges	                Emits whenever the value changes	            Observable<any>
// statusChanges	              Emits when the validation status changes	    Observable<string>
// .get('controlName')	        Access a control inside the form	            FormControl
// --------------------------------------------------------------------------------------
// These are RxJS streams, so you can use:
// debounceTime, distinctUntilChanged, filter
// switchMap for async operations (like fetching suggestions)
// takeUntil for cleanup
// --------------------------------------------------------------------------------------
