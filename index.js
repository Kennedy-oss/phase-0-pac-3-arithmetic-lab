const add = (a, b) => {
    return a + b;
  };
  const subtract = (a, b) => {
    return a - b;
  };
  const multiply = (a, b) => {
    return a * b;
  };
  function divide(a, b) {
    return a / b;
  }
  function increment(a) {
    return a + 1;
  }
  function decrement(a) {
    return a - 1;
  }
  
  function makeInt(a) {
    return parseInt(a, 10);
  }
  makeInt("124"); // returns 123
  makeInt("124.45"); // returns 123
  makeInt("Andrewkyalonzioki"); // returns NaN
  
  function preserveDecimal(a) {
    return parseFloat(a);
  }
  preserveDecimal(23.003);
  preserveDecimal("darn");