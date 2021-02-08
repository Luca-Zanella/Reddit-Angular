import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentEmailComponent } from './sent-email.component';

describe('SentEmailComponent', () => {
  let component: SentEmailComponent;
  let fixture: ComponentFixture<SentEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SentEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
