export const myNumbers = [1, 2, 3, 4];
const animals = ['Panda', 'Bear', 'Eagle']; // Não disponível diretamente fora do módulo

export default function myLogger() { // Uma única exportação default por módulo
  console.log(myNumbers, animals);
}

export class Alligator {
  constructor() {
    // ...
  }
}

export { myNumbers, myLogger, Alligator } // Em uma única instrução

export { myNumbers as numbers, myLogger as logger, Alligato } // Com Alias