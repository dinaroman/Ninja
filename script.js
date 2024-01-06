//NINJA
class Ninja {
    constructor(nombre, salud = 10, velocidad = 3, fuerza = 3) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }

    sayName() {
        console.log("El nombre del ninja es", this.nombre);
    }

    showStats() {
        console.log(`Nombre: ${this.nombre}, Fuerza: ${this.fuerza}, Velocidad: ${this.velocidad}, Salud: ${this.salud}`);
    }

    drinkSake() {
        this.salud += 10;
        console.log(`Se añadieron +10 de salud al ninja. Salud: ${this.salud}`);
    }
}

const ninja = new Ninja("Dina");

ninja.sayName();
ninja.showStats();
ninja.drinkSake();