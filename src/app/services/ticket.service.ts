import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  tickets!:Array<Ticket>;
  nuevoId: number;
  constructor() {
    this.tickets = new Array<Ticket>();
    this.nuevoId = 1;
    let e:Ticket = new Ticket(this.nuevoId,3213,42,"e",new Date(2024, 3, 20),32);
    this.tickets.push(e);
  } 

  create(ticket:Ticket):void{
    this.nuevoId += 1;
    ticket.id = this.nuevoId;
    this.tickets.push(ticket);
  }

  getTicketById(id:number):Ticket{
    let ticket:Ticket = new Ticket(0,0,0,"",new Date(),0);
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

  update(updatedTicket: Ticket): void {
    const index = this.tickets.findIndex(ticket => ticket.id == updatedTicket.id);
    if (index !== -1) {
      this.tickets[index] = updatedTicket;
    }
  }
  filterByTipo(tipo:string): Array<Ticket>{
    return this.tickets.filter(ticket => ticket.tipoEspectador == tipo);
  }
}
