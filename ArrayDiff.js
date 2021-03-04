'use strict'

let someArray = [1, 5, 3, 4];
let oneMoreArray = [-1, 2, 5, 3];

const getArrayDifference = (arr1, arr2) => {
  let result = arr1.filter(item => !arr2.includes(item));
  console.log(result);
};

getArrayDifference(someArray, oneMoreArray);

// Через паттерн Модуль

const arrayDiff = (() => {
  let arr1 = [3, 5, 3, 4, 8];
  let arr2 = [-1, 2, 5, 3, 7, -9];

  return {
    getArrayDifference: () => {
      let result = arr1.filter(item => !arr2.includes(item));
      console.log(result);
    }
  }
})();

arrayDiff.getArrayDifference();