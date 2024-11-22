import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-campaign-title',
  templateUrl: './campaign-title.component.html',
  styleUrls: ['./campaign-title.component.scss']
})
export class CampaignTitleComponent {
  @Input() campaign!: any;
}
