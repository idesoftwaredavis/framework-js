import { Component, HostBinding, OnInit } from '@angular/core';

import {GamesService} from '../../services/games.service'
import { Game } from 'src/app/models/Game';


@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})

export class GameListComponent implements OnInit {

  @HostBinding('class') classes ='row';
  
  games: any = [];
  constructor(private gameService:GamesService){  
    
  }
  ngOnInit(): void {
    this.getGames();
  }

  deleteGame(id:string){
    this.gameService.deleteGame(id).subscribe(
      res=>{
        this.getGames();
      },
      err => console.log(err)
    )
  }

  getGames(){
    this.gameService.getGames().subscribe(
      res=>{
        this.games = res; // la información de la respuesta la voy a pasar al array games
      },
      err=> console.error(err)
    )
  }

}
