// Sincrono: uma linha espera o término da anterior.
// Assincrono: uma linha não espera o término da anterior.

const fs = require("fs");

console.log("Antes");

fs.writeFile("arquivo.txt", "Grêmio Campeão Gaúcho 20232!", () => {
    setTimeout(() => {
        console.log("Caxias segundo colocado no campeonato Gaúcho 2023!");
    }, 5000);
});

console.log("Depois");