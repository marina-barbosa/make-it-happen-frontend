import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriationDashboardComponent } from './criation-dashboard.component';

describe('CriationDashboardComponent', () => {
  let component: CriationDashboardComponent;
  let fixture: ComponentFixture<CriationDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriationDashboardComponent]
    });
    fixture = TestBed.createComponent(CriationDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
