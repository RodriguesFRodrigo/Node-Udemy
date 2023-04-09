/*
    Lendo entrada de dados
    Readline, Core Module
*/

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question("What is your favorite language? ", (language => {
    if (language.toLowerCase() === "python") {
        console.log("Python is horrible! -_- xD!");
    } else {
        console.log(`${language} is cool!`);
    }
}));