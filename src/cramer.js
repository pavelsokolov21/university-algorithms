const math = require("mathjs");

const cramer = (matrix, free) => {
  const mainDet = math.det(matrix);
  if (!mainDet) return;
  const res = [];
  for (let i = 0; i < matrix.length; i++) {
    const modifiedRow = matrix.map((item, index) => {
      const copiedItem = [...item];
      copiedItem[i] = free[index];
      return copiedItem;
    });
    res.push(math.det(modifiedRow) / mainDet);
  }
  return res;
};

const init = [
  [0, 1, 5, 10, 15, 25],
  [-4, 0, 15, 30, 45, 60],
];
const MATRIX_LENGTH = 2;
const ROW_LENGTH = 6;

const phi0 = () => 1;
const phi1 = (x) => x;

const phiFuncs = [phi0, phi1];

const gram = [
  [0, 0],
  [0, 0],
];
const free = [0, 0];

// Fill Gram matrix
for (let i = 0; i < MATRIX_LENGTH; i++) {
  for (let j = 0; j < MATRIX_LENGTH; j++) {
    for (let k = 0; k < ROW_LENGTH; k++) {
      gram[i][j] += phiFuncs[i](init[0][k]) * phiFuncs[j](init[0][k]);
    }
  }
}

// Fill free column
for (let i = 0; i < MATRIX_LENGTH; i++) {
  for (let j = 0; j < ROW_LENGTH; j++) {
    free[i] += phiFuncs[i](init[0][j]) * init[1][j];
  }
}

console.log(cramer(gram, free));
