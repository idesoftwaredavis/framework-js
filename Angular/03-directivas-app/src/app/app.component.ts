import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  titulo = 'REGISTRO DE USUARIOS';
  mensaje="";
  registrado=false;
  nombre="";
  apellido="";
  cargo:string="";
  entradas:any;

  constructor(){
    this.entradas=[
      {titulo:"Python cada día mas presente"},
      {titulo:"Java presente hace mas de 20 años"},
      {titulo:"JavaScript cada vez mas funcional"},
      {titulo:"Kotlin potencia para tus apps"},
      {titulo:"¿Dónde quedo Pascal?"},
    ]
  }


  registrarUsuario(){

    this.registrado=true;
    this.mensaje="usuario registrado con éxito";
  }
}
