// ## 🔰 Beginner - Function & Logic Fundamentals (1-20)
// ? These focus on basic loops, conditionals, and functions.

// const { useMemo } = require("react");

// todo 1. Sum Two Numbers: Write a function sum(a, b) that returns their sum.

function sum(a, b) {
  return a + b;
}

// console.log("Sum of 5 and 3 is:", sum(2, 8)); // Output: 10

// todo 2. Check if Even: Write a function isEven(num) that returns true if a number is even and false otherwise.

function isEven(num) {
  return num % 2 === 0;
}

// console.log("Is 4 even?", isEven(4)); // Output: true
// console.log("Is 5 even?", isEven(5)); // Output: false

// todo 3. Find the Maximum: Write a function findMax(a, b, c) that returns the largest of three numbers.

function findMax(a, b, c) {
  return Math.max(a, b, c);
}

const maximumOfThree = (num1, num2, num3) => {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2 >= num1 && num2 >= num3) {
    return num2;
  } else {
    return num3;
  }
};

// console.log("Max of 1, 2, 3 is:", findMax(1, 2, 3));

// todo 3.1. Check for Odd: Write a function isOdd(num) that returns true if a number is odd.

function isOdd(num) {
  return num % 2 !== 0;
}

// todo 3.2. Check for Prime: Write a function isPrime(num) that returns true if a number is prime.

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// console.log("Is 7 prime?", isPrime(7)); // Output: true
// console.log("Is 4 prime?", isPrime(4)); // Output: false

// todo 4. Get String Length: Write a function getStringLength(str) that returns the length of a string.

function getStringLength(string) {
  return string.length;
}

// console.log(getStringLength("Seven"));

// todo 5. Convert Celsius to Fahrenheit: Write a function celsiusToFahrenheit(celsius). The formula is (C * 9/5) + 32.

function celsiusToFahrenheit(celsius) {
  Fahrenheit = (celsius * 9) / 5 + 32;

  return `${celsius} celsius is similar to the ${Fahrenheit} Fahrenheit`;
}

// console.log(celsiusToFahrenheit(25));

// todo 6. Sum an Array: Write a function sumArray(arr) that returns the sum of all numbers in an array.

function sumArray(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}

//without the reduce function

function sumArrayWithoutReduce(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// console.log(sumArray([1, 2, 3, 4]));

//todo 7. Find Largest Number in Array: Write a function findLargest(arr) that returns the largest number in an array.

function findLargest(arr) {
  return Math.max(...arr);
}

function findlargestArray2(array) {
  let largestNum = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > largestNum) {
      largestNum = array[i];
    }
  }
  return largestNum;
}

// console.log(findlargestArray2([88.7, 57, 3, 94]));

//todo 8. Print Numbers 1 to 10: Write a function that uses a for loop to console.log numbers from 1 to 10.

function printNumbers1() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

function numPrinter() {
  let allNumList = [];

  for (let index = 1; index < 11; index++) {
    allNumList.push(index);
  }
  return allNumList;
}

// console.log(numPrinter());

//todo 9. Print Even Numbers: Write a function printEvens(n) that prints all even numbers from 1 to n.

function printEvens(n) {
  let evenNumbers = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  return evenNumbers;
}

// console.log(printEvens(10));

//todo 10. Calculate Factorial: Write a function factorial(n) that returns the factorial of a number (e.g., 5! = 120).

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

//todo 11. Check for a Vowel: Write a function isVowel(char) that returns true if the character is a vowel.

function isVowel(char) {
  const vowels = "aeiouAEIOU";
  return vowels.includes(char);
}

//todo 12. Concatenate Two Strings: Write a function concatStrings(str1, str2).

function concatStrings(str1, str2) {
  return str1 + str2;
}

//todo 13. Check Age for Voting: Write a function canVote(age) that returns true if age is 18 or older.

function canVote(age) {
  return age >= 18;
}

//todo 14. Get Grade from Score: Write a function getGrade(score) that returns 'A' for score > 90, 'B' for > 80, etc.

function getGrade(score) {
  if (score > 90) return "A";
  if (score > 80) return "B";
  if (score > 70) return "C";
  if (score > 60) return "D";
  return "F";
}

//todo 15. Get First Element of Array: Write a function getFirstElement(arr).

function getFirstElement(arr) {
  return arr[0];
}

//todo 16. Get Last Element of Array: Write a function getLastElement(arr).

