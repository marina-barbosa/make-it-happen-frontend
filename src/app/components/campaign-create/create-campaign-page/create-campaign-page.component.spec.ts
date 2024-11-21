import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCampaignPageComponent } from './create-campaign-page.component';

describe('CreateCampaignPageComponent', () => {
  let component: CreateCampaignPageComponent;
  let fixture: ComponentFixture<CreateCampaignPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateCampaignPageComponent]
    });
    fixture = TestBed.createComponent(CreateCampaignPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
