function sumOfDigits(n, m) {
  let sum = 0;
  const digitArr = n.toString().split('');
  for (let i = 0; i < m; i += 1) {
    sum += parseInt(digitArr.pop(), 10);
    digitArr.splice(4, 1);
  }
  return sum;
}

module.exports = sumOfDigits;
