export class Producto{
    constructor(id, nombre, stockAmount, fechaIngreso){
        this.id = id; 
        this.nombre = nombre;//obligatorio en post
        this.stockAmount = stockAmount;//obligatorio en post mayor a 0
        this.fechaIngreso = fechaIngreso;
    }
}