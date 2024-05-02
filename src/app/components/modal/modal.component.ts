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
  @Input() objetos?:Array<any>;

  public obtenerCantidad(vector:Array<any>):number {
    return vector.length;
  }
  public valorTotal(vector:Array<any>):number{
    let total:number = 0;
    vector.forEach(el => {
      total = total + el.valor;
    });
    return total;
  }
}