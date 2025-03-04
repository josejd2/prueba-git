class Vehiculo{
    constructor(marca,modelo){
        this.marca = marca;
        this.modelo = modelo;
    }

    describir() {
        return `Este vehículo es un ${this.marca} modelo ${this.modelo}.`;
    }
}

export default Vehiculo;