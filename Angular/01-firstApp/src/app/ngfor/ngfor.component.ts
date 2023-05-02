import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent{

  //cursos:string[] = ['HTML','ANGULAR','PHP']

  animales:Array<any> =[
    {tipo:'Perro',
     nombre:'Lisa',
     edad:18
    },
    {tipo:'Gato',
     nombre:'Manchita',
     edad:10
    },
    {tipo:'Lobo',
     nombre:'Pepe',
     edad:50
    },
  ]
}
