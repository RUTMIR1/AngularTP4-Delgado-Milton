import { PrefixNot } from "@angular/compiler";

export class Pregunta {
    id: number;
    preguntaA:number;
    preguntaB:number;
    preguntaC:number;
    preguntaD:number;
    titulo: string;
    respuesta: number;
    estado: boolean = false;

    constructor(id: number, preguntaA:number, preguntaB:number, preguntaC:number, preguntaD:number, titulo:string
        ,respuesta:number) { 
        this.id = id;
        this.preguntaA = preguntaA;
        this.preguntaB = preguntaB;
        this.preguntaC = preguntaC;
        this.preguntaD = preguntaD;
        this.titulo = titulo;
        this.respuesta = respuesta;
    }
}
