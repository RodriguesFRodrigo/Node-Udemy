// import * as fs from "fs";

const fs = require("fs");

fs.readFile("arquivo.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("Erro ao abrir o arquivo!");
    }

    console.log(data);
});