function getLastElement(arr) {
  return arr[arr.length - 1];
}

//todo 17. Repeat a String: Write a function repeatString(str, n) that returns the string repeated n times.

function repeatString(str, n) {
  return str.repeat(n);
}

// console.log(repeatString("Hello ! ", 3)); // Output: Hello ! Hello ! Hello !

//todo 18. Check if a Number is Positive: Write a function isPositive(num).

isPositive = (num) => {
  return num > 0;
};

//todo 19. Calculate Simple Interest: Write a function simpleInterest(principal, rate, time).

simpleInterest = (principal, rate, time) => {
  return (principal * rate * time) / 100;
};

// console.log(simpleInterest(1000, 5, 2)); // Output: 100

//todo 20. Area of a Rectangle: Write a function rectangleArea(width, height).

triangleArea = (width, height) => {
  return 0.5 * height * width;
};

//!  ##Array Manipulation (21-45) >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//  These focus on working with arrays, a core data structure.

// 21. Filter Positive Numbers: Given an array of numbers, return a new array containing only the positive ones.

filterPositiveNumbers = (arr) => {
  return arr.filter((num) => num > 0);
};

// without the arr.filter method

filterPositiveNumbers = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      result.push(arr[i]);
    }
  }
  return result;
};

// todo 22. Double Each Number: Use the .map() method to create a new array where each number is doubled.

doubleNumbers = (arr) => {
  return arr.map((num) => num * 2);
};

// todo 23. Multiply All Numbers: Use the .reduce() method to find the product of all numbers in an array.

multiplyNumbers = (arr) => {
  return arr.reduce((acc, num) => acc * num, 1);
};

// todo 24. Get Unique Elements: Create a function that returns an array with all duplicate elements removed.

const arr = [1, 2, 2, 3, 4, 4, 5, 5, 5, 5, 6, 7, 7, 7];

//using the Set object

getUniqueElements1 = (arr) => {
  return [...new Set(arr)];
};

//without using the Set

getUniqueElements2 = (arr) => {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
};

//whitout using the includes method

getUniqueElements3 = (arr) => {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < unique.length; j++) {
      if (arr[i] === unique[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      unique.push(arr[i]);
    }
  }
  return unique;
};

//Without using any built-in methods

getUniqueElements4 = (arr) => {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    let found = false;
    for (let j = 0; j < unique.length; j++) {
      if (arr[i] === unique[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      unique[unique.length] = arr[i];
    }
  }
  return unique;
};

const findUnique = (arr) => {
  let freq = {},
    result = [];
  for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]] === 1) {
      continue;
    } else {
      result.push(arr[i]);
      freq[arr[i]] = 1;
    }
  }
  return result;
};

// console.log(findUnique(arr), getUniqueElements1(arr), getUniqueElements2(arr), getUniqueElements3(arr), getUniqueElements4(arr) );

// todo 25. Reverse an Array: Write a function to reverse the order of elements in an array.

reverseArray = (arr) => {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
};

reverseArry = () => {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
};

// todo 26. Check if Array Contains a Value: Write a function containsValue(arr, val).

containsValue = (arr, val) => {
  return arr.includes(val);
};

// todo 27. Find Index of an Element: Write a function findIndex(arr, val) that returns the index of a value, or -1 if not found.

findIndex = (arr, val) => {
  return arr.indexOf(val);
};

// todo 28. Flatten an Array: Given an array of arrays, flatten it into a single array (e.g., [[1, 2], [3, 4]] -> [1, 2, 3, 4]).

flattenArray = (arr) => {
  return arr.reduce((acc, curr) => acc.concat(curr), []);
};

// todo 29. Remove Falsy Values: Remove false, null, 0, "", undefined, and NaN from an array.

withoutFalse = (arr) => {
  return arr.filter(Boolean);
};

// todo 30. Chunk an Array: Write a function chunk(arr, size) that splits an array into chunks of a specific size.

