import { Component, Input } from '@angular/core';

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

  get progress(): number {
    return (this.campaign.amountRaised / this.campaign.goal) * 100;
  }

  get remainingTime(): string {
    const deadline = new Date(this.campaign.deadline);
    const timeRemaining = deadline.getTime() - new Date().getTime();
    const daysRemaining = Math.ceil(timeRemaining / (1000 * 3600 * 24));
    return `${daysRemaining} dia(s) restante(s)`;
  }
}
