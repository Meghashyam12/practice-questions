const originalLog = console.log;
console.log = function () { };
console.log = originalLog;
console.log = function () { };

// calculate percentage contribution of each number in [10, 20, 30] (relative to the total sum) => [16.67, 33.33, 50]
const percentageContributions = function (numbers) { };
console.log('Expected:');
console.log('Actual:');

// subtract the smallest number from each number in [3, 8, 1] => [2, 7, 0]
const subtractMin = function (numbers) { };

// sort strings by length first, and then alphabetically if lengths are equal in ["cat", "banana", "apple", "kiwi"] => ["cat", "kiwi", "apple", "banana"]
// Steps: Sort by length, then by lexicographical order.
const sortByLengthAndAlphabet = function (strings) { };

// find the difference between the max and min values, and then normalize the array based on this range in [10, 20, 30, 5] => [0.25, 0.75, 1, 0]
// Steps: Find min, max, calculate range, then normalize each value.
const normalizeByRange = function (numbers) { };

// calculate the percentage of each number relative to the total sum of the array, and then sort the percentages in descending order in [100, 200, 50, 25] => [50, 25, 12.5, 12.5]
// Steps: Calculate sum, find percentage of each number, sort in descending order.
const percentageOfTotalSorted = function (numbers) { };

// map a list of numbers to their corresponding binary representation and then group them into arrays of equal lengths in [1, 2, 3, 4, 5] => [["1"], ["10"], ["11"], ["100"], ["101"]]
// Steps: Convert numbers to binary, then group them into arrays.
const mapToBinaryAndGroup = function (numbers) { };

// flatten an array of arrays into a single array and then filter out only the even numbers in [[1, 2, 3], [4, 5], [6, 7, 8]] => [2, 4, 6, 8]
// Steps: Flatten the arrays into one, then filter for even numbers.
const flattenAndFilterEven = function (arrays) { };

// from an array of arrays, where each array contains [name, age], return an array of names of people who are over 18, and then sort them alphabetically in [["Alice", 25], ["Bob", 17], ["Charlie", 22]] => ["Alice", "Charlie"]
// Steps: Filter for age > 18, then sort by name.
const filterAdultsAndSort = function (arrays) { };

// flatten a list of arrays representing orders, where each order contains items, and return a single array of item names in [["item1", "item2"], ["item3", "item4"]] => ["item1", "item2", "item3", "item4"]
// Steps: Use `flatMap` to flatten the arrays into a single array of items.
const flattenOrderItems = function (orders) { };

// given an array of numbers, return a new array where each number is multiplied by its index in [2, 4, 6] => [0, 4, 12]
// Steps: Use the index parameter in the `map` function to multiply the number by its index.
const multiplyByIndex = function (numbers) { };

// given an array of prices, return a new array where each price is discounted by 5% for every index greater than 2, and the discount is 0% for indices less than or equal to 2 in [100, 200, 300, 400, 500] => [100, 200, 300, 380, 475]
// Steps: Use the index parameter in `map` to conditionally apply the discount.
const discountByIndex = function (prices) { };

// given an array of names, return a new array where each name is formatted as "Name: X", where X is the index of the name, and prepend "Index - " to names at even indices in ["Alice", "Bob", "Charlie"] => ["Index - 0: Alice", "1: Bob", "Index - 2: Charlie"]
// Steps: Use the index parameter in `map` to conditionally format the names.
const formatNamesWithIndex = function (names) { };

// given two arrays, one of numbers and one of multipliers, create closures to multiply the base by the multiplier, then use flatMap to multiply each number in the base array by each multiplier
// [1, 2], [1, 2, 3] => [1, 2, 3, 2, 4, 6]
const multiply = function (bases, multipliers) { };

// given two arrays, one of numbers and one of addends, create closures to add the base number to the addend, then use flatMap to apply each addend to each number
// [1, 2], [5, 10] => [6, 11, 7, 12]
const add = function (bases, addends) { };

// given two arrays, one of numbers and one of divisors, create closures to divide the base number by the divisor, then use flatMap to divide each number by each divisor
// [10, 20], [2, 5] => [5, 2, 4, 4]
const divide = function (bases, divisors) { };

// given two arrays, one of numbers and one of exponents, create closures to raise the base number to the exponent, then use flatMap to raise each number by each exponent
// [2, 3], [2, 3] => [4, 8, 9, 27]
const power = function (bases, exponents) { };

// given two arrays, one of prices and one of discounts, create closures to apply the discount to the price, then use flatMap to apply each discount to each price
// [100, 200], [0.1, 0.2] => [90, 180, 160, 240]
const applyDiscount = function (prices, discounts) { };

// given two arrays, one of names and one of titles, create closures that combine each name with each title, then use flatMap to generate all combinations of names and titles
// ["Alice", "Bob"], ["Developer", "Manager"] => ["Alice Developer", "Alice Manager", "Bob Developer", "Bob Manager"]
const combineNameAndTitle = function (names, titles) { };

// given two arrays, one of numbers and one of multipliers, create closures that multiply the base number by the corresponding multiplier at the same index, then return the results
// [1, 2, 3], [2, 3, 4] => [2, 6, 12]
const multiplyByCorresponding = function (bases, multipliers) { };

// given an array of strings, return a new array where each string is prefixed with its index (e.g., "0: Alice", "1: Bob") in ["Alice", "Bob", "Charlie"] => ["0: Alice", "1: Bob", "2: Charlie"]
// Steps: Use the index parameter in the `map` function to prefix the strings.
const prefixWithIndex = function (names) { };

// given two arrays, one of people’s names and one of ages, create closures to generate a message indicating whether each person is an adult (18 or older), then use flatMap to apply the closure to each person
// ["Alice", "Bob"], [20, 17] => ["Alice is an adult", "Bob is not an adult"]
const checkAdultStatus = function (names, ages) { };