import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbaService } from '../../services/nba.service';
import { ApiResponse, NBAGame } from '@balldontlie/sdk';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { teams, playerTeams } from '../../utils/tableData';

@Component({
  selector: 'app-results-table',
  imports: [CommonModule, TableModule, TagModule, CardModule],
  templateUrl: './results-table.component.html',
  styleUrl: './results-table.component.css'
})

export class ResultsTableComponent implements OnInit{

  constructor(private nbaService: NbaService) { }

  private games: ApiResponse<NBAGame[]> = {data: []};
  loading = true;
  teams = teams;
  playerTeams = playerTeams;
  finishedGames: NBAGame[] = [];

  async ngOnInit(): Promise<void> {
    this.games = await this.nbaService.getPlayoffGameData([2024], true);
    this.finishedGames = this.games.data.filter((resp) => resp.status === 'Final');
    this.parseGameData();
    this.setPoints();
  }

  parseGameData() {
    this.finishedGames.forEach(game => {
      const homeTeam = game.home_team.name.toLowerCase();
      const awayTeam = game.visitor_team.name.toLowerCase();
      if(game.home_team_score > game.visitor_team_score){
        this.teams[homeTeam].wins+=1;
        this.teams[homeTeam].points = this.teams[homeTeam].wins * this.teams[homeTeam].pointValue;
      } else {
        this.teams[awayTeam].wins+=1;
        this.teams[awayTeam].points = this.teams[awayTeam].wins * this.teams[awayTeam].pointValue;
      }
    });
  }

  setPoints() {
    this.playerTeams.forEach(player => {
      let points = 0;
      player.teams.forEach(team => {
        points+= team.points;
      });
      player.points = points
    });
    this.playerTeams.sort((a, b) => {
      return b.points - a.points || b.teams[0].points - a.teams[0].points || b.teams[1].points - a.teams[1].points ||
        b.teams[2].points - a.teams[2].points || b.teams[3].points - a.teams[3].points;
    });
    this.loading = false;
  }
}
