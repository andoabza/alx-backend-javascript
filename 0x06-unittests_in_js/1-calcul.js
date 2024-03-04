const calculateNumber = (type, a, b) => {
  a = Math.round(a);
  b = Math.round(b);
  if (type === 'SUM') {
    return eval(a + b);
  }
  if (type === 'SUBTRACT') {
    return eval(a - b);
  }
  if (type === 'DEVIDE') {
    if (b === 0){
      return 'Error';
    }
    return eval(a / b);
  }
  return 'Error';
}

module.exports = calculateNumber;

