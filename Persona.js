
class Persona {
    constructor (nombre, dni) {
        this.nombre = nombre;
        this.dni = dni;
    }

    ObtenerInformacion() {
        return `{nombre: ${this.nombre}, dni: ${this.dni}}`
    }
}

module.exports = Persona