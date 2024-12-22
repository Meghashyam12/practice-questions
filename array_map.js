const originalLog = console.log;
console.log = function () { };

// calculate percentage contribution of each number in [10, 20, 30] (relative to the total sum) => [16.67, 33.33, 50]
const getRelativePercentage = function (sum) {
  return function (number) {
    return (number / sum) * 100;
  };
};
const accumulateSum = function (accumulatedSum, element) {
  return accumulatedSum + element;
};
const percentageContributions = function (numbers) {
  const sum = numbers.reduce(accumulateSum, 0);
  return numbers.map(getRelativePercentage(sum));
};
console.log('Expected: [16.67, 33.33, 50]');
console.log('Actual:', percentageContributions([10, 20, 30]));

// subtract the smallest number from each number in [3, 8, 1] => [2, 7, 0]
const subtract = function (number2) {
  return function (number1) {
    return number1 - number2;
  };
};
const subtractMin = function (numbers) {
  return numbers.map(subtract(Math.min(...numbers)));
};
console.log('Expected: [2, 7, 0]');
console.log('Actual:', subtractMin([3, 8, 1]));

// sort strings by length first, and then alphabetically if lengths are equal in ["cat", "banana", "apple", "kiwi"] => ["cat", "kiwi", "apple", "banana"]
// Steps: Sort by length, then by lexicographical order.
const comparator = function (string1, string2) {
  if (string1.length === string2.length) {
    return string1.localeCompare(string2);
  }

  return Math.sign(string1.length - string2.length);
};
const sortByLengthAndAlphabet = function (strings) {
  return strings.sort(comparator);
};
console.log('Expected: ["cat", "kiwi", "apple", "banana"]');
console.log('Actual:', sortByLengthAndAlphabet(["cat", "banana", "apple", "kiwi"]));

// find the difference between the max and min values, and then normalize the array based on this range in [10, 20, 30, 5] => [0.2, 0.6, 1, 0]
// Steps: Find min, max, calculate range, then normalize each value.
const normalizeNumber = function (max, min) {
  const range = max - min;
  return function (number) {
    return (number - min) / range;
  };
};
const normalizeByRange = function (numbers) {
  return numbers.map(normalizeNumber(Math.max(...numbers), Math.min(...numbers)));
};
console.log('Expected: [0.2, 0.6, 1, 0]');
console.log('Actual:', normalizeByRange([10, 20, 30, 5]));

// calculate the percentage of each number relative to the total sum of the array, and then sort the percentages in descending order in [100, 200, 50, 25] => [50, 25, 12.5, 12.5]
// Steps: Calculate sum, find percentage of each number, sort in descending order.
const sortNumbersInDescending = function (number1, number2) {
  return number2 - number1;
};
const percentageOfTotalSorted = function (numbers) {
  const sum = numbers.reduce(accumulateSum, 0);
  return numbers.map(getRelativePercentage(sum)).sort(sortNumbersInDescending);
};
console.log('Expected: [50, 25, 12.5, 12.5]');
console.log('Actual:', percentageOfTotalSorted([100, 200, 50, 25]));

const toBinary = function (number) {
  return number.toString(2);
};
const wrapInArray = function (number) {
  return [number];
};
// map a list of numbers to their corresponding binary representation and then group them into arrays of equal lengths in [1, 2, 3, 4, 5] => [["1"], ["10"], ["11"], ["100"], ["101"]]
// Steps: Convert numbers to binary, then group them into arrays.
const mapToBinaryAndGroup = function (numbers) {
  return numbers.map(toBinary).map(wrapInArray);
};
console.log('Expected: [["1"], ["10"], ["11"], ["100"], ["101"]]');
console.log('Actual:', mapToBinaryAndGroup([1, 2, 3, 4, 5]));

// flatten an array of arrays into a single array and then filter out only the even numbers in [[1, 2, 3], [4, 5], [6, 7, 8]] => [2, 4, 6, 8]
// Steps: Flatten the arrays into one, then filter for even numbers.
const filterEven = function (array) {
  return array.filter(function (number) { return number % 2 === 0; });
};
const flattenAndFilterEven = function (arrays) {
  return arrays.flatMap(filterEven);
};
console.log('Expected: [2, 4, 6, 8]');
console.log('Actual:', flattenAndFilterEven([[1, 2, 3], [4, 5], [6, 7, 8]]));

