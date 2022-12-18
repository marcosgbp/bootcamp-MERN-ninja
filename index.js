class Ninja {
    constructor(name, salud){
        this.name=name;
        this.salud=salud;
        this.velocidad=3;
        this.fuerza=3;     
    }

    //Métodos
    sayName(){
        console.log(`Soy el ninja cinturón negro ${this.name}`);
    }
    showStats(){
        console.log(`
            * Nombre: ${this.name}\n 
            * Fuerza: ${this.fuerza}\n
            * Velocidad: ${this.velocidad}\n
            * Salud: ${this.salud}
        `);
    }
    drinkSake(){
        console.log("Aumentando salud...");
        this.salud+=10;
        console.log(`Salud actual: ${this.salud}`);
    }
    
}

const ninja1 = new Ninja("Marcos Benítez",3);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
