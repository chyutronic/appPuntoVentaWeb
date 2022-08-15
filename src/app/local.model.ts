export class Local{

    constructor(nombre:string, direccion:string){

        this.nombre = nombre;
        this.direccion = direccion;
    }

    //métodos setter
    public set setNombre(nombre:string){
        this.nombre = nombre;
    }

    public set setDireccion(direccion:string){
        this.direccion = direccion;
    }


    //métodos getter
    public get getNombre(){
        return this.nombre;
    }

    public get getDireccion(){
        return this.direccion;
    }


    private nombre:string = "";
    private direccion:string = "";

}// fin clase Local

