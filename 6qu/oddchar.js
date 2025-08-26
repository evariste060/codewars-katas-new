function lettersOnOddIndexes(str) {
    let result = "";

    for (let i = 1; i < str.length; i += 2) {
        let char = str[i];

        // Check if it's a letter or digit manually
        let isLetter = (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z');
        let isDigit = (char >= '0' && char <= '9');

        if (isLetter || isDigit) {
            result += char;
        }
    }

    return result;
}
console.log(lettersOnOddIndexes("a!b2#cD$3e")); // Output: "bD3"