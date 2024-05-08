import { Component } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../../services/ticket.service';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-punto3-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './punto3-formulario.component.html',
  styleUrl: './punto3-formulario.component.css'
})
export class Punto3FormularioComponent {

  ticket:Ticket;
  accion:string;

  constructor(private activatedRoute: ActivatedRoute, private ticketService: TicketService
    ,private router: Router){
    this.accion = "new";
    this.ticket = new Ticket();
  }
  
  ngOnInit():void{
    this.activatedRoute.params.subscribe(params =>{
      if(params['id'] == null){
        this.accion = "new";
      }else{
        this.accion = "update";
        this.cargaTicket(params['id']);
      }
    });
  }
  cargaTicket(id:number):void{
    this.ticket = this.ticketService.getTicketById(id);
  }

  guardarTicket():void{
    this.ticketService.create(this.ticket);
    this.router.navigate(['punto3']);
  }
  actualizarTicket():void{
    this.ticketService.update(this.ticket);
    this.router.navigate(['punto3']);
  }

  aplicarDescuento():void{
    if(this.ticket.tipoEspectador == 'l'){
      this.ticket.precioCobrado =   this.ticket.precioReal - (this.ticket.precioReal*0.2);
    }else{
      this.ticket.precioCobrado =  this.ticket.precioReal;
    }
   }

   condicionEstado(){
    if(this.ticket.tipoEspectador != ""){
      return true;
    }
    return false;
   }
}
