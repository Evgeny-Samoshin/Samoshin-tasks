"use strict"

let startPositionInUTF16 = 97;
let quantitySymbols = 26;
let someString = "The sunset sets at twelve o' clockaaaa.";

const getSymbolsArray = (start, count) => {
  let arr = [];

  while (count > 0) {
    count--;
    arr.push(String.fromCharCode(start++))
  }

  return arr;
};

let symbolsArray = getSymbolsArray(startPositionInUTF16, quantitySymbols);

const getAlphabetPosition = (symbol, alphabet) => {
  return alphabet.indexOf(symbol) + 1;
};

const parseCharStringToPosString = (str, alphabet) => {
  let symbolsPosition = '';
  let lowerCaseString = str.toLowerCase();
  let length = lowerCaseString.length;

  for (let i = 0; i < length; i++) {
    if (alphabet.includes(lowerCaseString.charAt(i))) {
      symbolsPosition += ` ${getAlphabetPosition(lowerCaseString.charAt(i), alphabet)}`;
    }
  }

  console.log(symbolsPosition.trim());
  return symbolsPosition.trim();
}

parseCharStringToPosString(someString, symbolsArray);