chunkArray = (arr, size) => {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

// todo 31. Merge Two Sorted Arrays: Write a function that merges two sorted arrays into a new sorted array.

mergeSortedArrays = (arr1, arr2) => {
  let merged = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  // Append any remaining elements from either array
  return merged.concat(arr1.slice(i)).concat(arr2.slice(j));
};

// todo 32. Find Intersection of Two Arrays: Return an array containing elements that exist in both input arrays.
findIntersection = (arr1, arr2) => {
  return arr1.filter((item) => arr2.includes(item));
};

// todo 33. Find Difference of Two Arrays: Return an array containing elements that exist in the first array but not the second.
findDifference = (arr1, arr2) => {
  return arr1.filter((item) => !arr2.includes(item));
};

// todo 34. Get Array of Object Property: Given an array of objects, return an array of a specific property's values (e.g., [{name: 'A'}, {name: 'B'}] -> ['A', 'B']).

getObjectPropertyValues = (arr, prop) => {
  return arr.map((item) => item[prop]);
};

// todo 35. Sum a Specific Object Property: Given an array of objects, sum up the values of a specific numeric property.

sumOfArrayObjectProperty = (arr, prop) => {
  return arr.reduce((acc, curr) => acc + (curr[prop] || 0), 0);
};

// todo 36. Rotate an Array: Write a function rotateArray(arr, k) that rotates an array to the right by k steps.

rotateArray = (arr, k) => {
  k = k % arr.length;
  return arr.slice(-k).concat(arr.slice(0, -k));
};

// todo 37. Find Minimum Value in Array: Write a function to find the smallest number in an array.

findMinValue = (arr) => {
  return Math.min(...arr);
};

//alternate approach

findMinValue = (arr) => {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

// todo 38. Create an Array of a Certain Length: Write a function createArray(n) that creates an array of numbers from 1 to n.

createArray = (n) => {
  return Array.from({ length: n }, (_, i) => i + 1);
};

// todo 39. Sort an Array of Numbers: Write a function to sort an array of numbers in ascending order.

sortArray = (arr) => {
  return arr.slice().sort((a, b) => a - b);
};

// todo 40. Sort an Array of Strings: Write a function to sort an array of strings alphabetically.

sortStringArray = (arr) => {
  return arr.slice().sort();
};

// todo 41. Find the Second Largest Number: Write a function to find the second largest number in an array.

findSecondLargest = (arr) => {
  let first = -Infinity;
  let second = -Infinity;
  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num < first) {
      second = num;
    }
  }
  return second;
};

findingSecondLargest = (arr) => {
  let largestNum = -Infinity;
  let secondLargest = -Infinity;

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > largestNum) {
      secondLargest = largestNum;
      largestNum = arr[index];
    } else if (arr[index] > secondLargest && arr[index] < largestNum) {
      secondLargest = arr[index];
    }
  }
  return secondLargest;
};

const testArray = [100, 89, 90, 86, 710, 60];

//todo 42. Check if All Elements are Positive: Use .every() to check if all numbers in an array are positive.

areAllPositive = (arr) => {
  return arr.every((num) => num > 0);
};

//todo 43. Check if Any Element is Even: Use .some() to check if any number in an array is even.

areAnyEven = (arr) => {
  return arr.some((num) => num % 2 === 0);
};

//todo 44. Get a Random Element from an Array: Write a function to pick a random element.

getRandomElement = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

//todo 45. Fill an Array with a Value: Write a function fillArray(n, value) that creates an array of length n filled with value.

//!  ## ✍️ String Manipulation (46-65)------------------------

//todo 46. Reverse a String: Write a function to reverse a string without using built-in reverse methods.

// reverseString = (str) => {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// };

const testString = "Hello world";

const reverseString = (arr) => {
  let reversedString = "";
  for (let index = arr.length - 1; index >= 0; index--) {
    reversedString += arr[index];
  }

  return reversedString;
};

console.log("reversed string -->", reverseString(testString));

//todo 47. Check for Palindrome: Check if a string is the same forwards and backward.

isPalindrome = (str) => {
  const cleaned = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
};

//todo 48. Count Vowels: Count the number of vowels in a string.

countVowels = (str) => {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
};

//todo 49. Count Words: Count the number of words in a sentence.

countWords = (str) => {
  const words = str.trim().split(/\s+/);
  return words.filter(Boolean).length;
};

//todo 50. Capitalize the First Letter of Each Word: Transform "hello world" to "Hello World".

capitalizeFirstLetter = (str) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

//todo 51. Find the Longest Word: Find the longest word in a sentence.

findLongestWord = (str) => {
  const words = str.trim().split(/\s+/);
  return words.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, "");
};

//todo 52. Check for Anagrams: Check if two strings are anagrams of each other (contain the same characters in different orders).

