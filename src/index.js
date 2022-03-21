const { eulerFour } = require("./euler-four");
const { squareIntegral } = require("./squard-integral");
const { trapezeIntegral } = require("./trapeze-integral");
const { calculateBySimpson } = require("./simpson");

const fn = (x, y) => -2 * x * y + x * Math.exp(-Math.pow(x, 2));

eulerFour(fn, [0, 1], [0, 2], 20).drawTableInConsole();

// const fn = (x) => Math.exp(x) + 1 / x;
// console.log(squareIntegral(fn, [1, 2], 5));
// console.log(trapezeIntegral(fn, [1, 2], 5));
// console.log(calculateBySimpson(fn, [1, 2], 5));
