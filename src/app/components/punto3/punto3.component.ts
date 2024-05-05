import { Component, Injectable } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { TicketService } from '../../services/ticket.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TipoEspectadorPipe } from "../../pipes/tipo-espectador.pipe"; 
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-punto3',
    standalone: true,
    templateUrl: './punto3.component.html',
    styleUrl: './punto3.component.css',
    imports: [CommonModule, TipoEspectadorPipe, FormsModule]
})
export class Punto3Component {

  tickets: Array<Ticket>;
  filterTickets: Array<Ticket>;
  opcion: string;

  constructor(private ticketService: TicketService, private router: Router) {
      this.tickets = new Array<Ticket>();
      this.obtenerTickets();
      this.opcion = "e";
      this.filterTickets = new Array<Ticket>();
      this.obtenerFiltroPorTipo(this.opcion);
  }
  obtenerTickets():void{
    this.tickets = this.ticketService.getTickets();
  }

  agregar():void{
    this.router.navigate(['punto3-formulario']);
    console.log(this.tickets);
  }

  modificar(id:number):void{
    this.router.navigate(['punto3-formulario',id]);
  }

  eliminar(id:number):void{
    this.ticketService.delete(id);
    this.obtenerTickets();
    this.obtenerFiltroPorTipo(this.opcion);
  }
  obtenerFiltroPorTipo(opcion:string):void{
    this.filterTickets = this.ticketService.filterByTipo(opcion);
  }

  obtenerTotalRecaudado(tickets:Array<Ticket>):number{
    let total:number = 0;
    for(let e of tickets) {
      total = total + e.precioCobrado;
    }
    return total;
  }
}
