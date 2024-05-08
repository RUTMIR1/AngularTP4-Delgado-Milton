export class Ticket {
    id:number;
    dni:number;
    precioReal:number;
    tipoEspectador:string;
    fechaCobro:Date;
    precioCobrado: number;

    constructor(dni?:number, tipoEspectador?:string, fechaCobro?:Date) {
        this.id = 0;
        this.dni = dni?? 0;
        this.precioReal = 5000;
        this.tipoEspectador = tipoEspectador?? "";
        this.fechaCobro = fechaCobro?? new Date();
        this.precioCobrado = 5000;
    }
}
