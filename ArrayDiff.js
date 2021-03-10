'use strict'

let someArray = [1, 5, 3, 4];
let oneMoreArray = [-1, 2, 5, 3];

const getArrayDifference = (arr1, arr2) => {
  let result = arr1.filter(item => !arr2.includes(item));
  console.log(result);
};

getArrayDifference(someArray, oneMoreArray);

// Через паттерн Модуль
let arrFirst = [3, 5, 3, 4, 8];
let arrSecond = [-1, 2, 5, 3, 7, -9];

const arrayDiff = ((arr1, arr2) => {

  return {
    getArrayDifference: (arr1, arr2) => {
      let result = arr1.filter(item => !arr2.includes(item));
      console.log(result);
    }
  }
})();

arrayDiff.getArrayDifference(arrFirst, arrSecond);