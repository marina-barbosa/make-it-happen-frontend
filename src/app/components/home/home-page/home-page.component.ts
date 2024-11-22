import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CampaignService } from 'src/app/services/campaign.service';
import { ToastService } from 'src/app/toast/toast.service';

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

  constructor(private campaignService: CampaignService, private router: Router, private toastService: ToastService) { }

  ngOnInit(): void {
    this.campaignService.getCampaigns().subscribe((data) => {
      this.campaigns = data;
    });
  }
  goToCampaignDetails(campaign: any) {
    this.router.navigate(['/campaign', campaign.campaignId], {
      state: { campaignDetails: campaign },
    });
  }
  fireToast() {
    this.toastService.showToast('Em desenvolvimento..', 'warn');
  }
}
