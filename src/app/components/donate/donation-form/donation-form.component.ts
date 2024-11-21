import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-donation-form',
  templateUrl: './donation-form.component.html',
  styleUrls: ['./donation-form.component.scss']
})
export class DonationFormComponent implements OnInit {
  donationForm: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {
    this.donationForm = this.fb.group({
      amount: [25.00, [Validators.required, Validators.min(1)]],
      fullName: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      paymentMethod: ['credit', Validators.required],
      cardNumber: [''],
      cardHolder: [''],
      cardExpiry: [''],
      cardCvv: [''],
      additionalDonation: [false],
      newsletter: [false]
    });
  }

  ngOnInit() {
    // Add conditional validators for credit card fields
    this.donationForm.get('paymentMethod')?.valueChanges.subscribe(method => {
      const cardFields = ['cardNumber', 'cardHolder', 'cardExpiry', 'cardCvv'];

      if (method === 'credit') {
        cardFields.forEach(field => {
          this.donationForm.get(field)?.setValidators(Validators.required);
        });
      } else {
        cardFields.forEach(field => {
          this.donationForm.get(field)?.clearValidators();
        });
      }

      cardFields.forEach(field => {
        this.donationForm.get(field)?.updateValueAndValidity();
      });
    });
  }

  calculateTotal(): number {
    let total = this.donationForm.get('amount')?.value || 0;
    total += 5; // Fixed bonus amount
    if (this.donationForm.get('additionalDonation')?.value) {
      total += 5;
    }
    return total;
  }

  onSubmit() {
    if (this.donationForm.valid) {
      this.isSubmitting = true;
      console.log(this.donationForm.value);
      // Implement form submission logic here
      setTimeout(() => {
        this.isSubmitting = false;
      }, 1500);
    }
  }
}
