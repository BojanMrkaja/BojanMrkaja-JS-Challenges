'use strict';
/*
Given three arguments ⁠— an object obj of the stolen items, 
the pets name and a value ⁠— return an object with that name and value in it (as key-value pairs).

addName({}, "Brutus", 300) ➞ { Brutus: 300 }

addName({ piano: 500 }, "Brutus", 400) ➞ { piano: 500, Brutus: 400 }
*/

const addName = function (object, name, value) {
  const object1 = { ...object };
  object1[name] = value;
  return object1;
};

// console.log(addName({ brutus: 300, bojan: 400, boris: 250 }, 'piano', 500));

/* 
Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

To illustrate:

largestSwap(27) ➞ false

largestSwap(43) ➞ true

If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.

*/

const largestSwap = function (num) {
  let numToString = num.toString().split('').reverse().join('');
  let stringToNumber = Number(numToString);

  if (num > stringToNumber) {
    return true;
  } else if (num < stringToNumber) {
    return false;
  } else {
    return console.log('Brojevi su jednaki');
  }
};

// console.log(largestSwap(88));

/*
A word is on the loose and now has tried to hide amongst a crowd of tall letters! 
Help write a function to detect what the word is, knowing the following rules:

    -The wanted word is in lowercase.
    -The crowd of letters is all in uppercase.
    -Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
*/

const detectWord = function (str) {
  const splitString = str.split('');
  let result = splitString.filter(char => char === char.toLowerCase());

  return result.join('');
};

// console.log(detectWord('YFemHUFBbezFBYzFBYLleGBYEFGBMENTment'));

/*
Your function will be passed two functions, f and g, that don't take any parameters. 
Your function has to call them, and return a string which indicates which function returned the larger number.

    If f returns the larger number, return the string f.
    If g returns the larger number, return the string g.
    If the functions return the same number, return the string neither.

*/

const whichIsLarger = function (arrow1, arrow2) {
  const firstFunction = arrow1();
  const secondFunction = arrow2();

  if (firstFunction > secondFunction) {
    return console.log('Arrow1 is bigger than arrow2');
  } else if (firstFunction < secondFunction) {
    return console.log('Arrow2 is bigger than arrow1');
  } else {
    return console.log('Arrows are the same');
  }
};

// whichIsLarger(
//   () => 15,
//   () => 15
// );

/*
Create a function that returns true if the first array can be nested inside the second.

arr1 can be nested inside arr2 if:

    -arr1's min is greater than arr2's min.
    -arr1's max is less than arr2's max.

*/

const canNest = function (array1, array2) {
  let array1Min = array1[0];
  let array1Max = array1[0];

  let array2Min = array2[0];
  let array2Max = array2[0];

  for (let index = 0; index < array1.length; index++) {
    if (array1[index] < array1Min) {
      array1Min = array1[index];
    }
    if (array1[index] > array1Max) {
      array1Max = array1[index];
    }
  }

  for (let index = 0; index < array2.length; index++) {
    if (array2[index] < array2Min) {
      array2Min = array2[index];
    }
    if (array2[index] > array2Max) {
      array2Max = array2[index];
    }
  }

  if (array1Min > array2Min && array1Max < array2Max) {
    return console.log(
      `Array1 min(${array1Min}) is greater than Array2 min(${array2Min}).Conditiopn is set to nest array 1 in to array 2 :)`
    );
  } else {
    return console.log('It can not be done');
  }
};

// canNest([1, 2, 3, 4], [0, 6]);

/*
Drink Sorting

You will be given an array of drinks, with each drink being an object with two properties: name and price. 
Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

Assume that the following array of drink objects needs to be sorted:

drinks = [
  {name: "lemonade", price: 50},
  {name: "lime", price: 10}
]

The output of the sorted drinks object will be:
Examples

sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]

*/

const sortDrinkByPrice = function (drinks) {
  drinks.sort((a, b) => {
    return a.price - b.price;
  });

  return drinks;
};

// console.log(
//   sortDrinkByPrice([
//     { name: 'lemonade', price: 50 },
//     { name: 'lime', price: 10 },
//     { name: 'orange-juice', price: 30 },
//     { name: 'beer', price: 40 },
//     { name: 'cofee', price: 70 },
//     { name: 'coke', price: 100 },
//     { name: 'gin-tonik', price: 150 },
//     { name: 'milk', price: 20 },
//   ])
// );

