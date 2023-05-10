const fs = require("fs");

fs.stat("arquivo.txt", (error, stats) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log(stats.isFile());
    console.log(stats.isDirectory());
    console.log(stats.ctime());
    console.log(stats.size());
})