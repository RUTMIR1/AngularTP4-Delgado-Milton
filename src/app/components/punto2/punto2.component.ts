import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Palabra } from '../../models/palabra';
import { CommonModule } from '@angular/common';
import { style } from '@angular/animations';
import { FormsModule, NgForm } from '@angular/forms';
import { Pregunta } from '../../models/pregunta';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-punto2',
  standalone: true,
  imports: [CommonModule, FormsModule, ModalComponent],
  templateUrl: './punto2.component.html',
  styleUrl: './punto2.component.css'
})
export class Punto2Component implements OnInit {
  palabra!:Palabra;
  cajaJuego!: HTMLElement | null;
  preguntas:Array<Array<Pregunta>> = [];
  bancoPalabras:Array<Palabra>;
  numeracion:number;
  respuesta!:Pregunta;
  listaRespuesta!:Array<number>;
  nom:string = "punto2";
  estado: boolean = false;
  condicion:boolean = false;
  emitidas: number = 0;

  constructor(){
    this.palabra = new Palabra(0,"","",0,0,0,0,0,[]);
    this.numeracion = 0;
    this.bancoPalabras= [
      new Palabra(0,"assets/images/manzana.png","manzana",0,3,4,3,7,this.generarListaPreguntas()),
      new Palabra(0,"assets/images/banana.png", "banana", 0, 3, 3, 3, 6,this.generarListaPreguntas()),
      new Palabra(0,"assets/images/casa.png", "casa", 0, 2, 2, 2, 4,this.generarListaPreguntas()),
      new Palabra(0,"assets/images/dado.png", "dado", 0, 2, 2, 2, 4,this.generarListaPreguntas()),
      new Palabra(0,"assets/images/elefante.png", "elefante", 0, 4, 4, 4, 8,this.generarListaPreguntas()),
      new Palabra(0,"assets/images/fresa.png", "fresa", 0, 2, 3, 2, 5,this.generarListaPreguntas()),
      new Palabra(0,"assets/images/gato.png", "gato", 0, 2, 2, 2, 4,this.generarListaPreguntas()),
      new Palabra(0,"assets/images/helado.png", "helado", 0, 3, 3, 3, 6,this.generarListaPreguntas()),
      new Palabra(0,"assets/images/iglesia.png", "iglesia", 0, 4, 3, 3, 7,this.generarListaPreguntas()),
      new Palabra(0,"assets/images/jirafa.png", "jirafa", 0, 3, 3, 3, 6,this.generarListaPreguntas())
    ];
    this.agregarValores();
    this.bancoPalabras = this.ordenarAleatorio(this.bancoPalabras);
    this.noRepetidos();
  }

  ordenarAleatorio(lista:Array<Palabra>):Array<Palabra>{
    let nuevaLista:Array<Palabra>=[];
    let guardo:string;
    for(let i = 0; i < 8; i++){
      let aleat:string = this.generarPalabraAleatoria();
      for(let j =0;j < lista.length; j++){
        if( lista[j].nombre == aleat){
          lista[j].identificador = i;
          if(i==0){
            lista[j].estado = true;
          }
          let pal:Palabra = new Palabra(lista[j].identificador,lista[j].imagen
            ,lista[j].nombre,lista[j].valor,lista[j].vocal,lista[j].constante,
            lista[j].silaba,lista[j].letra,lista[j].preguntas);
            pal.estado = lista[j].estado;
          nuevaLista.push(pal);
          lista[j].nombre = "";
          j = lista.length;
        }
      }
    }
    return nuevaLista;
  }

  mostrarJuego(id:number):void{
    this.emitidas = 0;
    if(id >= 7){
      this.registrarRespuesta(this.bancoPalabras);
      this.estado = true;
    }else{
      this.bancoPalabras[id].estado = false;
      this.bancoPalabras[id+1].estado = true;
    }
  }

