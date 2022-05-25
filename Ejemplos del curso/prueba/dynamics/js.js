function suma (num1, par2, num2 = 2, ...masPars)
{
    console.log('Estoy en una función');
    console.log(masPars[2]);
    return num1+num2;
}
 let retorno = suma(3, 7, 'Hola', 'soy', 'mas parametros', 7);

 console.log(retorno);