const fs = require("fs");

fs.rename("arquivo.txt", "file.txt", (error) => {
    if (error) {
        console.log(error);
        return;
    }
})