areAnagrams = (str1, str2) => {
  const normalize = (str) =>
    str
      .replace(/[^A-Za-z0-9]/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("");
  return normalize(str1) === normalize(str2);
};

//todo 53. Truncate a String: Truncate a string if it's longer than a given length, adding "..." at the end.

truncateString = (str, maxLength) => {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + "...";
  }
  return str;
};

//todo 54. Check if a String Contains a Substring: Write a function containsSubstring(str, sub).

containsSubstring = (str, sub) => {
  return str.includes(sub);
};

//todo 55. Count Character Occurrences: Count how many times a specific character appears in a string.

countCharacterOccurrences = (str, char) => {
  const matches = str.match(new RegExp(char, "g"));
  return matches ? matches.length : 0;
};

//todo 56. Remove all Whitespace: Remove all spaces from a string.

removeWhitespace = (str) => {
  return str.replace(/\s+/g, "");
};

//todo 57. Check if a String is a Pangram: A pangram is a sentence containing every letter of the alphabet.

isPangram = (str) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const lowerStr = str.toLowerCase();
  return alphabet.split("").every((char) => lowerStr.includes(char));
};

//todo 58. Basic String Compression: Compress a string like "aabcccccaaa" to "a2b1c5a3".

basicStringCompression = (str) => {
  const compressed = [];
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      compressed.push(str[i] + count);
      count = 1;
    }
  }
  return compressed.join("");
};

//todo 59. Convert to Camel Case: Convert a string with underscores or hyphens to camelCase (e.g., the_stealth_warrior -> theStealthWarrior).

convertToCamelCase = (str) => {
  return str
    .split(/[_-]/)
    .map((word, index) => {
      if (index === 0) return word.toLowerCase();
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
};

//todo 60. Convert to Snake Case: Convert a camelCase string to snake_case.

convertToSnakeCase = (str) => {
  return str.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
};

//todo 61. Check if a String Starts With a Substring: Implement startsWith(str, sub).

//todo 62. Check if a String Ends With a Substring: Implement endsWith(str, sub).

//todo 63. Generate all Substrings: Write a function to get all possible substrings of a string.

//todo 64. Check for Balanced Parentheses: Check if a string has correctly balanced parentheses (), brackets [], and braces {}.

//todo 65. Find First Non-repeated Character: Find the first character in a string that does not repeat.

//! ## 🧩 Objects & Data Structures (66-80) >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//todo 66. Get Object Keys: Write a function to get all keys from an object.

//todo 67. Get Object Values: Write a function to get all values from an object.

//todo 68. Check if an Object has a Property: Write a function hasProperty(obj, prop).

//todo 69. Merge Two Objects: Combine two objects into one. If keys conflict, the second object's value wins.

//todo 70. Invert an Object: Swap the keys and values of an object.

//todo 71. Count Object Properties: Count the number of properties in an object.

//todo 72. Deeply Compare Two Objects: Write a function to check if two objects are identical in structure and value.

//todo 73. Convert an Array to an Object: Convert an array of [key, value] pairs into an object.

//todo 74. Get a Nested Property Value: Safely get a value from a nested object using a path string like "a.b.c".

//todo 75. Create a Character Frequency Map: Given a string, create an object where keys are characters and values are their frequencies.

// todo 76. Filter Object Properties: Create a new object containing only the properties that pass a test function.

// todo 77. Check if an Object is Empty: Write a function isEmpty(obj).

// todo 78. Get Object's Prototype: Write a function to get the prototype of an object.

// todo 79. Freeze an Object: Make an object immutable using Object.freeze().

// todo 80. Rename an Object Key: Write a function to rename a key in an object.

//!  ## 🚀 Algorithms - Intermediate to Hard (81-100) >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//todo 81. Fibonacci Sequence: Generate the first n numbers of the Fibonacci sequence.

//todo 82. Check if Prime: Write a function isPrime(num) to check if a number is prime.

//todo 83. Binary Search: Implement binary search on a sorted array.

//todo 84. Bubble Sort: Implement the Bubble Sort algorithm.

//todo 85. Find Pair with Given Sum: Find two numbers in an array that add up to a specific target.

//todo 86. Maximum Subarray Sum (Kadane's Algorithm): Find the contiguous subarray with the largest sum.

//todo 87. Roman to Integer: Convert a Roman numeral string to an integer.

//todo 88. Integer to Roman: Convert an integer to a Roman numeral string.

//todo 89. Missing Number in Array: Given an array from 1 to n with one number missing, find the missing number.

//todo 90. Find the Single Unique Number: In an array where every element appears twice except for one, find that single one.

//todo 91. Recursive Factorial: Re-implement factorial using recursion.

//todo 92. Tower of Hanoi: Solve the Tower of Hanoi puzzle recursively.

//todo 93. Generate all Permutations of a String: Write a function to find all permutations of a string.

//todo 94. Deep Flatten an Array: Flatten a deeply nested array (e.g., [1, [2, [3, [4]], 5]]).

function deepFlatten(arr) {
  const result = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...deepFlatten(item));
    } else {
      result.push(item);
    }
  });
  return result;
}

