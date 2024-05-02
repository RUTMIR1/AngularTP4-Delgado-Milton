export class Producto {
    nombre!: String;
    descripcion!: String;
    precio!: number;
    imagen!: String;
    estado: boolean = false;

    constructor(nombre:String , descripcion:String , precio:number , imagen:String){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio; 
        this.imagen = imagen;
    }
}
