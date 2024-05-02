import { Component, Input } from '@angular/core';
import { Producto } from '../../models/producto';
import { CommonModule } from '@angular/common';
import { Punto1Component } from '../punto1/punto1.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, Punto1Component],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() productos?:Array<Producto>;

  eventonuevo():void{
    console.log(this.productos);
  }

  public obtenerCantidad(vector:Array<Producto>):number {
    return vector.length;
  }
  public precioTotal(vector:Array<Producto>):number{
    let total:number = 0;
    vector.forEach(el => {
      total = total + el.precio;
    });
    return total;
  }
}