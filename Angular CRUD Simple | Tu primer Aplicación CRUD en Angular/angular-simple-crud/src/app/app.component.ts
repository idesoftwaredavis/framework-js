import { Component } from '@angular/core';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  employeeArray: Employee[] = [
    {id:1,name:'Ryan',country:'USA'},
    {id:2,name:'Joe',country:'USA'},
    {id:3,name:'Angelica',country:'USA'}
  ]

  selectedEmployee: Employee = new Employee();

  addOrEdit(){
    if(this.selectedEmployee.id === 0){
      this.selectedEmployee.id=this.employeeArray.length + 1;
      this.employeeArray.push(this.selectedEmployee);  
    }    
    this.selectedEmployee = new Employee();
  }

  openForEdit(emp:Employee){
    this.selectedEmployee=emp;
  }

  borrar(){
    if(confirm('Estas seguro de querer eliminarlo')){
      // Lista de empleados distintos al seleccionado
      this.employeeArray = this.employeeArray.filter(x => x != this.selectedEmployee);
      this.selectedEmployee = new Employee();
    }
    
  }
}
