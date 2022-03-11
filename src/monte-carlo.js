const fn = (x) => {
  return Math.pow(x, 2) * Math.exp(-x);
};

const getRandomNum = (min, max) => {
  return Math.random() * (max - min) + min;
};

const generateDots = (count, range) => {
  const [a, b] = range;
  const arr = [];

  for (let i = 0; i < count; i++) {
    const randomInt = getRandomNum(a, b);

    arr.push(randomInt);
  }

  return arr;
};

const calculateMonteCarloAlg = (fn, range, dotsCount = 10000) => {
  const [a, b] = range;
  const ratio = (b - a) / dotsCount;
  let count = 0;

  for (let i = 0; i < dotsCount; i++) {
    const randomNum = getRandomNum(a, b);

    count += fn(randomNum);
  }

  return count * ratio;
};

const calculateMonteCarloGeom = (fn, rangeX, rangeY, dotsCount = 1000) => {
  const [a, b] = rangeX;
  const [c, d] = rangeY;
  const sPar = (b - a) * (d - c);
  let entriesDots = 0;

  for (let i = 0; i < dotsCount; i++) {
    const randomNumX = getRandomNum(a, b);
    const randomNumY = getRandomNum(c, d);
    const fnY = fn(randomNumX);

    if (fnY >= randomNumY) {
      entriesDots++;
    }
  }

  return sPar * (entriesDots / dotsCount);
};

console.log(calculateMonteCarloGeom(fn, [0, 1], [0, 1]));
