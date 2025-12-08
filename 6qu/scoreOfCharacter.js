function lettersToNumbers(s) {
  return [...s].reduce((sum, element) => {
    if (element >= "0" && element <= "9") {
      sum += Number(element);
    }
    else if (element >= "a" && element <= "z") {
      sum += element.charCodeAt(0) - 96;
    }
    else if (element >= "A" && element <= "Z") {
      sum += (element.charCodeAt(0) - 64) * 2;
    }
    return sum;
  }, 0);
}

console.log(lettersToNumbers("I Love You"));//170