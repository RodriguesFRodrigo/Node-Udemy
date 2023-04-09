/* ----- Argumentos ----- */

console.log(process.argv);

// Retorna uma cópia do array a partir do indice 2
let args = process.argv.slice(2);

console.log(args);
console.log(args[0].split("=")[1]);