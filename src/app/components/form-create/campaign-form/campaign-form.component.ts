import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-campaign-form',
  templateUrl: './campaign-form.component.html',
  styleUrls: ['./campaign-form.component.scss']
})
export class CampaignFormComponent {

  campaignForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.campaignForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      image: [''],
      description: ['', Validators.required],
      budget: ['', [Validators.required, Validators.min(0)]],
      campaignType: ['tudo-ou-nada', Validators.required],
      endDate: ['', Validators.required],
      links: this.fb.array([])
    });
  }

  get links() {
    return this.campaignForm.get('links') as FormArray;
  }

  addLink() {
    this.links.push(this.fb.control(''));
  }

  removeLink(index: number) {
    this.links.removeAt(index);
  }

  onSubmit() {
    if (this.campaignForm.valid) {
      console.log(this.campaignForm.value);
      // Handle form submission
    }
  }
}
