import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicDataFormComponent } from './public-data-form.component';

describe('PublicDataFormComponent', () => {
  let component: PublicDataFormComponent;
  let fixture: ComponentFixture<PublicDataFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicDataFormComponent]
    });
    fixture = TestBed.createComponent(PublicDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
