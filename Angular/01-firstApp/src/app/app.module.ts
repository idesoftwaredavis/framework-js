import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import {EmpleadoComponent} from './empleado/empleado.component';
import { TestDeleteComponent } from './test-delete/test-delete.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [	
    AppComponent, EmpleadosComponent, EmpleadoComponent, TestDeleteComponent,
      NgforComponent
   ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