// console.log(deepFlatten([1, [2, [3, [4]], 5]]));

//using flat method

function deepFlattenUsingFlat(arr) {
  return arr.flat(Infinity);
}

// console.log(deepFlattenUsingFlat([1, [2, [3, [4]], 5]]));

//todo 95. Implement a Queue: Create a Queue data structure with enqueue and dequeue methods.

//todo 96. Implement a Stack: Create a Stack data structure with push and pop methods.

//todo 97. Longest Common Subsequence: Find the longest common subsequence between two strings.

//todo 98. Implement debounce: Create a debounce function that limits the execution of a function.

//todo 99. Implement throttle: Create a throttle function that ensures a function is only executed at most once per every specified time period.

//todo 100. LRU Cache: Implement a Least Recently Used (LRU) Cache.

//todo Javascript Promises and Asynchronous Programming (101-120)

//! 101. Create a Promise: Write a function that returns a Promise which resolves after a given time.>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// 102. Fetch Data from an API: Use fetch to get data from a public API and log the response.

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

//! Switch case practice>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// const dayNumber = prompt("Enter a day number (1-7):");

switch ("6") {
  case "1":
    console.log("its a sunday");
    break;
  case "2":
    console.log("its a monday");
    break;
  case "3":
    console.log("its a tuesday");
    break;
  case "4":
    console.log("its a wednesday");
    break;
  case "5":
    console.log("its a thursday");
    break;
  case "6":
    console.log("its a friday");
    break;
  case "7":
    console.log("its a saturday");
    break;
  default:
    console.log("invalid day number");
    break;
}

const user = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
};

delete user.email;

user.age = 31;

//* array pop push practice

const fruits = ["apple", "banana", "orange"];

// console.log("before fruits", fruits);

fruits.push("mango", "pineapple");
// console.log("After push:", fruits); // ["apple", "banana", "orange", "grape"]

const removedFruit = fruits.pop(); // Removing the last element
// console.log("Removed fruit:", removedFruit); // "grape"
// console.log("After pop:", fruits); // ["apple", "banana", "orange"]
const removedFruit2 = fruits.pop();
// console.log("Removed fruit:", removedFruit2); // "orange"
// console.log("After pop:", fruits); // ["apple", "banana"]

//* array shift unshift practice

const vegetables = ["carrot", "broccoli", "spinach"];
vegetables.unshift("lettuce");
// console.log("After unshift:", vegetables);

// const removedVegetable = vegetables.shift();
// console.log("Removed vegetable:", removedVegetable);
// console.log("After shift:", vegetables);

vegetables.name = "prasad";

// concat example

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = array1.concat(array2);

// console.log("Combined Array:", combinedArray); // [1, 2, 3, 4, 5, 6]

//  ! Array and Object Deep copy example

const originalArray = [1, 2, 3];
const shallowCopyArray = originalArray.slice(); // Shallow copy using slice
const deepCopyArray = JSON.parse(JSON.stringify(originalArray)); // Deep copy using JSON methods

newCopy = [...originalArray];

newCopy.push(4);

originalArray.push(8);

// console.log("this is the new copy", newCopy);
// console.log("This is the original array", originalArray);

// console.log("Original Array:", originalArray); // [1, 2, 3, 4]
// console.log("Shallow Copy Array:", shallowCopyArray); // [1, 2, 3]
// console.log("Deep Copy Array:", deepCopyArray); // [1, 2, 3]

const originalObject = { a: 1, b: 2, c: 3 };
const shallowCopyObject = { ...originalObject }; // Shallow copy using spread operator
const deepCopyObject = JSON.parse(JSON.stringify(originalObject)); // Deep copy using JSON methods

