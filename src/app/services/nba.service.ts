import { Injectable } from '@angular/core';
import { BalldontlieAPI } from "@balldontlie/sdk";

@Injectable({
  providedIn: 'root'
})
export class NbaService {

  constructor() { }

  private nbaApi = new BalldontlieAPI({ apiKey: "270b3bed-0459-4ad0-9a98-2e496793765d" }).nba;

  async getPlayoffGameData(seasons: number[], postseason: boolean) {
    const gameData = await this.nbaApi.getGames({ per_page: 100, seasons: seasons, postseason: postseason});
    return gameData;
  }

  async getTodaysGameData(seasons: number[], postseason: boolean) {
    const todaysDate = new Date();
    const offset = todaysDate.getTimezoneOffset();
    const formattedDate = new Date(todaysDate.getTime() - (offset*60*1000)).toISOString().split('T')[0];
    const gameData = await this.nbaApi.getGames({
       seasons: seasons,
       postseason: postseason,
       start_date: formattedDate,
       end_date: formattedDate
      });
    return gameData;
  }

}
