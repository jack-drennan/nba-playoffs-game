import { Injectable } from '@angular/core';
import { BalldontlieAPI } from "@balldontlie/sdk";

@Injectable({
  providedIn: 'root'
})
export class NbaService {

  constructor() { }

  private nbaApi = new BalldontlieAPI({ apiKey: "270b3bed-0459-4ad0-9a98-2e496793765d" }).nba;

  async getGameData(seasons: number[], postseason: boolean, endDate: string) {
    const gameData = await this.nbaApi.getGames({ seasons: seasons, postseason: postseason});

    // gameData

    return gameData;
  }

}
