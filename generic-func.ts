function genericFunction<T>(arg : T) : T[] {
  let retorno : T[] = [];
  retorno.push(arg);
  return retorno;
}

let stringFromGenericFunction = genericFunction<string>("TESTE!!!");

console.log(stringFromGenericFunction[0]);

let numberFromGenericFunction = genericFunction(0000);

console.log(numberFromGenericFunction[0]);
