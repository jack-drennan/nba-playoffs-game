import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbaService } from '../../services/nba.service';
import { ApiResponse, NBAGame } from '@balldontlie/sdk';
import { TableModule } from 'primeng/table';
import { teams, playerTeams, team } from '../../utils/tableData';

@Component({
  selector: 'app-results-table',
  imports: [CommonModule, TableModule],
  templateUrl: './results-table.component.html',
  styleUrl: './results-table.component.css'
})

export class ResultsTableComponent implements OnInit{

  constructor(private nbaService: NbaService) { }

  private games: ApiResponse<NBAGame[]> = {data: []};
  loading = true;
  teams = teams;
  playerTeams = playerTeams;

  async ngOnInit(): Promise<void> {
    this.games = await this.nbaService.getGameData([2024], true, '2024-04-19');
    this.parseGameData();
    this.setPoints();
  }

  parseGameData() {
    const finishedGames = this.games.data.filter((resp) => resp.status === 'Final');
    finishedGames.forEach(game => {
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
    this.playerTeams.sort((a, b) => b.points - a.points);
    this.loading = false;
  }
}
