function nthSmallest(...args) {
  const n = args.pop();
  return args.flat().sort((a, b) => a - b)[n - 1];
}