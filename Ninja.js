class Ninja {
    constructor(name){
        this.name=name;
        this.salud=10;
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
            * Salud: ${this.salud}\n
            * Fuerza: ${this.fuerza}\n
            * Velocidad: ${this.velocidad}
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

class SuperNinja extends Ninja {

    constructor(nombre){
        super(nombre);
        this.sabiduria=10;
        this.salud=200;
        this.velocidad=10;
        this.fuerza=10;
    }

    speakWisdom(){
        console.log("\nLo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.")
        super.drinkSake();
    }

}

const superSensei = new SuperNinja("Master Gabriel");
superSensei.speakWisdom();

superSensei.showStats();