// from an array of arrays, where each array contains [name, age], return an array of names of people who are over 18, and then sort them alphabetically in [["Alice", 25], ["Bob", 17], ["Charlie", 22]] => ["Alice", "Charlie"]
// Steps: Filter for age > 18, then sort by name.
const isAnAdult = function (person) {
  return person[1] > 18;
};
const filterAdultsAndSort = function (arrays) {
  const adults = arrays.filter(isAnAdult);
  return adults.map(function (person) { return person[0]; });
};
console.log('Expected: ["Alice", "Charlie"]');
console.log('Actual:', filterAdultsAndSort([["Alice", 25], ["Bob", 17], ["Charlie", 22]]));

// flatten a list of arrays representing orders, where each order contains items, and return a single array of item names in [["item1", "item2"], ["item3", "item4"]] => ["item1", "item2", "item3", "item4"]
// Steps: Use `flatMap` to flatten the arrays into a single array of items.
const flattenOrderItems = function (orders) {
  return orders.flatMap(function (order) { return order; });
};
console.log('Expected: ["item1", "item2", "item3", "item4"]');
console.log('Actual:', flattenOrderItems([["item1", "item2"], ["item3", "item4"]]));

// given an array of numbers, return a new array where each number is multiplied by its index in [2, 4, 6] => [0, 4, 12]
// Steps: Use the index parameter in the `map` function to multiply the number by its index.
const multiplyByIndex = function (numbers) {
  return numbers.map(function (number, index) { return number * index; });
};
console.log('Expected: [0, 4, 12]');
console.log('Actual:', multiplyByIndex([2, 4, 6]));

// given an array of prices, return a new array where each price is discounted by 5% for every index greater than 2, and the discount is 0% for indices less than or equal to 2 in [100, 200, 300, 400, 500] => [100, 200, 300, 380, 475]
// Steps: Use the index parameter in `map` to conditionally apply the discount.
const getDiscountedPrice = function (price, index) {
  const discount = index <= 2 ? 0 : 5;
  return price - (discount / 100) * price;
};
const discountByIndex = function (prices) {
  return prices.map(getDiscountedPrice);
};
console.log('Expected: [100, 200, 300, 380, 475]');
console.log('Actual:', discountByIndex([100, 200, 300, 400, 500]));

// given an array of strings, return a new array where each string is prefixed with its index (e.g., "0: Alice", "1: Bob") in ["Alice", "Bob", "Charlie"] => ["0: Alice", "1: Bob", "2: Charlie"]
// Steps: Use the index parameter in the `map` function to prefix the strings.
const formatNameWithIndex = function (name, index) {
  const prefix = index + ': ';
  return prefix + name;
};
const prefixWithIndex = function (names) {
  return names.map(formatNameWithIndex);
};
console.log('Expected: ["0: Alice", "1: Bob", "2: Charlie"]');
console.log('Actual:', prefixWithIndex(["Alice", "Bob", "Charlie"]));

// given an array of names, return a new array where each name is formatted as "Name: X", where X is the index of the name, and prepend "Index - " to names at even indices in ["Alice", "Bob", "Charlie"] => ["Index - 0: Alice", "1: Bob", "Index - 2: Charlie"]
// Steps: Use the index parameter in `map` to conditionally format the names.
const formatName = function (name, index) {
  const prefix = (index % 2 === 0 ? 'Index - ' : '') + index + ': ';
  return prefix + name;
};
const formatNamesWithIndex = function (names) {
  return names.map(formatName);
};
console.log('Expected: ["Index - 0: Alice", "1: Bob", "Index - 2: Charlie"]');
console.log('Actual:', formatNamesWithIndex(["Alice", "Bob", "Charlie"]));

