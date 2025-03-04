import Vehiculo from "./Vehiculo.js";

class Moto extends Vehiculo{
    constructor(marca, modelo, cilindrada){
        super(marca, modelo)
        this.cilindrada = cilindrada
    }

    describir(){
        return `Esta moto es una ${this.marca} modelo ${this.modelo} con ${this.cilindrada}cc.`;
    }
}

export default Moto;