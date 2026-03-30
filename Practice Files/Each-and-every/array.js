// ✅ All JavaScript Array Methods (Numbered List)
// 🟦 A. Static Array Methods

// Array.from()

// Array.of()

const mixed = Array.of(10, "Hello", { key: "value" }, true);
console.log(mixed);

// Array.isArray()

const isItAnArray = Array.isArray(mixed);
console.log(isItAnArray);

// 🟦 B. Adding & Removing Elements

// push()

const numbers = [1, 2, 3];
numbers.push(40);
console.log(numbers);

// pop()

const lastElement = numbers.pop();
console.log(lastElement);
console.log(numbers);

// delete()

delete numbers[1];
console.log(numbers);

// concat()

const moreNumbers = numbers.concat([50, 60]);
console.log("moreNumbers:-", moreNumbers);

// shift()

// unshift()

// splice()

// toSpliced() (immutable)

// 🟦 C. Copying / Filling / Replacing

// copyWithin()

// fill()

// with() (immutable replace)

// 🟦 D. Searching / Finding

// indexOf()

// lastIndexOf()

// includes()

// find()

// findIndex()

// findLast()

// findLastIndex()

// 🟦 E. Iteration Methods

// forEach()

// map()

// filter()

// reduce()

// reduceRight()

// flat()

// flatMap()

// 🟦 F. Tests / Boolean Methods

// every()

// some()

// 🟦 G. Sorting & Reordering

// sort()

// reverse()

// toSorted() (immutable)

// toReversed() (immutable)

// 🟦 H. Slicing / Copying

// slice()

// concat()

// 🟦 I. String Conversion

// join()

// toString()

// toLocaleString()

// 🟦 J. Iterators

// keys()

// values()

// entries()

// 🟦 K. New Immutable Methods (ES2023+)

// (Also counted above, but listing separately for clarity)
// 41. toSorted()
// 42. toReversed()
// 43. toSpliced()
// 44. with()

// 🟦 L. Important Property

// length (array length property)

// ⭐ Final Count:

// ✔ 44 array methods
// ✔ 1 important property
// ➡ 45 total items