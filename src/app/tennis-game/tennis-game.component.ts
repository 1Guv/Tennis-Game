import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export class PlayerCLass {
  name: string;
  rNumber: number;
  score: string;
}

export class GameClass {
  score: string;
  action: string;
  result: string;
}

@Component({
  selector: 'app-tennis-game',
  templateUrl: './tennis-game.component.html',
  styleUrls: ['./tennis-game.component.scss']
})
export class TennisGameComponent implements OnInit {

  player1: PlayerCLass = {
    name: 'Tim',
    rNumber: 0,
    score:  '0'
  };

  player2: PlayerCLass = {
    name: 'Roger',
    rNumber: 1,
    score:  '0'
  };

  playerGoingFirst: PlayerCLass;

  currentGame = [];

  constructor() { }

  ngOnInit() {

    this.whoIsGoingFirst();

    for (let i=0; i<5; i++) {
      this.whoWinsAPoint();
    }
  }

  whoWinsAPoint() {
    let oneOrZero = this.getRandomOneOrZero();
    this.player1.rNumber === oneOrZero ? this.player1GetsAPoint(oneOrZero) : this.player2GetsAPoint(oneOrZero);
  }

  player1GetsAPoint(oneOrZero: number) {
    this.addPoints(this.player1);
    let game = new GameClass;
    game.score = `${this.player1.score}` + '-' + `${this.player2.score}`;
    game.action = `${this.player1.name} wins a point`;
    game.result = this.getResult(oneOrZero);
    // console.log(game);
    this.currentGame.push(game);
  }

  player2GetsAPoint(oneOrZero: number) {
    this.addPoints(this.player2);
    let game = new GameClass;
    game.score = `${this.player1.score}` + '-' + `${this.player2.score}`;
    game.action = `${this.player2.name} wins a point`;
    game.result = this.getResult(oneOrZero);
    // console.log(game);
    this.currentGame.push(game);
  }

  whoIsGoingFirst() {
    // Random number either 0 or 1
    let randomNumber = this.getRandomOneOrZero();
    this.player1.rNumber === randomNumber ? this.playerGoingFirst = this.player1 : this.playerGoingFirst = this.player2;
  }

  getRandomOneOrZero(): number {
    return Math.round(Math.random()*2);
  }

  getResult(player: number):string {
    return 'result';
  }

  addPoints(player: PlayerCLass) {
    if (player.score === '0') {
      return player.score = '15';
    }

    if (player.score === '15') {
      return player.score = '30'
    }

    if (player.score === '30') {
      return player.score = '40'
    }
  }

}
