export class Producto {
    nombre: String;
    descripcion: String;
    valor: number;
    imagen: String;
    estado: boolean = false;

    constructor(nombre?:String , descripcion?:String , valor?:number , imagen?:String){
        this.nombre = nombre?? "";
        this.descripcion = descripcion?? "";
        this.valor = valor?? 0; 
        this.imagen = imagen?? "";
    }
}
