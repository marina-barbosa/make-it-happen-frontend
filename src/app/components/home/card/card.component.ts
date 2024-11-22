import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CampaignService } from 'src/app/services/campaign.service';

interface Campaign {
  campaignId: number;
  userId: string;
  name: string;
  description: string;
  goal: number;
  amountRaised: number;
  categoryId: number;
  mode: string;
  deadline: string;
  imageUrl: string;
  status: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() campaign!: Campaign;
  @Input() campaignId!: number;

  constructor(private campaignService: CampaignService, private router: Router) { }

  get progress(): number {
    return this.campaignService.getProgress(this.campaign);
  }

  get remainingTime(): string {
    return this.campaignService.getRemainingTime(this.campaign);
  }

  navigateToCampaign(id: number) {
    this.router.navigate(['/campaign', id]);
  }
}
