import { Component, OnInit } from '@angular/core';
import {PlayerService} from './../player.service';
import {Player} from './../player';

import { Router } from '@angular/router'

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor(private _playerService :PlayerService, private _router:Router) { }
players=[];
game = 'game1';
  gamedisplay = 1;
  ngOnInit() {
     this._playerService.show().then( players => {this.players = players; console.log(this.players)})
    .catch( err => {console.log(err)});
  }
  setGame(game){
    console.log("in click game func", game)
    this.game = game;
  }
  playing(player){
    player.games[this.game] = "playing";
    this._playerService.update(player)
    this._playerService.show()
    .then( players => {this.players = players; console.log(this.players)})
    .catch( err => {console.log(err)})
  }
  notPlaying(player){
    player.games[this.game]= "notPlaying";
    this._playerService.update(player)
    this._playerService.show()
    .then( players => {this.players = players; console.log(this.players)})
    .catch( err => {console.log(err)})
  }

  undecided(player){
    player.games[this.game] = "undecided"
    this._playerService.update(player)
    this._playerService.show()
    .then( players => {this.players = players; console.log(this.players)})
    .catch( err => {console.log(err)})
  }

}
