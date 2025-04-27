import { Component, OnInit } from '@angular/core';
import { ApiResponse, NBAGame } from '@balldontlie/sdk';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { NbaService } from '../../services/nba.service';
import { teams } from '../../utils/tableData';

@Component({
  selector: 'app-remaining-teams-card',
  imports: [TableModule, CardModule],
  templateUrl: './remaining-teams-card.component.html',
  styleUrl: './remaining-teams-card.component.css'
})
export class RemainingTeamsCardComponent implements OnInit{

  constructor(private nbaService: NbaService) { }

  private games: ApiResponse<NBAGame[]> = {data: []};
  loading = true;
  teams = teams;
  finishedGames: NBAGame[] = [];
  remainingTeams: any[] = [];
  teamList: string[] = [];
  formattedTeams = [
    {
      teams: this.teamList
    },
    {
      teams: this.teamList
    },
    {
      teams: this.teamList
    },
    {
      teams: this.teamList
    }
  ];

  async ngOnInit(): Promise<void> {
    this.games = await this.nbaService.getPlayoffGameData([2024], true);
    this.finishedGames = this.games.data.filter((resp) => resp.status === 'Final');
    await this.delay(750);
    this.getRemainingTeams();
  }

  getRemainingTeams() {
    let allTeams = this.games.data.map(obj => obj.home_team.name);
    let eliminatedTeams: string[] = [];
    let remainingTeams: string[] = [...new Set(allTeams)];

    for(const team in teams) {
      if(teams[team].wins !== 0 && teams[team].wins % 4 === 0) {
        this.finishedGames.forEach(game => {
          if(game.home_team.name.toLowerCase() === team) {
            eliminatedTeams.push(game.visitor_team.name);
          }
          if(game.visitor_team.name.toLowerCase() === team) {
            eliminatedTeams.push(game.home_team.name);
          }
        })
      }
    }

    eliminatedTeams = [...new Set(eliminatedTeams)];
    eliminatedTeams.forEach(team => {
      const index = remainingTeams.indexOf(team);
      remainingTeams.splice(index, 1);
    })

    this.remainingTeams = remainingTeams;

    this.remainingTeams.forEach((team,i) => {
      this.remainingTeams[i] = teams[team.toLowerCase()].logo;
    })

    const rows = Math.round(this.remainingTeams.length / 4);
    const teamChunks = [];
    for (let i = 0; i < this.remainingTeams.length; i += rows) {
      teamChunks.push(this.remainingTeams.slice(i, i + rows));
    }
    teamChunks.forEach((chunk, i) => {
      this.formattedTeams[i].teams = chunk;
    })

    this.loading = false;
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
