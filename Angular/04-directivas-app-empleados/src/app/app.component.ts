import { Component, Input } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Empleados';
  nombre:string="";
  apellido:string="";
  cargo:string="";
  sueldo:number=0;

  mensaje:string="";
  error = document.getElementById("#mensaje")!;
  alert:string="alert alert-danger";
  
  // array de empleados
  empleados:Empleado[]=[
    new Empleado("davis","Berrios","QA Banco Estado",1200000),
    new Empleado("Matias","Berrios","Scientist",500000),
    new Empleado("Nico","Garrido","Administrativo",800000)    
  ];


  registrar=()=>{
    console.log("I'm here!");
    if(this.nombre.length!=0 || this.apellido.length!=0 || this.cargo.length!=0 && this.sueldo != -1 && this.sueldo >0){
      this.empleados.push(new Empleado(this.nombre,this.apellido,this.cargo,this.sueldo));
      
      this.clean();
    }else{
      this.mensajeHandler();
      this.mensaje="Los campos no pueden estar vacíos.";  
    }
    
  };

  mensajeHandler=()=>{
   if(this.error.textContent!= null){
    this.error.style.display='block';
   }else{
    this.error.hidden=true;
   }
  };

  clean=()=>{
    this.nombre="";
    this.apellido="";
    this.cargo="";
    this.sueldo=0;
  };
  
}
