export type team = {
    [key: string]: any;
};

export const teams: team = {
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
  
export const playerTeams = [
    {
      player: "Justin",
      teams: [
        teams['celtics'],
        teams['lakers'],
        teams['warriors'],
        teams['nuggets']
      ],
      points: 0
    },
    {
      player: "Jack",
      teams: [
        teams['thunder'],
        teams['warriors'],
        teams['clippers'],
        teams['pacers']
      ],
      points: 0
    },
    {
      player: "Kunal",
      teams: [
        teams['celtics'],
        teams['clippers'],
        teams['warriors'],
        teams['knicks']
      ],
      points: 0
    },
    {
      player: "Nick",
      teams: [
        teams['thunder'],
        teams['celtics'],
        teams['lakers'],
        teams['bucks']
      ],
      points: 0
    },
    {
      player: "Gabe",
      teams: [
        teams['warriors'],
        teams['timberwolves'],
        teams['nuggets'],
        teams['celtics']
      ],
      points: 0
    },
    {
      player: "Mike",
      teams: [
        teams['lakers'],
        teams['clippers'],
        teams['warriors'],
        teams['celtics']
      ],
      points: 0
    },
    {
      player: "Mason",
      teams: [
        teams['warriors'],
        teams['clippers'],
        teams['bucks'],
        teams['celtics']
      ],
      points: 0
    },
    {
      player: "Jay",
      teams: [
        teams['lakers'],
        teams['warriors'],
        teams['knicks'],
        teams['clippers']
      ],
      points: 0
    },
    {
      player: "Sean",
      teams: [
        teams['clippers'],
        teams['warriors'],
        teams['heat'],
        teams['grizzlies']
      ],
      points: 0
    },
    {
      player: "Gavin",
      teams: [
        teams['thunder'],
        teams['celtics'],
        teams['cavaliers'],
        teams['warriors']
      ],
      points: 0
    },
    {
      player: "Terminator",
      teams: [
        teams['timberwolves'],
        teams['warriors'],
        teams['thunder'],
        teams['clippers']
      ],
      points: 0
    }
  ];