import { CommonModule } from '@angular/common';
import { Component, booleanAttribute } from '@angular/core';
import { Producto } from '../../models/producto';
import { ModalComponent } from '../modal/modal.component';
@Component({
  selector: 'app-punto1',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './punto1.component.html',
  styleUrl: './punto1.component.css'
})
export class Punto1Component {

  productos:Array<Producto> = [
    new Producto("Teclado","Teclado de buena calidad para gamer",7250.00,"assets/teclado.jpg"),
    new Producto("Teclado Comun","Teclado comun para trabajo",6000.00,"assets/tecladoOficina.jpg"),
    new Producto("Mouse", "Mouse de mucho dpi para juegos shooters",5000.00, "assets/mouse.jpg"),
    new Producto("Monitor", "Monitor de alta definición para gaming", 15000.00, "assets/monitor.jpg"),
    new Producto("Tarjeta Gráfica", "Tarjeta gráfica potente para juegos exigentes", 20000.00, "assets/tarjetaGrafica.jpeg"),
    new Producto("SSD", "Unidad de estado sólido para un rendimiento más rápido", 3000.00, "assets/ssd.jpg"),
    new Producto("Procesador", "Procesador de alto rendimiento para multitarea", 12000.00, "assets/procesador.jpg"),
    new Producto("Memoria RAM", "Memoria RAM de alta velocidad para mejorar el rendimiento", 8000.00, "assets/memoriaRam.jpeg"),
    new Producto("Placa Base", "Placa base de última generación con múltiples funciones", 18000.00, "assets/placaMadre.jpg"),
    new Producto("Fuente de Alimentación", "Fuente de alimentación de alta potencia y eficiencia", 6000.00, "assets/fuenteDeAlimentacion.jpg"),
    new Producto("Disco Duro SSD", "Disco duro de estado sólido para un almacenamiento rápido y confiable", 12000.00, "assets/discoSSD.jpg"),
    new Producto("Tarjeta Red", "Tarjeta de red para conexiones de cable coaxial", 10000.00, "assets/tarjetaDeRed.jpg")
  ];

  carrito:Array<Producto> = [];

  nom:string = "punto1";

  public agregarCarrito(producto:Producto):void{
    this.carrito.push(producto);
  }
  public generarEstado():boolean{
    return false;
  }
}