// given two arrays, one of numbers and one of multipliers, create closures to multiply the base by the multiplier, then use flatMap to multiply each number in the base array by each multiplier
// [1, 2], [1, 2, 3] => [1, 2, 3, 2, 4, 6]
const multiplyNumbers = function (number1, number2) {
  return number1 * number2;
};
function operate(bases, operands, operator) {
  return bases.flatMap(function (base) {
    return operands.map(function (operand) {
      return operator(base, operand);
    });
  });
}
const multiply = function (bases, multipliers) {
  return operate(bases, multipliers, multiplyNumbers);
};
console.log('Expected: [1, 2, 3, 2, 4, 6]');
console.log('Actual:', multiply([1, 2], [1, 2, 3]));

// given two arrays, one of numbers and one of addends, create closures to add the base number to the addend, then use flatMap to apply each addend to each number
// [1, 2], [5, 10] => [6, 11, 7, 12]
const addNumbers = function (number1, number2) {
  return number1 + number2;
};
const add = function (bases, addends) {
  return operate(bases, addends, addNumbers);
};
console.log('Expected: [6, 11, 7, 12]');
console.log('Actual:', add([1, 2], [5, 10]));

// given two arrays, one of numbers and one of divisors, create closures to divide the base number by the divisor, then use flatMap to divide each number by each divisor
// [10, 20], [2, 5] => [5, 2, 10, 4]
const divideNumbers = function (number1, number2) {
  return number1 / number2;
};
const divide = function (bases, divisors) {
  return operate(bases, divisors, divideNumbers);
};
console.log('Expected: [5, 2, 10, 4]');
console.log('Actual:', divide([10, 20], [2, 5]));

// given two arrays, one of numbers and one of exponents, create closures to raise the base number to the exponent, then use flatMap to raise each number by each exponent
// [2, 3], [2, 3] => [4, 8, 9, 27]
const exponentNumbers = function (number1, number2) {
  return number1 ** number2;
};
const power = function (bases, exponents) {
  return operate(bases, exponents, exponentNumbers);
};
console.log('Expected: [4, 8, 9, 27]');
console.log('Actual:', power([2, 3], [2, 3]));

// given two arrays, one of prices and one of discounts, create closures to apply the discount to the price, then use flatMap to apply each discount to each price
// [100, 200], [0.1, 0.2] => [90, 80, 180, 160]
const calculateDiscount = function (number1, number2) {
  return number1 - (number2 * number1);
};
const applyDiscount = function (prices, discounts) {
  return operate(prices, discounts, calculateDiscount);
};
console.log('Expected: [90, 80, 180, 160]');
console.log('Actual:', applyDiscount([100, 200], [0.1, 0.2]));

// given two arrays, one of names and one of titles, create closures that combine each name with each title, then use flatMap to generate all combinations of names and titles
// ["Alice", "Bob"], ["Developer", "Manager"] => ["Alice Developer", "Alice Manager", "Bob Developer", "Bob Manager"]
const concat = function (nameA, nameB) {
  return nameA + ' ' + nameB;
};
const combineNameAndTitle = function (names, titles) {
  return operate(names, titles, concat);
};
console.log('Expected: ["Alice Developer", "Alice Manager", "Bob Developer", "Bob Manager"]');
console.log('Actual:', combineNameAndTitle(["Alice", "Bob"], ["Developer", "Manager"]));

// given two arrays, one of people’s names and one of ages, create closures to generate a message indicating whether each person is an adult (18 or older), then use flatMap to apply the closure to each person
// ["Alice", "Bob"], [20, 17] => ["Alice is an adult", "Bob is not an adult"]

// given two arrays, one of numbers and one of multipliers, create closures that multiply the base number by the corresponding multiplier at the same index, then return the results
// [1, 2, 3], [2, 3, 4] => [2, 6, 12]
const multiplyByCorresponding = function (bases, multipliers) {
  return bases.map(function (element, index) { return element * multipliers[index]; });
};
console.log('Expected: [2, 6, 12]');
console.log('Actual:', multiplyByCorresponding([1, 2, 3], [2, 3, 4]));

const checkAdultStatus = function (names, ages) {
  return names.map(function (name, index) {
    const isAnAdult = ages[index] > 18;
    const suffix = isAnAdult ? ' is an adult' : ' is not an adult';
    return name + suffix;
  });
};
console.log('Expected: ["Alice is an adult", "Bob is not an adult"]');
console.log('Actual:', checkAdultStatus(["Alice", "Bob"], [20, 17]));

console.log = originalLog;
console.log = function () { };