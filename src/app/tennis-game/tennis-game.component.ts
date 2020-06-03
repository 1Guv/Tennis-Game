import { Component, OnInit } from '@angular/core';

export class PlayerCLass {
  name: string;
  rNumber: number;
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
    score:  '0',
    action: '',
    result: ''
  };

  player2: PlayerCLass = {
    name: 'Roger',
    rNumber: 1,
    score:  '0',
    action: '',
    result: ''
  };

  playerGoingFirst: PlayerCLass;

  currentGame = [];

  constructor() { }

  ngOnInit() {

    this.whoIsGoingFirst();
    let counter: number = 100;

    for (let i=0; i<counter; i++) {
      if (this.player1.score === 'Game Won' || this.player2.score === 'Game Won') {
        console.log('Game Finished');
        counter = 0;
      } else {
        this.whoWinsAPoint();
      }
    }
    console.log('currentGame', this.currentGame);
  }

  whoWinsAPoint() {
    let oneOrZero = this.getRandomOneOrZero();
    this.player1.rNumber === oneOrZero ? this.playerGetsAPoint(this.player1) : this.playerGetsAPoint(this.player2);
  }

  playerGetsAPoint(player: PlayerCLass) {
    // console.log('player', player);
    let newPlayer = {...player};
    
    this.addScore(newPlayer);
    this.addAction(newPlayer);
    this.addResult(newPlayer);
    this.currentGame.push(newPlayer); // this goes into the array
    player.score = newPlayer.score; // this updates the original object with the new score
  }

  whoIsGoingFirst() {
    // Random number either 0 or 1
    let randomNumber = this.getRandomOneOrZero();
    this.player1.rNumber === randomNumber ? this.playerGoingFirst = this.player1 : this.playerGoingFirst = this.player2;
  }

  getRandomOneOrZero(): number {
    return Math.round(Math.random()*2);
  }

  addScore(player: PlayerCLass) {

    switch (player.score) {
      case '0':
        player.score = '15';
        break;
      case '15':
        player.score = '30';
        break
      case '30':
        player.score = '40';
        break;
      case '40':
        if ((this.player1.score === '40' && this.player2.score !== '40') || (this.player2.score === '40' && this.player1.score !== '40')) {
          if (((this.player1.score === '40' && this.player2.score !== 'Deuce') || (this.player2.score === '40' && this.player1.score !== 'Deuce'))) {
            if (((this.player1.score === '40' && this.player2.score !== 'Advantage') || (this.player2.score === '40' && this.player1.score !== 'Advantage'))) {
              player.score = 'Game Won';
            }
          }
        }

        if (this.player1.score === '40' && this.player2.score === '40') {
          player.score = "Deuce";
        }
        break;
      case 'Deuce':
        player.score = 'Advantage';
        break;
      case 'Advantage':
        player.score = 'Game Won';
        break;
      default:
        console.log(`default`);
    }
  }

  addAction(player: PlayerCLass) {
    player.action = `${player.name} wins a point`;
  }

  addResult(player: PlayerCLass) {
    player.result = `${this.player1.score} - ${this.player2.score}`;
  }

}
