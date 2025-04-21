import { Component, OnInit } from '@angular/core';
import { NbaService } from '../../services/nba.service';
import { ApiResponse, NBAGame } from '@balldontlie/sdk';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-results-table',
  imports: [TableModule],
  templateUrl: './results-table.component.html',
  styleUrl: './results-table.component.css'
})

export class ResultsTableComponent implements OnInit{

  constructor(private nbaService: NbaService) { }

  private games: ApiResponse<NBAGame[]> = {data: []};
  teams: team = {
    cavaliers: {
      name: "Cavaliers",
      pointValue: 1,
      wins: 0,
      points: 0
    },
    celtics: {
      name: "Celtics",
      pointValue: 1,
      wins: 0,
      points: 0
    },
    knicks: {
      name: "Knicks",
      pointValue: 2,
      wins: 0,
      points: 0
    },
    pacers: {
      name: "Pacers",
      pointValue: 2,
      wins: 0,
      points: 0
    },
    bucks: {
      name: "Bucks",
      pointValue: 3,
      wins: 0,
      points: 0
    },
    pistons: {
      name: "Pistons",
      pointValue: 3,
      wins: 0,
      points: 0
    },
    magic: {
      name: "Magic",
      pointValue: 4,
      wins: 0,
      points: 0
    },
    heat: {
      name: "Heat",
      pointValue: 4,
      wins: 0,
      points: 0
    },
    thunder: {
      name: "Thunder",
      pointValue: 1,
      wins: 0,
      points: 0
    },
    rockets: {
      name: "Rockets",
      pointValue: 1,
      wins: 0,
      points: 0
    },
    lakers: {
      name: "Lakers",
      pointValue: 2,
      wins: 0,
      points: 0
    },
    nuggets: {
      name: "Nuggets",
      pointValue: 2,
      wins: 0,
      points: 0
    },
    clippers: {
      name: "Clippers",
      pointValue: 3,
      wins: 0,
      points: 0
    },
    timberwolves: {
      name: "Timberwolves",
      pointValue: 3,
      wins: 0,
      points: 0
    },
    warriors: {
      name: "Warriors",
      pointValue: 4,
      wins: 0,
      points: 0
    },
    grizzlies: {
      name: "Grizzlies",
      pointValue: 4,
      wins: 0,
      points: 0
    }
  };

  playerTeams = [
    {
      player: "Justin",
      teams: [
        this.teams['celtics'],
        this.teams['lakers'],
        this.teams['warriors'],
        this.teams['nuggets']
      ],
      points: 0
    },
    {
      player: "Jack",
      teams: [
        this.teams['thunder'],
        this.teams['warriors'],
        this.teams['clippers'],
        this.teams['pacers']
      ],
      points: 0
    },
    {
      player: "Kunal",
      teams: [
        this.teams['celtics'],
        this.teams['clippers'],
        this.teams['warriors'],
        this.teams['knicks']
      ],
      points: 0
    },
    {
      player: "Nick",
      teams: [
        this.teams['thunder'],
        this.teams['celtics'],
        this.teams['lakers'],
        this.teams['bucks']
      ],
      points: 0
    },
    {
      player: "Gabe",
      teams: [
        this.teams['warriors'],
        this.teams['timberwolves'],
        this.teams['nuggets'],
        this.teams['celtics']
      ],
      points: 0
    },
    {
      player: "Mike",
      teams: [
        this.teams['lakers'],
        this.teams['clippers'],
        this.teams['warriors'],
        this.teams['celtics']
      ],
      points: 0
    },
    {
      player: "Mason",
      teams: [
        this.teams['warriors'],
        this.teams['clippers'],
        this.teams['bucks'],
        this.teams['celtics']
      ],
      points: 0
    },
    {
      player: "Jay",
      teams: [
        this.teams['lakers'],
        this.teams['warriors'],
        this.teams['knicks'],
        this.teams['clippers']
      ],
      points: 0
    },
    {
      player: "Sean",
      teams: [
        this.teams['clippers'],
        this.teams['warriors'],
        this.teams['heat'],
        this.teams['grizzlies']
      ],
      points: 0
    },
    {
      player: "Gavin",
      teams: [
        this.teams['thunder'],
        this.teams['celtics'],
        this.teams['cavaliers'],
        this.teams['warriors']
      ],
      points: 0
    },
    {
      player: "Terminator",
      teams: [
        this.teams['timberwolves'],
        this.teams['warriors'],
        this.teams['thunder'],
        this.teams['clippers']
      ],
      points: 0
    }
  ];

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
    })
  }
}

type team = {
  [key: string]: any;
};
