function Power(base, power) {
  let result = 1;
  for (let i = 0; i < power; i++) {
    result = result * base;
  }

  return result;
}

console.log(Power(2, 3));
