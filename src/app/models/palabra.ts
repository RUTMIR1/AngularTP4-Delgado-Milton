import { Pregunta } from "./pregunta";

export class Palabra {
    identificador: number;
    imagen: string;
    nombre: string;
    valor: number;
    vocal: number;
    constante: number;
    silaba: number;
    letra: number;
    estado: boolean = false;
    preguntas: Array<Pregunta>;


    constructor(identificador:number, imagen:string,nombre:string,valor:number,vocal:number,constante:number,
        silaba:number, letra:number, preguntas:Array<Pregunta>){
            this.identificador = identificador;
            this.imagen = imagen;
            this.nombre = nombre;
            this.valor = valor;
            this.vocal = vocal;
            this.constante = constante;
            this.silaba = silaba;
            this.letra = letra;
            this.preguntas = preguntas;
        }
}
