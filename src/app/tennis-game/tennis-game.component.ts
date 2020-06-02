import { Component, OnInit } from '@angular/core';

export class PlayerCLass {
  name: string;
  rNumber: number;
  score: number;
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
    score:  0
  };

  player2: PlayerCLass = {
    name: 'Roger',
    rNumber: 1,
    score:  0
  };

  playerGoingFirst: PlayerCLass;

  currentGame = [];

  constructor() { }

  ngOnInit() {

    this.whoIsGoingFirst();

    for (let i=0; i<10; i++) {
      this.whoWinsAPoint();
    }
  }

  whoWinsAPoint() {
    let oneOrZero = this.getRandomOneOrZero();
    this.player1.rNumber === oneOrZero ? this.player1GetsAPoint() : this.player2GetsAPoint();
  }

  player1GetsAPoint() {
    let action = `${this.player1.name} wins a point`;
    // console.log(action);
    this.currentGame.push(action);
  }

  player2GetsAPoint() {
    let action = `${this.player2.name} wins a point`;
    // console.log(action);
    this.currentGame.push(action);
  }

  whoIsGoingFirst() {
    // Random number either 0 or 1
    let randomNumber = this.getRandomOneOrZero();
    this.player1.rNumber === randomNumber ? this.playerGoingFirst = this.player1 : this.playerGoingFirst = this.player2;
  }

  getRandomOneOrZero(): number {
    return Math.round(Math.random()*2);
  }

}
