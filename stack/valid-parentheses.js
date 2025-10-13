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
