import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CampaignAndCreator, CampaignService } from 'src/app/services/campaign.service';

@Component({
  selector: 'app-campaign-page',
  templateUrl: './campaign-page.component.html',
  styleUrls: ['./campaign-page.component.scss']
})
export class CampaignPageComponent {
  campaign: CampaignAndCreator | undefined;

  constructor(
    private route: ActivatedRoute,
    private campaignService: CampaignService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.campaignService.getCampaignDetails(id.toString()).subscribe((data) => {
      this.campaign = data;
    });
  }
}
