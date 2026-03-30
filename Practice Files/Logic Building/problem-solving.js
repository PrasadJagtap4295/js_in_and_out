//!Day 1 – Simple Number Problems**

// todo 1. **Print Numbers from 1 to N**

//    * Input: `5`
//    * Output: `1 2 3 4 5`
//    * ✨ *Teaches basic loop construction.*

const loopNumber = (num) => {
  for (let index = 1; index <= num; index++) {
    console.log(index);
  }
};

// loopNumber(5);

//todo 2. **Print Numbers from N to 1 without changing the loop condition of above question**

//    * Input: `5`
//    * Output: `5 4 3 2 1`
//    * ✨ *Thinking creatively and manipulating logic within the loop*

const reverseLoopNumber = (num) => {
  for (let index = num; 0 < index; index--) {
    console.log(index);
  }
};

// reverseLoopNumber(5);

//todo 3. **Print All Even Numbers from 1 to N**

//    * Input: `10`
//    * Output: `2 4 6 8 10`
//    * ✨ *Introduces conditional checks inside loops.*

const printEvenNumbers = (num) => {
  for (let index = 1; index <= num; index++) {
    if (index % 2 === 0) {
      console.log(index);
    }
  }
};

// printEvenNumbers(10);

//todo 4. **Sum of First N Natural Numbers**

//    * Input: `5`
//    * Output: `15`
//    * ✨ *Encourages cumulative addition and variable usage.*

const sumOfNNaturalNumbers = (num) => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
    console.log("internal loop-->", sum);
  }
  return sum;
};

// console.log(sumOfNNaturalNumbers(5));

//todo 5. **Product (Factorial) of N**

//    * Input: `5`
//    * Output: `120`
//    * ✨ *Reinforces loop control with multiplication logic.*

const factorialNum = (num) => {
  let factorial = 1;
  for (let i = num; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
};

const factorialNum2 = (num) => {
  if (num === 0 || num === 1) {
    return 1; // base case: factorial of 0 or 1 is 1
  }
  return num * factorialNum2(num - 1); // recursive case
};

// console.log(factorialNum(5)); // Output: 120

// console.log(factorialNum(5));

//todo 6. **Sum of All Even Numbers up to N**

//    * Input: `10`
//    * Output: `30` (`2+4+6+8+10`)
//    * ✨ *Combines loops + condition + accumulation.*

const sumOfEvenNumbers = (num) => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
};
// console.log(sumOfEvenNumbers(10));

//todo 7. **Print Squares of Numbers from 1 to N**

//    * Input: `5`
//    * Output: `1 4 9 16 25`
//    * ✨ *Introduces arithmetic pattern generation.*

const printSquares = (num) => {
  for (let i = 1; i <= num; i++) {
    console.log(i * i);
  }
};

//todo 1. **Print all numbers divisible by 3 and 5 up to N**

//    * Input: `30`
//    * Output: `15 30`
//    * ✨ *Reinforces conditional checks inside loops.*

const printDivisibleBy3And5 = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i);
    }
  }
};

// 2. **Find the sum of all odd numbers up to N**

//    * Input: `10`
//    * Output: `25` (`1 + 3 + 5 + 7 + 9`)
//    * ✨ *Combines looping with conditional accumulation.*

const sumOfOddNumbers = (num) => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
};

//todo 3. **Print the cubes of numbers from 1 to N**

//    * Input: `5`
//    * Output: `1 8 27 64 125`
//    * ✨ *Extends arithmetic pattern logic beyond squares.*

const printCubes = (num) => {
  for (let i = 1; i <= num; i++) {
    console.log(i * i * i);
  }
};

//todo 4. **Print only the numbers that are both even and perfect squares**

//    * Input: `1 to 20`
//    * Output: `4 16`
//    * ✨ *Encourages combining two conditions within one loop.*

const evenPerfectSqure = (num) => {
  for (let i = 1; i < num; i++) {
    if (i % 2 === 0 && Number.isInteger(Math.sqrt(i))) {
      console.log(i);
    }
  }
};

evenPerfectSqure(20);

//! Day 2 ## 🎯 **Day 2 – Conditions & Logic**>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//todo 1. **Find the Maximum of Three Numbers**

//    * Input: `10 20 5`
//    * Output: `20`
//    * ✨ *Teaches nested or chained conditional logic and comparative reasoning.*

