class tanque{
    constructor(nombre, vida, mana, ataque, armadura, habilidades){
        this.nombre = nombre;
        this.nombre = mana;
        this.vida =  vida;
        this.ataque = ataque;
        this.habilidades = habilidades;
        this.armadura = armadura;
        this.fuerza = "mago";
        this.fuerza2 = "asesino";
        this.multiplicador = this.vida + (this.vida * 24 / 100);
    }
    presentacion(){    
        console.log("Soy" + this.nombre + ", campeón de League of Legends");
        console.log("Mis grandiosas estadisticas son " + "vida:" + this.vida + ", maná:"+ this.mana + ", ataque:" + this.ataque);
    }
    comparacion(nombre){
        if(nombre instanceof tanque == true){
            console.log("La balanza está equilibrada, la victoria dependerá de tu habilidad y la de tu oponente");
        }
        if(nombre instanceof luchador == true){
            console.log("Tu personaje, " + this.nombre + ", tiene las de perder");
        }
        if(nombre instanceof tirador == true){
            console.log("Tu personaje, " + this.nombre + ", tiene las de perder");
        }
        if(nombre instanceof mago == true){
            console.log("Tu personaje, " + this.nombre + ", tiene las de ganar");
        }
        if(nombre instanceof asesino == true){
            console.log("Tu personaje, " + this.nombre + ", tiene las de ganar");
        }
    }
}

class asesino{
    constructor(nombre, vida, mana, ataque, habilidades, movilidad){
        this.nombre = nombre;
        this.nombre = mana;
        this.vida =  vida;
        this.ataque = ataque;
        this.habilidades = habilidades;
        this.movilidad = movilidad;
        this.fuerza = "tirador";
        this.fuerza2 = "mago";
        this.multi = this.vida + (this.vida * 95 / 100);
        this.multiAtaque = this.ataque + (this.vida * 30 / 100);
    }
    presentacion(){    
        console.log("Soy" + this.nombre + ", campeón de League of Legends");
        console.log("Mis grandiosas estadisticas son " + "vida:" + this.vida + ", maná:"+ this.mana + ", ataque:" + this.ataque);
    }
    comparacion(nombre){
        if (nombre instanceof asesino == true){
            console.log("La balanza está equilibrada, la victoria dependerá de tu habilidad y la de tu oponente");
        }
        if (nombre instanceof tanque == true){
            console.log("Tu personaje, " + this.nombre + ", tiene las de perder");
        }
        if (nombre instanceof luchador == true){
            console.log("Tu personaje, " + this.nombre + ", tiene las de perder");
        } 
        if (nombre instanceof mago == true){
            console.log("Tu personaje, " + this.nombre + ", tiene las de ganar");
        }
        if (nombre instanceof tirador == true){
            console.log("Tu personaje, " + this.nombre + ", tiene las de ganar");
        }
    }
}

class luchador{
    constructor(nombre, vida, mana, ataque, habilidades){
        this.nombre = nombre;
        this.nombre = mana;
        this.vida =  vida;
        this.ataque = ataque;
        this.habilidades = habilidades;
        this.fuerza = "tanque";
        this.fuerza2 = "asesino";
        this.multiplicador = this.vida + (this.vida * 15 / 100);
        this.multiAtaque = this.ataque + (this.vida * 15 / 100);
    }
    presentacion(){    
        console.log("Soy" + this.nombre + ", campeón de League of Legends");
        console.log("Mis grandiosas estadisticas son " + "vida:" + this.vida + ", maná:"+ this.mana + ", ataque:" + this.ataque);
    }
    comparacion(nombre){
        if (nombre instanceof luchador == true){
            console.log("La balanza está equilibrada, la victoria dependerá de tu habilidad y la de tu oponente");
        }
        if (nombre instanceof tanque == true){
            console.log("Tu personaje, " + this.nombre + ", tiene las de ganar");
        }
        if (nombre instanceof mago == true){
            console.log("Tu personaje, " + this.nombre + ", tiene las de perder");
        }
        if (nombre instanceof asesino == true){
            console.log("Tu personaje, " + this.nombre + ", tiene las de ganar");
        }
        if (nombre instanceof tirador == true){
            console.log("Tu personaje, " + this.nombre + ", tiene las de perder");
        } 
    }
}

class tirador{
    constructor(nombre, vida, mana, ataque, distancia, habilidades){
        this.nombre = nombre;
        this.nombre = mana;
        this.vida =  vida;
        this.ataque = ataque;
        this.habilidades = habilidades;
        this.distancia = distancia;
        this.fuerza = "luchador";
        this.fuerza = "asesino";
        this.multiAtaque = this.ataque + (this.vida * 24 / 100);
    };
    presentacion(){    
        console.log("Soy" + this.nombre + ", campeón de League of Legends");
        console.log("Mis grandiosas estadisticas son " + "vida:" + this.vida + ", maná:"+ this.mana + ", ataque:" + this.ataque);
    }
    comparacion(nombre){
        if (nombre instanceof tirador == true){
            console.log("La balanza está equilibrada, la victoria dependerá de tu habilidad y la de tu oponente");
        }
        if (nombre instanceof tanque == true){
            console.log("Tu personaje, " + this.nombre + ", tiene las de ganar");
        }
        if (nombre instanceof mago == true){
            console.log("Tu personaje, " + this.nombre + ", tiene las de perder");
        }
        if (nombre instanceof luchador == true){
            console.log("Tu personaje, " + this.nombre + ", tiene las de ganar");
        }
        if (nombre instanceof asesino == true){
            console.log("Tu personaje, " + this.nombre + ", tiene las de perder");
        } 
    }
}

class mago{
    constructor(nombre, vida, mana, ataque, habilidades, distancia){
        this.nombre = nombre;
        this.nombre = mana;
        this.vida =  vida;
        this.ataque = ataque;
        this.habilidades = habilidades;
        this.distancia = distancia;
        this.fuerza = "luchador";
        this.fuerza = "asesino";
        this.multiAtaque = this.ataque + (this.vida * 24 / 100);
    }
    presentacion(){    
        console.log("Soy" + this.nombre + ", campeón de League of Legends");
        console.log("Mis grandiosas estadisticas son " + "vida:" + this.vida + ", maná:"+ this.mana + ", ataque:" + this.ataque);
    }
    comparacion(nombre){
        if (nombre instanceof mago == true){
            console.log("La balanza está equilibrada, la victoria dependerá de tu habilidad y la de tu oponente");
        }
        if (nombre instanceof tirador == true){
            console.log("Tu personaje, " + this.nombre + ", tiene las de ganar");
        }
        if (nombre instanceof tanque == true){
            console.log("Tu personaje, " + this.nombre + ", tiene las de perder");
        }
        if (nombre instanceof asesino == true){
            console.log("Tu personaje, " + this.nombre + ", tiene las de ganar");
        }
        if (nombre instanceof luchador == true){
            console.log("Tu personaje, " + this.nombre + ", tiene las de perder");
        } 
    }
}

const jugador = new tanque("Sabrina", 450, 100, 75, true, "Volar");
console.log (jugador);
jugador.presentacion();
jugador.comparacion();

const jugador2 = new luchador ();
console.log (jugador2);
jugador2.presentacion();
jugador2.comparacion();

const jugador3 = new tirador ();
console.log (jugador3);
jugador3.presentacion();
jugador3.comparacion();

const jugador4 = new mago ();
jugador4.presentacion();
jugador4.comparacion();

const jugador5 = new mago ();
console.log (jugador5);
jugador5.presentacion();
jugador5.comparacion();