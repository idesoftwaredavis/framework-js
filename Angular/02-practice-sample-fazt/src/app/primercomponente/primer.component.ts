import { Component } from '@angular/core' // desde el nucleo de angular vamos a importar un Componente

@Component({
    selector:'hello-world',
    templateUrl: './primer.component.html',
    styleUrls:['./primer.component.css'],
})
export class HelloWorld{
  title = 'Welcome modificado';

  
}


