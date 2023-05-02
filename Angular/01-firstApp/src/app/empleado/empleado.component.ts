import { Component } from "@angular/core";


@Component({
    'selector':'app-empleado',
    'templateUrl':'./empleado.component.html',
    //template:"<p>Aqui va un empleado skjdksjd</p>",
    'styleUrls':['./empleado.component.css'],
    //styles:["p{background-color:red;}"]
})

export class EmpleadoComponent{
      data ={
        "nombre":"Davis",
        "apellido":"Berrios",
        "edad":500,
        "empresa":"Banco Estado",
        "foto": "https://picsum.photos/200"
    }


    llamaEmpresa(value:String){
        
    }    

    habilitacionCuadro=false;
    usuRegistrado=false;
    textoDeRegistro="No hay nadie registrado";

    cambiaEmpresa(event:Event){
        this.data.empresa=(<HTMLInputElement>event.target).value;
    }


    getRegistroUsuario = ()=>{
        this.usuRegistrado=false;
    }

    setUsuarioRegistrado(event:Event){
        if((<HTMLInputElement>event.target).value=="si"){
            this.textoDeRegistro="Usuario registrado";
        }else{
            this.textoDeRegistro="no hay nadie registrado";
        }
    }


    
    
}