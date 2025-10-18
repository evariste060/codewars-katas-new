/* this function return an array concerning the following condition
if three input are give  we return the number between first one and last where the middle is step
if two are given we return array of number between these two where step is one
if one input is given we return the number from one two that number */
const range = (a, b, c) => {
  let start, end, step;

  if (b === undefined && c === undefined) {
    start = 1;
    end = a;
    step = 1;
  } else if (c === undefined) {
    start = a;
    end = b;
    step = 1;
  } else {
    start = a;
    end = c;
    step = b;
  }

  const result = [];
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;
};