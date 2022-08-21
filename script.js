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

whichIsLarger(
  () => 15,
  () => 15
);

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

canNest([1, 2, 3, 4], [0, 6]);
