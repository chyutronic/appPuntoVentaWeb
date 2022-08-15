export class Venta{

    constructor(cantidad:number, detalle:string, total:number, medioPago:string){
        this.cantidad = cantidad;
        this.detalle = detalle;
        this.total = total;
        this.medioPago = medioPago;

    }// fin constructor


    //métodos setter
    public set setCantidad(cantidad:number){
        this.cantidad = cantidad;
    }

    public set setDetalle(detalle:string){
        this.detalle = detalle;
    }

    public set setTotal(total:number){
        this.total = total;
    }

    public set setMedioPago(medioPago:string){
        this.medioPago = medioPago;
    }


    //métodos getter
    public get getCantidad(){
        return this.cantidad;
    }

    public get getDetalle(){
        return this.detalle;
    }

    public get getTotal(){
        return this.total;
    }

    public get getMedioPago(){
        return this.medioPago;
    }


    private cantidad:number = 0;
    private detalle:string = "";
    private total:number = 0;
    private medioPago:string = "";

}// fin clase Venta

