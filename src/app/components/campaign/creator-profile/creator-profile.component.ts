import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-creator-profile',
  templateUrl: './creator-profile.component.html',
  styleUrls: ['./creator-profile.component.scss']
})
export class CreatorProfileComponent {
  @Input() creator!: any;
}
