export class Empleado{
    public nombre:string="";
    public apellido:string="";
    public cargo:string="";
    public salario:number=0;

    constructor(nombre:string,apellido:string,cargo:string,salario:number){
        this.nombre=nombre;
        this.apellido=apellido;
        this.cargo=cargo;
        this.salario=salario;
    }


    public getNombre = ()=>{
        return this.nombre;
    }

    public getApellido = ()=>{
        return this.apellido;
    }

    public getCargo = ()=>{
        return this.cargo;
    }

    public getSalario = ()=>{
        return this.salario;
    }

    
}