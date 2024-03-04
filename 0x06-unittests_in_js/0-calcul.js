/*calculateNumber: a function that calcilate numbers*/
const calculateNumber = (a, b) => {
  a = Math.round(a);
  b = Math.round(b);
  return eval(a + b);
}

module.exports = calculateNumber;
