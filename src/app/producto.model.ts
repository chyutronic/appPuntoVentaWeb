export class Producto{

    constructor(nombre:string, precio:number, categoria:string, cantidad:number){

        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.cantidad = cantidad;
        this.codigo = Producto.codigoSiguiente;
        Producto.codigoSiguiente ++;

    }// fin constructor


    //métodos setter
    public set setNombre(nombre:string){
        this.nombre = nombre;
    }

    public set setPrecio(precio:number){
        this.precio = precio;
    }

    public set setCategoria(categoria:string){
        this.categoria = categoria;
    }

    public set setCantidad(cantidad:number){
        this.cantidad = cantidad;
    }


    //métodos getter
    public get getCodigo(){
        return this.codigo;
    }

    public get getNombre(){
        return this.nombre;
    }

    public get getPrecio(){
        return this.precio;
    }

    public get getCategoria(){
        return this.categoria;
    }

    public get getCantidad(){
        return this.cantidad;
    }


    private nombre:string = "";
    private precio:number = 0;
    private categoria:string = "";
    private cantidad:number = 0;
    private codigo:number = 0;
    private static codigoSiguiente:number = 1;

}// fin clase Producto

