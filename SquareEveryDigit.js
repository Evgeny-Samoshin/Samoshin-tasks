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

const squareEveryDigitModule = (() => {
  let someDigit = 9119;

  return {
    run: () => {
      console.log(
        someDigit.toString()
          .split('')
          .map((item) => {
            return item ** 2;
          }).join('')
      );
    }
  }
})()

squareEveryDigitModule.run()