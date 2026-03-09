const dailyTemperatures = (temperatures) => {
        const res = new Array(temperatures.length).fill(0);
        const stack = []; // pair: [temp, index]

        for (let i = 0; i < temperatures.length; i++) {
            const t = temperatures[i];
            while (stack.length > 0 && t > stack[stack.length - 1][0]) {
                const [stackT, stackInd] = stack.pop();
                res[stackInd] = i - stackInd;
            }
            stack.push([t, i]);
        }
        return res;
    }


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

const generateParenthesis = (n) => {
  const result = [];

  function backtrack(current, open, close) {
    if (current.length === n * 2) {
      result.push(current);
      return;
    }

    if (open < n) backtrack(current + '(', open + 1, close);
    if (close < open) backtrack(current + ')', open, close + 1);
  }

  backtrack('', 0, 0);
  return result;
}

class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        val = Math.min(
            val,
            this.minStack.length === 0
                ? val
                : this.minStack[this.minStack.length - 1],
        );
        this.minStack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

const isValid = (s) => {
  const map = new Map([
    [')', '('],
    [']', '['],
    ['}', '{']
  ]);
  
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (map.has(char)) {
      // If it's a closing bracket
      if (stack[stack.length - 1] === map.get(char)) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      // If it's an opening bracket
      stack.push(char);
    }
  }

  return stack.length === 0;
}
