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
  return alphabet.indexOf(symbol.toLowerCase()) + 1;
};

const parseCharStringToPosString = (str, alphabet) => {
  let symbolsPosition = '';

  for (let i = 0; i < str.length; i++) {
    if (alphabet.includes(str.charAt(i).toLowerCase())) {
      symbolsPosition += ` ${getAlphabetPosition(str.charAt(i), alphabet)}`;
    }
  }

  console.log(symbolsPosition.trim());
  return symbolsPosition.trim();
}

parseCharStringToPosString(someString, symbolsArray);