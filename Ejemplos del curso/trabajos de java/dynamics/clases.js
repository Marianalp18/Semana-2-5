class Animal
{
    constructor(nombreComun, esperanzaDeVida, gestacion, alimentacion, habitat, especie, vertebrado, nPatas, enPeligro)
    {
        this.nombreComun = nombreComun;
        this.esperanzaDeVida = esperanzaDeVida;
        this.gestacion = gestacion;
        this.alimentacion = alimentacion;
        this.habitat = habitat;
        this.Animal = Animal;
        this.enPeligro = enPeligro;
        this.especie = especie;
        this.nPatas = nPatas;
        this.vertebrado = vertebrado;
    };

        comer()
        {
            console.log('Este animal es' + this.alimentacion + 'y ya comió.');
        };
        crecer()
        {
            console.log(this.nombreComun + 'ha crecido');
        };
        moverse()
        {
            if(this.nPatas == 0 || this.habitat == 'acuatico')
                {
                    if(this.habitat == 'acuatico')
                    {
                        console.log(this.nombreComun + 'es acuatico, entonces se pone a nadar');
                    }
                    else if (this.habitat == 'terrestre')
                    {
                        console.log(this.nombreComun + 'es terrestre pero no tiene patas, entonces se pone a reptar');
                    }
                }
            else if(this.habitat == 'aereo')
            {
                console.log(this.nombreComun + 'puede volar, cuando lo necesite, volvera para descansar en la tierra uwu');
            }
            else if(this.habitat == 'terrestre')
            {
                console.log(this.nombreComun + 'se desplaza sobre la tierra');
            }
            else
            {
                console.log('No conocemos ese tipo de hábitat');
            }
        };
}

const ajolote = new Animal('Ajolote', 15, 'oviparo', 'carnivoro', 'acuatico', 'Ambystoma mexicanum', true,  4);
