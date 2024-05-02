import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Palabra } from '../../models/palabra';
import { CommonModule } from '@angular/common';
import { style } from '@angular/animations';

@Component({
  selector: 'app-punto2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto2.component.html',
  styleUrl: './punto2.component.css'
})
export class Punto2Component {
  bancoPalabras:Array<Palabra> = [
    new Palabra("assets/images/manzana.png","manzana",0,3,4,7,3),
    new Palabra("assets/images/banana.png", "banana", 0, 3, 3, 6, 3),
    new Palabra("assets/images/casa.png", "casa", 0, 2, 2, 4, 2),
    new Palabra("assets/images/dado.png", "dado", 0, 2, 2, 4, 2),
    new Palabra("assets/images/elefante.png", "elefante", 0, 4, 4, 8, 3),
    new Palabra("assets/images/fresa.png", "fresa", 0, 2, 3, 5, 2),
    new Palabra("assets/images/gato.png", "gato", 0, 2, 2, 4, 2),
    new Palabra("assets/images/helado.png", "helado", 0, 3, 3, 6, 3),
    new Palabra("assets/images/iglesia.png", "iglesia", 0, 4, 3, 7, 3),
    new Palabra("assets/images/jirafa.png", "jirafa", 0, 3, 3, 6, 3)
  ];

  cajaJuego!: HTMLElement | null;

  generarPalabraAleatoria():string{
    let nom:string = this.bancoPalabras[Math.floor(Math.random() * (this.bancoPalabras.length))].nombre;
    console.log(nom);
    return nom;
  }
  
  ocultarModal(): void{
    this.cajaJuego = document.getElementById("juego");
    this.cajaJuego!.style.display = "none";
  }
}
