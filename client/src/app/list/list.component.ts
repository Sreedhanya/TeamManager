import { Component, OnInit } from '@angular/core';
import {PlayerService} from './../player.service';
import {Player} from './../player';

import { Router } from '@angular/router'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private _playerService :PlayerService, private _router:Router) { }
players=[];
  ngOnInit() {
   this.showAll();
  }
showAll()
{
  this._playerService.show().then( players => {this.players = players; console.log(this.players)})
    .catch( err => {console.log(err)});
}
deletePlayer(player: Player)
{
  let conf=confirm("Are you sure you want to delete "+player.name);
  if(conf)
  this._playerService.deletePlayer(player).then(players=>{this.players=players}).catch(err=>{console.log(err)});
  window.location.reload();
}
}