const maximumOfThree = (num1, num2, num3) => {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2 >= num1 && num2 >= num3) {
    return num2;
  } else {
    return num3;
  }
};

console.log(maximumOfThree(10, 50, 20));

//todo # 2. Check if a Number is Positive, Negative, or Zero

function checkPositiveOrNegative(num = 0) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  }
  return "Zero";
}

//todo 3. **Calculate Electricity Bill**

// * Input: `Units = 230`
// * Output: `Total Bill = ₹1500`
// * ✨ *Applies multiple ranges using chained `else if` and cumulative logic.*
// * Example Logic:

//   * 0–100 units → ₹5 per unit
//   * 101–200 units → ₹7 per unit
//   * 201–300 units → ₹10 per unit
//   * Above 300 units → ₹12 per unit
// * 🔍 *Teaches:* cumulative calculation + condition chaining.

const calculateBill = (units) => {
  let totalBill = 0;

  if (units <= 100) {
    totalBill = units * 5;
  } else if (units <= 200) {
    totalBill = 100 * 5 + (units - 100) * 7;
  } else if (units <= 300) {
    totalBill = 100 * 5 + 100 * 7 + (units - 200) * 10;
  } else {
    totalBill = 100 * 5 + 100 * 7 + 100 * 10 + (units - 300) * 12;
  }

  return totalBill;
};

// Example usage
let units = 230;
let bill = calculateBill(units);

// console.log(`Total Bill for ${units} units = ₹${bill}`);

//todo 4. **Check if a Character is a Vowel or Consonant**

//    * Input: `e`
//    * Output: `Vowel`
//    * ✨ *Combines logical OR (`||`) operator and string comparisons.*

const checkVowelOrConsonant = (char) => {
  const vowels = ["a", "e", "i", "o", "u"];

  if (vowels.includes(char.toLowerCase())) {
    return "Vowel";
  } else {
    return "Consonant";
  }
};
// console.log(checkVowelOrConsonant("E"));

//todo 5. **Check if a Year is a Leap Year**

//    * Input: `2024`
//    * Output: `Leap Year`
//    * ✨ *Builds compound condition logic using multiple `if` statements (`%4`, `%100`, `%400`).*

//    A year is a **leap year** if it satisfies these conditions:

//    1. It is **divisible by 4**,
//       ➜ `year % 4 === 0`
//    2. **But not divisible by 100**,
//       ➜ `year % 100 !== 0`
//    3. **Unless** it is also **divisible by 400**,
//       ➜ `year % 400 === 0`

//    🧩 **In Simple Words**
//    - If a year is divisible by **4**, it’s a leap year.
//    - **Except** if it’s also divisible by **100**, then it’s **not** a leap year.
//    - **But** if it’s divisible by **400**, it **is** a leap year again.

