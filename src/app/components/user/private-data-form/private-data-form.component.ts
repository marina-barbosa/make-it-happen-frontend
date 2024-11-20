import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-private-data-form',
  templateUrl: './private-data-form.component.html',
  styleUrls: ['./private-data-form.component.scss']
})
export class PrivateDataFormComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      personType: ['fisica'],
      fullName: ['', Validators.required],
      cpf: ['', Validators.required],
      birthDate: ['', Validators.required],
      nationality: ['brasileiro'],
      country: ['brazil'],
      cep: [''],
      street: [''],
      number: [''],
      complement: [''],
      neighborhood: [''],
      city: [''],
      state: [''],
      phone: [''],
      cardNumber: [''],
      cardOperator: [''],
      currentPassword: [''],
      newPassword: ['']
    });
  }

  ngOnInit() {
    // Initialize form with user data if needed
  }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
      // Handle form submission
    }
  }

  deactivateAccount() {
    if (confirm('Tem certeza que deseja desativar sua conta?')) {
      // Handle account deactivation
      console.log('Account deactivation requested');
    }
  }
}