  agregarValores():void{
    for(let i=0 ; i < 10 ; i++) {
      let listaValores:Array<number> = [this.bancoPalabras[i].vocal, this.bancoPalabras[i].constante,
    this.bancoPalabras[i].silaba, this.bancoPalabras[i].letra];
      for(let j = 0; j < 4; j++){
        let numRandom: number = Math.floor(Math.random()*4);
        switch(numRandom) {
          case 0:
            this.bancoPalabras[i].preguntas[j].preguntaA= listaValores[j];
          break;
          case 1:
            this.bancoPalabras[i].preguntas[j].preguntaB= listaValores[j];
          break;
          case 2:
            this.bancoPalabras[i].preguntas[j].preguntaC= listaValores[j];
          break;
          case 3:
            this.bancoPalabras[i].preguntas[j].preguntaD= listaValores[j];
          break;
        }
      }
    }
  }
  ngOnInit(): void {

  }
  generarListaPreguntas():Array<Pregunta>{
    let preguntas = [
      new Pregunta(this.aumentarNumeracion(),this.generarNumero(),this.generarNumero(),this.generarNumero(),this.generarNumero(),"Vocales",0),
      new Pregunta(this.aumentarNumeracion(),this.generarNumero(),this.generarNumero(),this.generarNumero(),this.generarNumero(),"Constantes",0),
      new Pregunta(this.aumentarNumeracion(),this.generarNumero(),this.generarNumero(),this.generarNumero(),this.generarNumero(),"Silabas",0),
      new Pregunta(this.aumentarNumeracion(),this.generarNumero(),this.generarNumero(),this.generarNumero(),this.generarNumero(),"Letras",0),
    ];
    return preguntas;
  }

  generarPalabraAleatoria():string{
    let nom:string = "";
    while(nom == ""){
      nom = this.bancoPalabras[Math.floor(Math.random() * (this.bancoPalabras.length))].nombre;
    }
    console.log(nom);
    return nom;
  }
  
  ocultarModal(): void{
    this.cajaJuego = document.getElementById("juego");
    this.cajaJuego!.style.display = "none";
  }

  generarNumero():number{
    return Math.floor((Math.random() * 15)+1);
  }

  aumentarNumeracion():number{
    this.numeracion +=1;
    console.log(this.numeracion);
    return this.numeracion;
  }

  registrarRespuesta(lista:Array<Palabra>):void{
    for(let e of lista){
      for(let j of e.preguntas){
          switch(j.titulo){
            case "Vocales":
                 if(j.respuesta == e.vocal){
                   e.valor +=1;
                 }
              break;
            case "Constantes":
                  if(j.respuesta == e.constante){
                    e.valor +=1;
                  }
              break;
            case "Silabas":
                  if(j.respuesta == e.silaba){
                    e.valor +=1;
                  }
              break;
            case "Letras":
                  if(j.respuesta == e.letra){
                    e.valor +=1;
                  }
              break;
          }
      }
    }
  }
  cambiarCondicion():boolean{
    if(this.emitidas == 4){
      return false;
    }else{
      return true;
    }
  }
  aumentarEmitidas():void{
    this.emitidas = this.emitidas +1;
  }

  noRepetidos():void{
    for(let e of this.bancoPalabras){
      for(let elem of e.preguntas){
        while(elem.preguntaA == elem.preguntaB || elem.preguntaA == elem.preguntaC || elem.preguntaA == elem.preguntaD ){
           elem.preguntaA = this.generarNumero(); 
        }
        while(elem.preguntaB == elem.preguntaA || elem.preguntaB == elem.preguntaC || elem.preguntaB == elem.preguntaD ){
          elem.preguntaB = this.generarNumero(); 
       }
       while(elem.preguntaC == elem.preguntaA || elem.preguntaC == elem.preguntaB || elem.preguntaC == elem.preguntaD ){
        elem.preguntaC = this.generarNumero(); 
       }
       while(elem.preguntaD == elem.preguntaB || elem.preguntaD == elem.preguntaC || elem.preguntaD == elem.preguntaA ){
        elem.preguntaA = this.generarNumero(); 
       }
      }
    }
  }
}