/*
Tuck in Array

Create a function that takes two arrays and insert the second array in the middle of the first array.
Examples

tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]

tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]]

Notes
  -The first array always has two elements.
*/

const tuckIn = function (array1, array2) {
  const firstElementArr = array1.shift();
  const lastElementtArr = array1.pop();
  const combineArray = [...array1, ...array2];
  combineArray.unshift(firstElementArr);
  combineArray.push(lastElementtArr);
  return combineArray;
};

// console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));

/*
Slightly Superior

You will be given two extremely similar arrays, but exactly one of the items in an array will be valued slightly higher than its counterpart (which means that evaluating the value > the other value will return true).

Create a function that returns whether the first array is slightly superior to that of the second.
Examples

isFirstSuperior([1, 2, 4], [1, 2, 3]) ➞ true
// The pair of items at each index are compared in turn.
// 1 from the first array is the same as 1 from the second array.
// 2 is the same as 2.
// However, 4 is greater than 3, so first array is superior.

isFirstSuperior(["a", "d", "c"], ["a", "b", "c"]) ➞ true

isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"]) ➞ true

isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4]) ➞ false

isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"]) ➞ false

Notes

    Both arrays will be the same length.
    All values and their counterparts will always be of the same data type.
    If the two arrays are the same, return false.

*/

const equals = (arr1, arr2) =>
  arr1.length === arr2.length && arr1.some((element, i) => element > arr2[i]);

// console.log(equals([true, 10, 'zebra'], [true, 10, 'zebra']));

/*
Count Instances of a Character in a String

Create a function that takes two strings as arguments and returns the number of 
times the first string (the single character) is found in the second string.

Examples

charCount("a", "edabit") ➞ 1

charCount("c", "Chamber of secrets") ➞ 1

charCount("b", "big fat bubble") ➞ 4
*/

const charCount = function (myChar, string) {
  const stringToArr = string.split('');
  return stringToArr.filter(char => char === myChar).length;
};

// console.log(charCount('b', 'big fat bubble'));

/* 
Filter out Strings from an Array

Create a function that takes an array of non-negative integers and strings and return a new array without the strings.
Examples

filterArray([1, 2, "a", "b"]) ➞ [1, 2]

filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]

filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]

Notes

    Zero is a non-negative integer.
    The given array only has integers and strings.
    Numbers in the array should not repeat.
    The original order must be maintained.

*/

const filterArray = function (arr) {
  const newArr = arr.filter(num => typeof num === 'number');

  return newArr;
};

// console.log(filterArray([1, 'a', 'b', 0, 15]));

/*
Repeating Letters

Create a function that takes a string and returns a string in which each character is repeated once.
Examples

doubleChar("String") ➞ "SSttrriinngg"

doubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"

doubleChar("1234!_ ") ➞ "11223344!!__  "

Notes

All test cases contain valid strings. Don't worry about spaces, special characters or numbers. 
They're all considered valid characters.
*/
const doubleChar = function (string, numOfRepeat) {
  if (typeof string === 'string' && typeof numOfRepeat === 'number') {
    const splitString = string.split('');
    const multiStr = splitString.map(char => char.repeat(numOfRepeat));

    return multiStr.join('');
  } else {
    console.log('Pass string and number to function');
  }
};

// console.log(doubleChar('String', 3));

/*
Error Messages

Create a function that takes a number as an argument and returns the appropriate error message. You should do this without using the switch or if statements.

The input error will be 1 to 5:

1 >> "Check the fan: e1"
2 >> "Emergency stop: e2"
3 >> "Pump Error: e3"
4 >> "c: e4"
5 >> "Temperature Sensor Error: e5"

For any other value, return 101 (you can use an if statment here).
Examples

error(1) ➞ "Check the fan: e1"

error(2) ➞ "Emergency stop: e2"

error(3) ➞ "Pump Error: e3"

Notes

Do this without using the switch or if statements.
*/

