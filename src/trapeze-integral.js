const fn = (x) => {
  return Math.pow(x, 2) * Math.exp(-x);
};

const generateX = (blocksCount, a, h) => {
  const arr = [];

  for (let i = 0; i < blocksCount; i++) {
    const subArr = [];

    for (let j = 0; j < 2; j++) {
      const x = a + i * h;

      subArr.push(x);
    }

    arr.push(subArr);
  }

  return arr;
};

const gAprox = (h, fn, range) => {
  const [a, b] = range;
  const x = (b - a) / 2;

  return fn(a) + ((fn(b) - fn(a)) / h) * (x - a);
};

const trapezeIntegral = (fn, range, blocksCount = 100) => {
  const [a, b] = range;
  const h = (b - a) / blocksCount;
  const generatedX = generateX(blocksCount, a, h);
  let count = 0;

  generatedX.forEach((coords) => {
    count += gAprox(h, fn, coords);
  });

  return count * h;
};

module.exports = {
  trapezeIntegral,
};
