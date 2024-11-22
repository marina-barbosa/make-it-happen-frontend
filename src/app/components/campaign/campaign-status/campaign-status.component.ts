import { Component, Input } from '@angular/core';
import { CampaignService } from 'src/app/services/campaign.service';

@Component({
  selector: 'app-campaign-status',
  templateUrl: './campaign-status.component.html',
  styleUrls: ['./campaign-status.component.scss']
})
export class CampaignStatusComponent {
  @Input() campaign!: any;

  constructor(private campaignService: CampaignService) { }

  get progress(): number {
    return this.campaignService.getProgress(this.campaign);
  }

  get remainingTime(): string {
    return this.campaignService.getRemainingTime(this.campaign);
  }
}
