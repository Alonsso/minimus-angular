import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAddCardComponent } from './app-add-card.component';

describe('AppAddCardComponent', () => {
  let component: AppAddCardComponent;
  let fixture: ComponentFixture<AppAddCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppAddCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppAddCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
