/* ----- Event Emitter ----- */
/* Se comporta como eventos no navegador */
/* Podemos ativar o código em alguns pontos da aplicação */
/* Core module events */

// EventEmitter é uma classe
const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("start", () => {
    console.log("Durante");
});

console.log("Antes");

eventEmitter.emit("start");

console.log("Depois");