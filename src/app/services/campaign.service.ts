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

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  private apiUrl = 'http://localhost:5135/api/Campaign/list';

  constructor(private http: HttpClient) { }

  getCampaigns(): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(this.apiUrl);
  }
  getCampaignDetails(campaignId: string): Observable<any> {
    // Supondo que você tenha uma API que retorna os detalhes da campanha pelo ID
    return this.http.get<any>(`http://localhost:5135/api/Campaign/${campaignId}`);
  }
}
