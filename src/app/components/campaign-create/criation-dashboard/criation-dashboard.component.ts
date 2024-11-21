import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-criation-dashboard',
  templateUrl: './criation-dashboard.component.html',
  styleUrls: ['./criation-dashboard.component.scss']
})
export class CriationDashboardComponent {
  currentSection = 'descricao';
  descriptionForm: FormGroup;

  editorTools = [
    { name: 'Bold', icon: 'bold', action: 'bold' },
    { name: 'Italic', icon: 'italic', action: 'italic' },
    { name: 'Link', icon: 'link', action: 'link' },
    { name: 'Bullet List', icon: 'list', action: 'bullet-list' },
    { name: 'Align Left', icon: 'align-left', action: 'align-left' },
    { name: 'Align Center', icon: 'align-center', action: 'align-center' },
    { name: 'Align Right', icon: 'align-right', action: 'align-right' },
    { name: 'Image', icon: 'image', action: 'image' },
    { name: 'Quote', icon: 'quote', action: 'quote' },
    { name: 'Horizontal Rule', icon: 'minus', action: 'horizontal-rule' },
  ];

  constructor(private fb: FormBuilder) {
    this.descriptionForm = this.fb.group({
      content: ['', Validators.required]
    });
  }

  setSection(section: string) {
    this.currentSection = section;
  }

  formatText(action: string) {
    console.log('Formatting text:', action);
    // Implement text formatting logic here
  }

  saveContent() {
    if (this.descriptionForm.valid) {
      console.log('Saving content:', this.descriptionForm.value);
      // Implement save logic here
    }
  }


}
