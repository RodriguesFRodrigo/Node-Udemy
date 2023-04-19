const _ = require("lodash");

const a = [1, 2, 4, 5, 6, 7, 9];
const b = [9, 8, 6, 5, 4, 3, 2];

const diff = _.difference(a, b);

console.log(diff);