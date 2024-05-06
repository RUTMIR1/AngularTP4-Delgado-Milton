import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Producto } from '../../models/producto';
import { CommonModule } from '@angular/common';
import { Punto1Component } from '../punto1/punto1.component';
import { TipoValorPipe } from "../../pipes/tipo-valor.pipe";

@Component({
    selector: 'app-modal',
    standalone: true,
    templateUrl: './modal.component.html',
    styleUrl: './modal.component.css',
    imports: [CommonModule, Punto1Component, TipoValorPipe]
})
export class ModalComponent{
  @Input() objetos?:Array<any>;
  @Input() nombre?:string;

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