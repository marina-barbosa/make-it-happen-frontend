import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent {
  signupForm: FormGroup;
  isLoading = false;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.isLoading = true;
      // Implement your signup logic here
      console.log(this.signupForm.value);
      // Reset loading after API call
      setTimeout(() => this.isLoading = false, 1500);
    }
  }

  loginWithGoogle() {
    // Implement Google login logic here
    console.log('Google login clicked');
  }
}
