import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  tickets:Array<Ticket>;
  nuevoId: number;
  constructor() {
    this.tickets = new Array<Ticket>();
    this.nuevoId = 1;
    let e:Ticket = new Ticket(45543532,"e",new Date(2024, 3, 20));
    e.id = this.nuevoId;
    e.precioCobrado = 5000;
    this.tickets.push(e);
    this.nuevoId += 1;
    let segundo:Ticket = new Ticket(43790454,"l",new Date(2024, 5, 1));
    segundo.id = this.nuevoId;
    segundo.precioCobrado = 4000;
    this.tickets.push(segundo);
  } 

  create(ticket:Ticket):void{
    this.nuevoId += 1;
    ticket.id = this.nuevoId;
    this.tickets.push(ticket);
  }

  getTicketById(id:number):Ticket{
    let ticket:Ticket = new Ticket();
    let indexTicket:number = this.tickets.findIndex(t => t.id == id);
    ticket = this.tickets[indexTicket];
    return ticket;
  }

  getTickets():Array<Ticket>{
    return this.tickets;
  }

  delete(id: number): void {
    this.tickets = this.tickets.filter(ticket => ticket.id !== id);
  }

  update(ticketActualizado: Ticket): void {
    const index = this.tickets.findIndex(ticket => ticket.id == ticketActualizado.id);
    if(index != -1){
      this.tickets[index] = ticketActualizado;
    }
  }
  filterByTipo(tipo:string): Array<Ticket>{
    return this.tickets.filter(ticket => ticket.tipoEspectador == tipo);
  }
}
