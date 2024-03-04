const calculateNumber = (type, a, b) => {
  a = Math.round(a);
  b = Math.round(b);
  if (a === 'SUM') {
    return eval(a + b);
  }
  if (a === 'SUBTRACT') {
    return eval(a - b);
  }
  if (a === 'DEVIDE') {
    if (b === 0){
      return 'Error';
    }
    return eval(a / b);
  }
  return 'Error';
}

module.exports = calculateNumber;

