const path = require("path");

const customPath = "./documentos/folder/arq.pdf";

console.log(path.extname(customPath));
console.log(path.dirname(customPath));
console.log(path.basename(customPath));