import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-public-data-form',
  templateUrl: './public-data-form.component.html',
  styleUrls: ['./public-data-form.component.scss']
})
export class PublicDataFormComponent {
  profileForm: FormGroup;
  profileImagePreview: string | null = null;
  coverImagePreview: string | null = null;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      publicName: ['', Validators.required],
      about: [''],
      facebook: [''],
      twitter: [''],
      links: this.fb.array([])
    });
  }

  get links() {
    return this.profileForm.get('links');
  }

  onProfileImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profileImagePreview = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onCoverImageSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.coverImagePreview = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  clearProfileImage() {
    this.profileImagePreview = null;
  }

  clearCoverImage() {
    this.coverImagePreview = null;
  }

  formatText(format: string) {
    // Implement text formatting logic here
    console.log('Format:', format);
  }

  addLink() {
    (this.links as FormArray).push(this.fb.control(''));
  }

  removeLink(index: number) {
    (this.links as FormArray).removeAt(index);
  }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
      // Handle form submission
    }
  }
}
