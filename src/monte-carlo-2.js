const fn = (x, y) => {
  return Math.pow(x, 2) + Math.pow(y, 2);
};

const getRandomNum = (min, max) => {
  return Math.random() * (max - min) + min;
};

const isFunction = (arg) => typeof arg === "function";

const calculateMonteCarloGeom2 = (fn, rangeX, rangeY, dotsCount = 10000) => {
  const [a, b] = rangeX;
  const [c, d] = rangeY;
  let result = 0;

  for (let i = 0; i < dotsCount; i++) {
    const randomNumX = Math.random();
    const randomNumY = Math.random();
    const leftY = isFunction(c) ? c(randomNumX) : c;
    const rightY = isFunction(d) ? d(randomNumX) : d;
    const condition =
      randomNumX >= a &&
      randomNumX <= b &&
      randomNumY >= leftY &&
      randomNumY <= rightY;

    if (condition) {
      result += fn(randomNumX, randomNumY);
    }
  }

  return result / dotsCount;
};

console.log(
  calculateMonteCarloGeom2(
    fn,
    [0.5, 1],
    [
      0,
      function (x) {
        return 2 * x - 1;
      },
    ]
  )
);
