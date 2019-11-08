function genericFunction(arg) {
    var retorno = [];
    retorno.push(arg);
    return retorno;
}
var stringFromGenericFunction = genericFunction("TESTE!!!");
console.log(stringFromGenericFunction[0]);
var numberFromGenericFunction = genericFunction(0000);
console.log(numberFromGenericFunction[0]);
