import { Component } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { tick } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../../services/ticket.service';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { compileDeclareNgModuleFromMetadata } from '@angular/compiler';

@Component({
  selector: 'app-punto3-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './punto3-formulario.component.html',
  styleUrl: './punto3-formulario.component.css'
})
export class Punto3FormularioComponent {

  ticket:Ticket;
  accion:string = "new";
  estado:boolean;

  constructor(private activatedRoute: ActivatedRoute, private ticketService: TicketService
    ,private router: Router){
    this.ticket = new Ticket(0,0,0,"",new Date(),0);
    this.estado = false;
  }
  
  ngOnInit():void{
    this.activatedRoute.params.subscribe(params =>{
      if(params['id'] == null){
        this.accion = "new";
        console.log(this.accion);
      }else{
        this.accion = "update";
        console.log(this.accion);
        this.cargaTicket(params['id']);
      }
    });
  }
  cargaTicket(id:number):void{
    this.ticket = this.ticketService.getTicketById(id);
    console.log(this.ticketService.getTicketById(id));
  }

  guardarTicket():void{
    this.ticketService.create(this.ticket);
    this.ticket = new Ticket(0,0,0,"",new Date(),0);
    this.router.navigate(['punto3']);

  }
  actualizarTicket():void{
    this.ticketService.update(this.ticket);
    this.ticket = new Ticket(0,0,0,"",new Date(),0);
    this.router.navigate(['punto3']);
  }

  aplicarDescuento():void{
    if(this.ticket.tipoEspectador == 'l'){
      this.ticket.precioCobrado =   this.ticket.precioReal- (this.ticket.precioReal*0.2);
    }else{
      this.ticket.precioCobrado = (this.ticket.precioReal);
    }
   }
   condicionEstado(est:boolean):boolean{
    if(this.ticket.precioReal != 0 && this.ticket.tipoEspectador != ""){
      est = true;
    }else{
      est = false;
    }
    return est;
   }
}
