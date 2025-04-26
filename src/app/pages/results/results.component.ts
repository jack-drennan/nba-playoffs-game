import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ResultsTableComponent } from '../../components/results-table/results-table.component';
import { TodaysGamesCardComponent } from '../../components/todays-games-card/todays-games-card.component';

@Component({
  selector: 'app-results',
  imports: [ResultsTableComponent, TodaysGamesCardComponent, CardModule],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {

}
