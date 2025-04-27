import { Component, OnInit } from '@angular/core';
import { ApiResponse, NBAGame } from '@balldontlie/sdk';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { NbaService } from '../../services/nba.service';
import { teams } from '../../utils/tableData';

@Component({
  selector: 'app-todays-games-card',
  imports: [CardModule, TableModule],
  templateUrl: './todays-games-card.component.html',
  styleUrl: './todays-games-card.component.css'
})
export class TodaysGamesCardComponent implements OnInit{

  constructor(private nbaService: NbaService) { }

  private todaysGameData: ApiResponse<NBAGame[]> = {data: []};
  todaysGames: any[] = [];
  loading = true;

  async ngOnInit(): Promise<void> {
    this.todaysGameData = await this.nbaService.getTodaysGameData([2024], true);
    this.parseGameData();
    this.sortTodaysGames();
  }

  parseGameData() {
    const todaysGames = this.todaysGameData.data;
    todaysGames.forEach(game => {
      const gameStatus = new Date(game.status);
      const gameData = {
        home_team_logo: teams[game.home_team.name.toLowerCase()].logo,
        away_team_logo: teams[game.visitor_team.name.toLowerCase()].logo,
        game_status: `${game.home_team.abbreviation}: ${game.home_team_score} | 
          ${game.visitor_team.abbreviation}: ${game.visitor_team_score}`,
        game_result: 'Tipoff'
      };
      if(!isNaN(gameStatus.getTime())) {
        gameData.game_status = `${gameStatus.toLocaleTimeString()}`;
      } else if(game.status === 'Final') {
        gameData.game_result = 'Final';
      } else {
        gameData.game_result = 'In Progress';
      }
      this.todaysGames.push(gameData);
    });
    this.loading = false;
  }

  sortTodaysGames() {
    this.todaysGames = this.todaysGames.sort((a,b) => a.game_status.localeCompare(b.game_status));
    this.todaysGames.forEach(game => {
      if(game.game_result === 'In Progress') {
        const index = this.todaysGames.indexOf(game);
        const removedElement = this.todaysGames.splice(index, 1)[0];
        this.todaysGames.unshift(removedElement);
      }
    })
    this.todaysGames.forEach(game => {
      if(game.game_result === 'Final') {
        const index = this.todaysGames.indexOf(game);
        const removedElement = this.todaysGames.splice(index, 1)[0];
        this.todaysGames.unshift(removedElement);
      }
    })
  }
}
