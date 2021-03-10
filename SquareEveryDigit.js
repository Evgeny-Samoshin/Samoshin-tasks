"use strict"

let someDigit = 9119;

const squareEveryDigit = (digits) => {
  console.log(
    digits.toString()
      .split('')
      .map((item) => {
        return item ** 2;
      }).join('')
  );
};

squareEveryDigit(someDigit);

// Через паттерн Модуль
let number = 9119;

const squareEveryDigitModule = ((num) => {
  let degre = 2;

  return {
    run: (num) => {
      console.log(
        num.toString()
          .split('')
          .map(item => item ** degre)
          .join('')
      );
    }
  }
})()

squareEveryDigitModule.run(number)