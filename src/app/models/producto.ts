export class Producto {
    nombre!: String;
    descripcion!: String;
    precio!: Number;
    imagen!: String;

    constructor(nombre:String , descripcion:String , precio:Number , imagen:String){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio; 
        this.imagen = imagen;
    }
}
