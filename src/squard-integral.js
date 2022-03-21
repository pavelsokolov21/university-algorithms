const fn = (x) => {
  return Math.pow(x, 2) * Math.exp(-x);
};

const squareIntegral = (fn, range, blocksCount = 1000) => {
  const [a, b] = range;
  const h = (b - a) / blocksCount;
  let count = 0;

  for (let i = 1; i <= blocksCount; i++) {
    const xCenter = a + (i - 1 / 2) * h;

    count += fn(xCenter);
  }

  return count * h;
};

// console.log(squareIntegral(fn, [0, 1]));

module.exports = {
  squareIntegral,
};
