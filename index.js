const Persona = require(`./Persona`);

console.info("Ejemplo de polimorfismo");

const f1 = new Persona(1, 43208610);
const rta = f1.ObtenerInformacion();
console.info(rta);

const f2 = new Persona(2, 14342453);
console.info(f2.ObtenerInformacion());
