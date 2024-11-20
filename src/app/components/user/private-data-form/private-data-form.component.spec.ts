import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateDataFormComponent } from './private-data-form.component';

describe('PrivateDataFormComponent', () => {
  let component: PrivateDataFormComponent;
  let fixture: ComponentFixture<PrivateDataFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivateDataFormComponent]
    });
    fixture = TestBed.createComponent(PrivateDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
