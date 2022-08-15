import { Component } from '@angular/core';
import { of } from 'rxjs';
import { Local } from './local.model';
import { Producto } from './producto.model';
import { Venta } from './venta.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'PUNTO DE VENTA';

  Macul = new Local("Doña Juanita", "Los Platanos 2354");

  productos:Producto[]=[];
  ventas:Venta[]=[];
  locales:Local[]=[];


  agregarProducto(){

    let p = new Producto(this.cuadroNombre, this.cuadroPrecio, this.cuadroCategoria, this.cuadroCantidad);

    this.productos.push(p);

  }// fin método agregarProducto



  hacerVenta(){

    for(let p of this.productos){

      if(p.getCodigo == this.cuadroCodigoV){
        let totalVendido = this.cuadroCantidadV * p.getPrecio;

        let v = new Venta(this.cuadroCantidadV, p.getNombre, totalVendido, this.cuadroMedioPagoV)

        this.ventas.push(v);
        p.setCantidad = p.getCantidad - v.getCantidad;

      }// fin if
    }// fin for

  }// fin método hacerVenta



  cuadroNombre:string = "";
  cuadroPrecio:number = 0;
  cuadroCategoria:string = "";
  cuadroCantidad:number = 0;

  cuadroCodigoV:number = 0;
  cuadroCantidadV:number = 0;
  cuadroMedioPagoV:string = "";


}// fin clase AppComponent


