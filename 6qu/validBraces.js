function validBraces(braces) {
  let stack = [];
  let pairs = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (let brace of braces) {
    
    if (brace === '(' || brace === '[' || brace === '{') {
      stack.push(brace);
    } 
    else {
      if (stack.pop() !== pairs[brace]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}