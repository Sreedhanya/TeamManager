import { Injectable } from '@angular/core';
import {Player} from './player';
import {Http} from '@angular/http';
import "rxjs";
@Injectable()
export class PlayerService {

  constructor(private _http: Http) { }
  add(newPlayer: Player)
  {
this._http.post('/',newPlayer).map(data => data.json())
    .toPromise();;
  }
  show()
  {
return this._http.get('/players/list').map(data=>data.json()).toPromise();
  }
  deletePlayer(player:Player)
  {
    return this._http.post('/delete',player).map(data=>data.json()).toPromise();
  }
  update(player: Player)
  {
    return this._http.post('/players/update', player)
    .map(data => data.json())
    .toPromise();
  }
}