const isLeapYear = (year) => {
  if ((year % 4 == 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("its a leap year");
  } else {
    console.log("its not a leap year");
  }
};

// isLeapYear(1996);

// todo 6. **Check if a Character is Uppercase, Lowercase, Digit, or Special Character**

const checkCharacterType = (char) => {
  let code = char.charCodeAt(0);

  if (code >= 65 && code <= 90) {
    console.log("Uppercase Letter");
  } else if (code >= 97 && code <= 122) {
    console.log("Lowercase Letter");
  } else if (code >= 48 && code <= 57) {
    console.log("Digit");
  } else {
    console.log("Special Character");
  }
};

// Example usage:
// checkCharacterType("A"); // Output: Uppercase Letter
// checkCharacterType("z"); // Output: Lowercase Letter
// checkCharacterType("5"); // Output: Digit
// checkCharacterType("@"); // Output: Special Character

//todo 7. **Check Triangle Type Using Sides and Angles**

// * **Input:** `Sides = 3, 4, 5`
// * **Output:** `Right-Angled Triangle`
// * ✨ *Combines geometric reasoning + Pythagoras theorem check.*
// * Example Logic:

//   * If `a² + b² = c²` → Right-angled
//   * Else if all sides equal → Equilateral
//   * Else if any two equal → Isosceles
//   * Else → Scalene

const checkTriangleType = (a, b, c) => {
  // Sort sides so 'c' becomes the largest
  let sides = [a, b, c].sort((x, y) => x - y);
  [a, b, c] = sides;

  // Check triangle validity
  if (a + b <= c) {
    console.log("Not a valid triangle");
    return;
  }

  // Check type of triangle
  if (a === b && b === c) {
    console.log("Equilateral Triangle");
  } else if (a === b || b === c || a === c) {
    console.log("Isosceles Triangle");
  } else if (a * a + b * b === c * c) {
    console.log("Right-Angled Triangle");
  } else {
    console.log("Scalene Triangle");
  }
};

// todo **Calculate Income Tax Based on Slabs**

// * **Input:** `Income = ₹7,50,000`
// * **Output:** `Tax = ₹62,500`
// * ✨ *Applies progressive slab logic similar to electricity bill but with financial context.*
// * Example Logic (example slabs):

//   * Up to ₹2,50,000 → No tax
//   * ₹2,50,001 – ₹5,00,000 → 5%
//   * ₹5,00,001 – ₹10,00,000 → 20%
//   * Above ₹10,00,000 → 30%
// * 🔍 *Requires cumulative calculation using nested `if–else` or multiple slab loops.*

// Example usage:
// checkTriangleType(3, 4, 5); // ✅ Right-Angled Triangle
// checkTriangleType(5, 5, 5); // ✅ Equilateral Triangle
// checkTriangleType(5, 5, 8); // ✅ Isosceles Triangle
// checkTriangleType(4, 6, 7); // ✅ Scalene Triangle
// checkTriangleType(2, 3, 10); // ❌ Not a valid triangle

const calculateTax = (income) => {
  let tax = 0;

  if (income <= 250000) {
    tax = 0;
  } else if (income <= 500000) {
    tax = (income - 250000) * 0.05;
  } else if (income <= 1000000) {
    tax = 250000 * 0.05 + (income - 500000) * 0.2;
  } else {
    tax = 250000 * 0.05 + 500000 * 0.2 + (income - 1000000) * 0.3;
  }

  return tax;
};

// Example usage
let income = 750000;
let tax = calculateTax(income);

// console.log(`Income = ₹${income.toLocaleString()}`);
// console.log(`Total Tax = ₹${tax.toLocaleString()}`);

//! Day 3 ## 🎯 **Day 3 – Loops & Patterns**>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 1. **Print Right-Angled Star Triangle**

//    * Input: `Rows = 5`
//    * Output:

//      ```
//      *
//      **
//      ***
//      ****
//      *****
//      ```
//    * ✨ *Teaches nested loops and increasing sequence printing.*

const printStarPeramid = (rows) => {
  for (let i = 1; i <= rows; i++) {
    let star = "";
    for (let j = 1; j <= i; j++) {
      star = star + "*";
    }
    console.log(star);
  }
};

// printStarPeramid(5);

//todo 2. **Print Inverted Right-Angled Triangle**

//    * Input: `Rows = 5`
//    * Output:

//      ```
//      *****
//      ****
//      ***
//      **
//      *
//      ```
//    * ✨ *Reinforces decreasing nested loop structure.*

const printInvertedStarPeramid = (rows) => {
  for (let i = rows; i >= 1; i--) {
    let star = "";
    for (let j = i; j >= 1; j--) {
      star = star + "*";
    }
    console.log(star);
  }
};

// printInvertedStarPeramid(5);

//todo 3. **Print Pyramid Pattern**

//    * Input: `Rows = 5`
//    * Output:

//      ```
//          *
//         ***
//        *****
//       *******
//      *********
//      ```


function printPyramid(rows) {
  for (let i = 1; i <= rows; i++) {
    let line = "";

    // 1️⃣ Add spaces before stars
    for (let j = 1; j <= rows - i; j++) {
      line += " ";
    }

    // 2️⃣ Add stars
    for (let k = 1; k <= 2 * i - 1; k++) {
      line += "*";
    }

    // 3️⃣ Print the line
    console.log(line);
  }
}

// printPyramid(5);

//todo 4. **Print Inverted Pyramid Pattern**

//    * Input: `Rows = 5`
//    * Output:

//      ```
//      *********
//       *******
//        *****
//         ***
//          *
//      ```
//    * ✨ *Teaches reverse space-star pattern alignment.*

const row = 5;

// for (let i = 2 * row - 1; i >= 1; i -= 2) {

//   let str = "";
//   const currentRow = (i + 1) / 2;

//   for (let j = 1; j <= row + currentRow - 1; j++) {


//     if (j <= row - currentRow) {
//       str += " ";
//     } else {
//       str += "*";
//     }
//   }

//   console.log(str);
// }



const piramid = (input) => {
  for (let i = 1; i <= input; i++) {
    let line = "";
    for (let j = 1; j <= input - i; j++) {
      line += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      line += "*";
    }
    console.log(line);
  }
}

piramid(5);

//todo 5. **Print Hollow Square Pattern**

//    * Input: `Rows = 5`
//    * Output:

//      ```
//      *****
//      *   *
//      *   *
//      *   *
//      *****
//      ```
//    * ✨ *Practices conditional printing within nested loops.*




const printHollowSquare = (row) => {
  for (let i = 1; i <= row; i++) {
    let str = "";
    for (let j = 1; j <= row; j++) {
      if (i === 1 || i === row || j === 1 || j === row) {
        str = str + "*";
      } else {
        str = str + " ";
      }
    }
    console.log(str);
  }
}
// printHollowSquare(row);


//todo 6. **Print Hollow Pyramid Pattern**

//    * Input: `Rows = 5`
//    * Output:

//      ```
//          *
//         * *
//        *   *
//       *     *
//      *********
//      ```
// ?   * ✨ *Combines conditionals and symmetrical logic in loops.*


const printHollowPyramid = (rows) => {
  for (let i = 1; i <= rows; i++) {
    let line = "";
    // Add leading spaces
    for (let j = 1; j <= rows - i; j++) {
      line += " ";
    }
    // Add stars and spaces for hollow effect
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (i === 1 || i === rows || k === 1 || k === 2 * i - 1) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}

// printHollowPyramid(5);


//todo 7. **Print Alternating Binary Triangle**

//    * Input: `Rows = 5`
//    * Output:

//      ```
//      1
//      0 1
//      1 0 1
//      0 1 0 1
//      1 0 1 0 1
//      ```
//    *? ✨ *Combines parity logic with nested loops.*

const printAlternatingBinaryTriangle = (rows) => {
  for (let i = 1; i <= rows; i++) {
    let line = "";

    for (let j = 1; j <= i; j++) {
      if ((i + j) % 2 === 0) {
        line += "1 ";
      } else {
        line += "0 ";
      }
    }
    // console.log(line);
  }
}

// printAlternatingBinaryTriangle(5);

// 8. ** Print Hollow Inverted Pyramid **

//    * Input: `Rows = 5`
//   * Output:

// ```
//      *********
//       *     *
//        *   *
//         * *
//          *
//      ```
//   * ✨ * Focuses on conditionally printing edges and spaces.*

const printHollowInvertedPyramid = (rows) => {
  for (let i = rows; i >= 1; i--) {
    let line = "";
    console.log('i -->', i);

    // Add leading spaces
    for (let j = 1; j <= rows - i; j++) {
      console.log('j -->', j);

      line += " ";
    }
    // Add stars and spaces for hollow effect
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (i === rows || k === 1 || k === 2 * i - 1) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}

// printHollowInvertedPyramid(5);

//! ## 🎯 **Day 4 A – Understanding Decimal Number System**

//? ### 🧩 **Core Concept Focus**

// * Working with digits using arithmetic operations
// * Extracting and analyzing digits using `%` and `/`
// * Building logic around numbers and digit patterns
// * Using loops and conditional statements for numerical problems
// * Strengthening mathematical and logical thinking

// todo 1. Split Number into Digits

//    * Input: `N = 12345`
//    * Output: `[1, 2, 3, 4, 5]`
//    * ✨ *Extract each digit mathematically using, and return them in an array. Do not use string operations.*

// const splitNumberIntoDigits = (num) => {
//   const digits = [];
//   while (num > 0) {
//     const digit = num % 10;
//     digits.unshift(digit);
//     num = Math.floor(num / 10);
//   }
//   return digits;
// };

const numbersIntoArrayDigit = (num) => {
  const digits = [];
  while (num > 0) {
    const digit = num % 10;
    digits.unshift(digit);
  }
}

// console.log(splitNumberIntoDigits(12345)); // Output: [1, 2, 3, 4, 5]

// 2. **Remove the Decimal Point Mathematically**

//    * Input: `N = 12.34`
//    * Output: `1234`
//    * ✨ *Do not use string operations.*

const removeDecimalPoint = (num) => {
  let multiplier = 1;
  while (num % 1 !== 0) {
    num *= 10;
    multiplier *= 10;
  }
  return num;
};

console.log(removeDecimalPoint(883.42));
