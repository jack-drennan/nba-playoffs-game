import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainingTeamsCardComponent } from './remaining-teams-card.component';

describe('RemainingTeamsCardComponent', () => {
  let component: RemainingTeamsCardComponent;
  let fixture: ComponentFixture<RemainingTeamsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemainingTeamsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemainingTeamsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
