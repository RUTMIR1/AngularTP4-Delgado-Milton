export class Palabra {
    imagen: string;
    nombre: string;
    valor: number;
    vocal: number;
    constante: number;
    letra: number;
    silaba: number;
    estado: boolean = false;

    constructor(imagen:string,nombre:string,valor:number,vocal:number,constante:number,
        letra:number,silaba:number){
            this.imagen = imagen;
            this.nombre = nombre;
            this.valor = valor;
            this.vocal = vocal;
            this.constante = constante;
            this.letra = letra;
            this.silaba = silaba;
        }
}
