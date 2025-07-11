import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css',
})
export class TemplateForm {
  // name = '';
  // email = '';
  // subscribed = false;

  user = {
    name: '',
    email: '',
    subscribed: false,
  };

  onSubmit(): void {
    console.log('Form submitted:', this.user);

    // console.log('Name:', this.name);
    // console.log('Email:', this.email);
    // console.log('Subscribed:', this.subscribed);
  }
}
