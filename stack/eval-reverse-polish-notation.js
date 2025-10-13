const evalRPN = (tokens) => {
  const stack = [];

  // Map operator to function
  const ops = new Map([
    ['+', (a, b) => a + b],
    ['-', (a, b) => a - b],
    ['*', (a, b) => a * b],
    ['/', (a, b) => Math.trunc(a / b)], // truncate toward 0
  ]);

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (ops.has(token)) {
      // It's an operator
      const b = stack.pop();
      const a = stack.pop();
      const operation = ops.get(token);
      stack.push(operation(a, b));
    } else {
      // It's a number
      stack.push(Number(token));
    }
  }

  return stack.pop();
}