originalObject.d = 4;
// console.log("Original Object:", originalObject); // { a: 1, b: 2, c: 3, d: 4 }
// console.log("Shallow Copy Object:", shallowCopyObject); // { a: 1, b: 2, c: 3 }
// console.log("Deep Copy Object:", deepCopyObject); // { a: 1, b: 2, c: 3 }

//! Closure example

function createGreeter(greeting) {
  // 1. This is the "parent" scope.
  // The 'greeting' variable is created here.
  let localGreeting = greeting;

  // 2. We create and return an inner function
  return function (name) {
    // 3. This inner function is a closure.
    // It "remembers" the 'localGreeting' variable from its
    // parent scope, even after createGreeter() has finished.
    console.log(localGreeting + ", " + name);
  };
}

// todo --- Using the closure ---

// 4. We call the outer function. It runs, and returns
//    the inner function. 'localGreeting' is "Hello".
const sayHello = createGreeter("Hello");

// 5. We call the outer function again. It runs, and returns
//    a *different* inner function. 'localGreeting' is "Hi".
// const sayHi = createGreeter("Hi");

// 6. We call the inner functions.
//    Even though createGreeter() is long gone, sayHello()
//    remembers its localGreeting was "Hello".
// sayHello("Alice"); // Output: Hello, Alice

//    And sayHi() remembers its localGreeting was "Hi".
// sayHi("Bob"); // Output: Hi, Bob

//! Event Deligation Example

const listIteam = document.getElementById("my-list");

listIteam.addEventListener("click", function (event) {
  if (event.target && event.target.tagName == "LI") {
    console.log("You have clicked the ", event.target.textContent);
  }
});

// ! Promises Example>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const pizzaPromis = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve("Pizza is ready!");
    } else {
      reject("Failed to prepare pizza.");
    }
  }, 2000);
});

pizzaPromis
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

const myPromise = new Promise((resolve, reject) => {
  document.getElementById("resolveButton").addEventListener("click", () => {
    resolve("Promise has been resolved!");
  });
  document.getElementById("rejectButton").addEventListener("click", () => {
    reject("Promise has been rejected!");
  });
});

myPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

// asyc function example without using promise directly

async function fetchUserData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    const data = await response.json();
    // console.log("User Data:", data);
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

fetchUserData();

// ! There Is 3 phase of promise

// todo Creating a Promise
const waitTillISaid = (millisecond) => {
  return new Promise((resolve, reject) => {
    if (millisecond == 3000) {
      reject(new Error("Khatam hogaya bhai"));
    }
    setTimeout(() => {
      resolve("are bhai hogaya na Print");
    }, millisecond);
  });
};

const CreatingNewPromise = (milisecondtime) => {
  return new Promise((resolve, reject) => {
    if (milisecondtime == 3000) {
      reject(new Error("taking too much time"))
    } else {
      setTimeout(() => {
        resolve("yes your Promis is complted ");
      }, milisecondtime)
    }
  })
}

CreatingNewPromise(5000)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

// todo now consuming the promise
waitTillISaid(3000)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    // console.log(error);
  });

// todo Async Await example
const meraKamkaKya = async () => {
  try {
    const message = await waitTillISaid(4000);
    // console.log(message);
  } catch (error) {
    // console.log(error);
  }
};
meraKamkaKya();

// todo setTimeout and setInterval example

// const popupTimer = setTimeout(() => {
//   alert("You've been idle for 5 seconds!");
// }, 3000);

let digitalTime = 0;
const digitalWatch = setInterval(() => {
  digitalTime += 5;
  const minutes = Math.floor(digitalTime / 60);
  const seconds = digitalTime % 60;
  // alert(`Time passed: ${minutes} minutes and ${seconds} seconds`);
}, 300000);

// todo For of and For in loop example

const sampleArray = ["apple", "banana", "cherry"];

// Using for...of to iterate over array values
for (const fruit of sampleArray) {
  // console.log("Fruit:", fruit);
}

const sampleObject = { name: "Alice", age: 25, city: "New York" };

// Using for...in to iterate over object keys
for (const key in sampleObject) {
  if (sampleObject.hasOwnProperty(key)) {
    const value = sampleObject[key];
    // console.log(`${key}: ${value}`);
  }
}

const person = {
  name: "Alex",
  age: 30,
  job: "Developer",
};

for (const key in person) {
  // console.log(key);
  // console.log(person[key]);
}