const err = function (num) {
  if (typeof num === 'number') {
    const errors = [
      'Check the fan: e1',
      'Emergency stop: e2',
      'Pump Error: e3',
      'c: e4',
      'Temperature Sensor Error: e5',
    ];

    return console.log(errors[num - 1]);
  } else {
    console.log('Error 101, Pass the number');
  }
};

// console.log(err(2));

/*
Spotlight Sum

Given a 10x10 grid of numbers 1-100, return the Spotlight Sum, given a number n. The spotlight sum can be defined as the total of the 8 numbers immediately surrounding the number n on the grid, including n in the total.
Worked Example

[
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
  [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
  [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
  [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
  [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
  [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
  [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
]

spotlight_sum(45) ➞ 405

// The 8 numbers surrounding 45 on the grid are:
// [34, 35, 36, 44, 46, 54, 55, 56]
// Total of the numbers is 360.
// Include 45 in the total (360 + 45 = 405)
// Return the answer.

Examples

  spotlightSum(19) ➞ 171

  spotlightSum(48) ➞ 432

  spotlightSum(88) ➞ 792

Notes
  Note that any numbers which don't have the full 8 numbers surrounding it are not included in the tests.
*/

const numGrid = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
  [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
  [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
  [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
  [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
  [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
  [91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
];

let num1, num2, num3, num4, num5, num6, num7, num8;

const surroundingNumbers = [];

const spotlightSum = function (number) {
  if (typeof number === 'number') {
    if (number < 1 || number > 100) {
      console.log('Pass number between 1 and 100');
    } else {
      num1 = number - 1;
      num2 = number + 1;
      num3 = number - numGrid.length;
      num4 = num3 - 1;
      num5 = num3 + 1;
      num6 = number + numGrid.length;
      num7 = num6 - 1;
      num8 = num6 + 1;

      return num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + number;
    }
  } else {
    console.log('Enter valid namber');
  }
};

// console.log(spotlightSum(48));

/*
Sort by String Length

Create a function that returns an array of strings sorted by length in ascending order.
Examples

sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]

sortByLength(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", "shortcake"]

sortByLength(["may", "april", "september", "august"]) ➞ ["may", "april", "august", "september"]

sortByLength([]) ➞ []

Notes

    Strings will have unique lengths, so don't worry about comparing two strings with identical length.
    Return an empty array if the input array is empty (see example #4).

*/

const sortString = function (arr) {
  return arr.sort((a, b) => a.length - b.length);
};

// console.log(sortString(['apple', 'pie', 'shortcake']));

/*
Number Split

Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.
Examples

numberSplit(4) ➞ [2, 2]

numberSplit(10) ➞ [5, 5]

numberSplit(11) ➞ [5, 6]

numberSplit(-9) ➞ [-5, -4]

Notes

    All numbers will be integers.
    You can expect negative numbers too
*/

const numberSplit = function (num) {
  let arr = [];
  const floorNumber = Math.floor(num / 2);
  const ceilNumber = Math.ceil(num / 2);

  arr.push(floorNumber, ceilNumber);

  return arr;
};

// console.log(numberSplit(3));

/*
Highest Digit

Create a function that takes a number as an argument and returns the highest digit in that number.
Examples

highestDigit(379) ➞ 9

highestDigit(2) ➞ 2

highestDigit(377401) ➞ 7

*/

const highestDigit = function (number) {
  const toArr = String(number)
    .split('')
    .map(num => {
      return Number(num);
    });

  let highestNum = toArr[0];

  toArr.forEach(element => {
    if (element > highestNum) {
      highestNum = element;
    }
  });

  return highestNum;
};

console.log(highestDigit(377401));

/*
Even All the Way

Given an array of numbers, return an array which contains all the even numbers in the original array, which also have even indices.
Examples

getOnlyEvens([1, 3, 2, 6, 4, 8]) ➞ [2, 4]

getOnlyEvens([0, 1, 2, 3, 4]) ➞ [0, 2, 4]

getOnlyEvens([1, 2, 3, 4, 5]) ➞ []

Notes

Arrays start at index 0.

*/

const getOnlyEvens = function (array) {
  return array.filter(num => num % 2 === 0);
};

console.log(getOnlyEvens([1, 3, 2, 6, 4, 8]));
