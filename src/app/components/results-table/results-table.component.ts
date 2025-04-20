import { Component, OnInit } from '@angular/core';
import { NbaService } from '../../services/nba.service';
import { ApiResponse, NBAGame } from '@balldontlie/sdk';

@Component({
  selector: 'app-results-table',
  imports: [],
  templateUrl: './results-table.component.html',
  styleUrl: './results-table.component.css'
})


export class ResultsTableComponent implements OnInit{

  constructor(private nbaService: NbaService) { }

  private games: ApiResponse<NBAGame[]> = {data: []};
  private teamWins: team = {
    cavaliers: 0,
    celtics: 0,
    knicks: 0,
    pacers: 0,
    bucks: 0,
    pistons: 0,
    magic: 0,
    heat: 0,
    thunder: 0,
    rockers: 0,
    lakers: 0,
    nuggets: 0,
    clippers: 0,
    timberwolves: 0,
    warriors: 0,
    grizzlies: 0
  }

  async ngOnInit(): Promise<void> {
    this.games = await this.nbaService.getGameData([2024], true, '2024-04-19');
    this.parseGameData();
  }

  parseGameData() {
    const finishedGames = this.games.data.filter((resp) => resp.status === 'Final');
    finishedGames.forEach(game => {
      const homeTeam = game.home_team.name.toLowerCase();
      const awayTeam = game.visitor_team.name.toLowerCase();
      if(game.home_team_score > game.visitor_team_score){
        this.teamWins[homeTeam]+=1;
      } else {
        this.teamWins[awayTeam]+=1;
      }
    });
    console.log(this.teamWins)
  }
}

type team = {
  [key: string]: number;
};
