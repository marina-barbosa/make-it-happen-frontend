import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

export interface Creator {
  id: string;
  email: string;
  userName: string;
  fullName: string;
  avatarUrl: string;
  bio: string;
  contact: string;
  creationDate: string;
  emailConfirmed: boolean;
  totalCampaigns: number;
  totalSupport: number;
}

export interface CampaignAndCreator extends Campaign  {
  creator: Creator;
}

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  private apiUrl = 'http://localhost:5135/api/Campaign';

  constructor(private http: HttpClient) { }

  getCampaigns(): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(this.apiUrl + '/list');
  }
  getCampaignDetails(campaignId: string): Observable<CampaignAndCreator> {
    return this.http.get<CampaignAndCreator>(`${this.apiUrl}/details/${campaignId}`);
  }
  getProgress(campaign: Campaign): number {
    return (campaign.amountRaised / campaign.goal) * 100;
  }
  getRemainingTime(campaign: Campaign): string {
    const deadline = new Date(campaign.deadline);
    const timeRemaining = deadline.getTime() - new Date().getTime();
    const daysRemaining = Math.ceil(timeRemaining / (1000 * 3600 * 24));
    return `${daysRemaining} dia(s) restante(s)`;
  }
}
