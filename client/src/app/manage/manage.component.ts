import { Component, OnInit } from '@angular/core';
import {PlayerService} from './../player.service';
import {Player} from './../player';
import { Router } from '@angular/router'
@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  constructor(private _playerService :PlayerService,  private _router:Router ) { }
newPlayer = new Player;
Players: Player
  ngOnInit() {
  }
addPlayer()
{
this._playerService.add(this.newPlayer);
this._router.navigateByUrl("/players");
this.newPlayer=new Player;
}

}
