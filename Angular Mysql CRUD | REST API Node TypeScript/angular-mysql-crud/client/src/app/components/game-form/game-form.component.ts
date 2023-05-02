import { Component, HostBinding } from '@angular/core';
import { Game } from 'src/app/models/Game';
import {ActivatedRoute, Router} from '@angular/router'

import { GamesService } from 'src/app/services/games.service';


@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent {
 @HostBinding('class') classes = 'row';

 // creación de objeto
 game:Game={
  id:0,
  title:'',
  descripcion:'',
  imagen:'',
  created_at:new Date()
 };

 edit:boolean=false;

 constructor(private gameService: GamesService, private route : Router, private activedRoute:ActivatedRoute){}

ngOnInit(){
  const params = this.activedRoute.snapshot.params; // tiene los parametros de los juegos que quiero actualizar del path obtenido en el app-routing.
  console.log(params);

  if(params["id"]){
    this.gameService.getGame(params["id"])
      .subscribe(
        res=>{
          console.log(res);
          this.game=res;
          this.edit = true;
        },
        err=> console.log(err)
      )
  }
}
 saveNewGame(){
  delete this.game.created_at;
  delete this.game.id;
  
  this.gameService.saveGame(this.game)
    .subscribe(
      res=> {
        console.log(res);
        this.route.navigate(['/games']);
      },
      err=> console.error(err)
    )
 }

 updateGame(){
  delete this.game.created_at;
  this.gameService.updateGame(this.game.id,this.game)
    .subscribe(
        res=>{
          this.route.navigate(['/games']);
        },
        err=> console.log(err)
      )
 }
}



