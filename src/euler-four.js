const fnDir1 = (x, y) => Math.pow(x, 2) + y;

class Row {
  constructor(Xi, Yi, f, hf) {
    this.Xi = Xi;
    this.Yi = Yi;
    this.f = f;
    this.hf = hf;
  }
}

const calculateFs = (fn, x, y, h) => {
  const f = fn(x, y);
  const hf = h * f;

  return [f, hf];
};

const calculateRatios = (fn, x, y, h) => {
  const k1 = fn(x, y);
  const k2 = fn(x + h / 2, y + (h * k1) / 2);
  const k3 = fn(x + h / 2, y + (h * k2) / 2);
  const k4 = fn(x + h, y + h * k3);

  return [k1, k2, k3, k4];
};

const eulerFour = (fn, initialValue, range, steps) => {
  const [a, b] = range;
  const [x, y] = initialValue;
  const h = (b - a) / steps;
  const [initialF, initialHF] = calculateFs(fn, x, y, h);
  const initialRow = new Row(x, y, initialF, initialHF);
  const result = [initialRow];

  for (let i = 1; i <= steps; i++) {
    const prevResult = result[i - 1];
    const [k1, k2, k3, k4] = calculateRatios(
      fn,
      prevResult.Xi,
      prevResult.Yi,
      h
    );
    const Xi = h * i;
    const Yi = prevResult.Yi + (h * (k1 + 2 * k2 + 2 * k3 + k4)) / 6;
    const [f, hf] = calculateFs(fn, Xi, Yi, h);
    const row = new Row(Xi, Yi, f, hf);

    result.push(row);
  }

  return {
    drawTableInConsole: () => console.table(result),
  };
};

// eulerFour(fnDir1, [0, 1], [0, 0.5], 5).drawTableInConsole();

module.exports = {
  eulerFour,
};
