import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {PlayerService} from './player.service';
import { AppRoutingModule } from './app-routing.modules';
 import { AppComponent } from './app.component';
import { ManageComponent } from './manage/manage.component';
import { ListComponent } from './list/list.component';
import { GamesComponent } from './games/games.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageComponent,
    ListComponent,
    GamesComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
