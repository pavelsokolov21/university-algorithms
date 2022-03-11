const fn = (x) => {
  return Math.pow(x, 2) * Math.exp(-x);
};

const generateX = (n, range) => {
  const [a, b] = range;
  const h = (b - a) / n;
  const arr = [];

  for (let i = 0; i <= n; i++) {
    const x = a + i * h;

    arr.push(x);
  }

  return arr;
};

const calculateBySimpson = (fn, range, n = 25) => {
  const [a, b] = range;
  const ratio = (b - a) / (3 * n);
  const generatedX = generateX(n, range);
  // The initial value should be f(a)
  let count = fn(a);

  for (let i = 0; i <= n; i++) {
    const x = generatedX[i];

    if (i % 2 === 0) {
      count += 4 * fn(x);
      continue;
    }

    if (i % 2 !== 0) {
      count += 2 * fn(x);
      continue;
    }

    if (i === n - 1) {
      count += fn(b);
      continue;
    }
  }

  return ratio * count;
};

console.log(calculateBySimpson(fn, [0, 1]));
