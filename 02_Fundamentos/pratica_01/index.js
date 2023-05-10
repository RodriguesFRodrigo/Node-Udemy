const minimist = require("minimist");

// Externo
const args = minimist(process.argv.slice(2));

// Interno
const soma = require("./soma").soma;

const a = args["a"];
const b = args["b"];

soma(a, b);

// Exemplo de como passar os argumentos: --a=27 --b=28