//todo map filter and reduce example

const numbers = [1, 2, 3, 4, 5];

// Using map to double each number
const doubled = numbers.map((num) => num * 2);
// console.log("Doubled:", doubled); // [2, 4, 6, 8, 10]

// Using filter to get even numbers
const evens = numbers.filter((num) => num % 2 === 0);
// console.log("Evens:", evens); // [2, 4]

// Using reduce to sum all numbers
// const sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log("Sum:", sum); // 15

//! todo rest and spread operator example

// Using rest operator to gather arguments into an array
function sumAll(...args) {
  return args.reduce((acc, num) => acc + num, 0);
}

// console.log("Sum All:", sumAll(1, 2, 3, 4)); // 10

// Using spread operator to expand an array into individual elements
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];

// console.log("Combined Array:", combinedArr); // [1, 2, 3, 4, 5, 6]

// Using spread operator to copy an object
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };

// console.log("Copied Object:", obj2); // { a: 1, b: 2, c: 3 }

// todo call apply bind example
const wizard = {
  name: 'Merlin',
  health: 50,
  heal: function (num1, num2) {
    this.health += num1 + num2;
    // console.log(this.name + ' now has ' + this.health + ' health.');
  }
};

const archer = {
  name: 'Robin',
  health: 30
};

// wizard.heal.apply(archer, [50,90]);

wizard.heal.call(archer, 40, 60);
// const healSpell = wizard.heal.bind(archer, 40, 60);
// healSpell();

//todo debounce function example

// Debounce function
function debounce(func, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Function that simulates API call
function fetchResults(query) {
  document.getElementById("output").innerText =
    `Fetching results for: "${query}" ...`;
}

// Create debounced version of fetchResults
const debouncedSearch = debounce(fetchResults, 1000);

// Attach to input field
document.getElementById("searchBox").addEventListener("input", (event) => {
  debouncedSearch(event.target.value);
});

// throttle function example

const throttle = (func, delay) => {
  let lastcall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastcall < delay) {
      return;
    }

    lastcall = now;
    return func(...args);
  };
}

function sendChatMessage(user) {
  let time = Date.now();
  // console.log("Intial Message Sent " + user + " " + time);
}

const throttledFunction = throttle(sendChatMessage, 5000);

throttledFunction("Prasad");

// setTimeout(() => {
//   throttledFunction("Amar");
// }, 3000);

// setTimeout(() => {
//   throttledFunction("Yeshwanth");
// }, 5000);

// setTimeout(() => {
//   throttledFunction("Sanket");
// }, 12000);

//!  Prototypal Inheritance Example
const animal = {
  eats: true,
  walk() {
    // console.log("Animal walks");
  },
};
const rabbit = {
  jumps: true,
  __proto__: animal,
};
rabbit.walk(); // Inherited from animal
// console.log("Does rabbit eat?", rabbit.eats); // Inherited from animal
// !  actual implementaion in the projects ES6 classes
//todo by classes
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} make a noise`;
  }
}
const tiger = new Animal('tiger');
// console.log(tiger.speak());
//direct method
const animalMethod = {
  speak() {
    return `${this.name} make noise`
  }
}
const dog = Object.create(animalMethod);
dog.name = "tomy"
// console.log(dog.speak());

// for (let i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

//object.assign example

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const anotherSource = { d: 6 };

// Merging source and anotherSource into target
// Object.assign(target, source, anotherSource);

const returnedTarget = Object.assign(source, anotherSource, target);

const newVariable = JSON.parse(JSON.stringify(source));

// console.log('source', source); // { a: 1, b: 4, c: 5 }
// console.log('returnedTarget', returnedTarget); // { a: 1, b: 4, c: 5 }

const costs = [5, 15, 25, 8];

// We return a CONDITION (Boolean)
const cheap = costs.map(cost => cost * 10);

// console.log('cheap', cheap); // [50, 150, 250, 80]

console.log("here is the result", 3 - '3');

console.log(mul(2)(3)(4)); // 24

function mul(x) {
  return function (y) {
    return function (z) {
      return x * y * z;
    };
  };
}

//with using arrow function

const multiply = (x) => (y) => (z) => x * y * z;

// flatten array without using flat method

const nestedArray = [1, [2, [3, [4]], 5]];

const flattenArray = (arr) => {
  const result = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item));
    } else {
      result.push(item);
    }
  });
  return result;
};

