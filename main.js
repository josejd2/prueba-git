import Vehiculo from "./Vehiculo.js";
import Moto from "./Moto.js";

const v1 = new Vehiculo('Toyota', 'Corolla');
const m1 = new Moto('Honda', 'CBR600', 600);

console.log(v1.describir());
console.log(m1.describir());
