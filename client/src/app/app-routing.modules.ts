import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManageComponent } from './manage/manage.component';
import {ListComponent} from './list/list.component';
import {GamesComponent} from './games/games.component';
const routes: Routes = [
 {path:'players', component :ListComponent},
 {path:'players/addplayer', component:ManageComponent },
 {path:'status/game/1', component:GamesComponent},
 {path:"",pathMatch:'full',redirectTo:'players'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }