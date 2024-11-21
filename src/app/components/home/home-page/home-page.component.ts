import { Component } from '@angular/core';
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
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  campaigns: Campaign[] = [];

  constructor(private campaignService: CampaignService) { }

  ngOnInit(): void {
    this.campaignService.getCampaigns().subscribe((data) => {
      this.campaigns = data;
    });
  }
}
