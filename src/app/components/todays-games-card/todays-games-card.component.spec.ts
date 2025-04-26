import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysGamesCardComponent } from './todays-games-card.component';

describe('TodaysGamesCardComponent', () => {
  let component: TodaysGamesCardComponent;
  let fixture: ComponentFixture<TodaysGamesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodaysGamesCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodaysGamesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
