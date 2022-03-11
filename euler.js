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

const euler = (fn, initialValue, range, steps) => {
  const [a, b] = range;
  const [x, y] = initialValue;
  const h = (b - a) / steps;
  const [initialF, initialHF] = calculateFs(fn, x, y, h);
  const initialRow = new Row(x, y, initialF, initialHF);
  const result = [initialRow];

  for (let i = 1; i <= steps; i++) {
    const prevResult = result[i - 1];
    const Xi = h * i;
    const Yi = prevResult.Yi + prevResult.hf;
    const [f, hf] = calculateFs(fn, Xi, Yi, h);
    const row = new Row(Xi, Yi, f, hf);

    result.push(row);
  }

  return {
    drawTableInConsole: () => console.table(result),
  };
};

euler(fnDir1, [0, 1], [0, 0.5], 10).drawTableInConsole();
