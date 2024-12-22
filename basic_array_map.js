const originalLog = console.log;
console.log = function () { };
// squares of [1, 2, 3] => [1, 4, 9]
const squaresOf = function (numbers) {
  return numbers.map(function (number) { return Math.pow(number, 2); });
};
console.log('Expected: [1, 4, 9]');
console.log('Actual:', squaresOf([1, 2, 3]));

// lengths of ["apple", "banana", "kiwi"] => [5, 6, 4]
const lengthsOf = function (strings) {
  return strings.map(function (string) { return string.length; });
};
console.log('Expected: [5, 6, 4]');
console.log('Actual:', lengthsOf(["apple", "banana", "kiwi"]));

// uppercase of ["hello", "world"] => ["HELLO", "WORLD"]
const uppercaseOf = function (strings) {
  return strings.map(function (string) { return string.toUpperCase(); });
};
console.log('Expected: ["HELLO", "WORLD"]');
console.log('Actual:', uppercaseOf(["hello", "world"]));

// first characters of ["apple", "banana", "kiwi"] => ["a", "b", "k"]
const firstCharactersOf = function (strings) {
  return strings.map(function (string) { return string[0]; });
};
console.log('Expected: ["a", "b", "k"]');
console.log('Actual:', firstCharactersOf(["apple", "banana", "kiwi"]));

// truth values of [0, 1, 2, 3] => [false, true, true, true]
// Assume non-zero numbers are true, and zero is false
const truthValuesOf = function (numbers) {
  return numbers.map(function (number) { return number !== 0; });
};
console.log('Expected: [false, true, true, true]');
console.log('Actual:', truthValuesOf([0, 1, 2, 3]));

const reverseWord = function (string) {
  return string.split('').reverse().join('');
};

// reverse strings of ["hello", "world"] => ["olleh", "dlrow"]
const reversedStringsOf = function (strings) {
  return strings.map(reverseWord);
};
console.log('Expected: ["olleh", "dlrow"]');
console.log('Actual:', reversedStringsOf(["hello", "world"]));

const doubleChars = function (string) {
  const stringAsArary = string.split('');

  return stringAsArary.map(function (char) {
    return char + char;
  }).join('');
};
// double letters of ["cat", "dog", "bat"] => ["ccaatt", "ddoogg", "bbaatt"]
const doubleLettersOf = function (strings) {
  return strings.map(doubleChars);
};
console.log('Expected: ["ccaatt", "ddoogg", "bbaatt"]');
console.log('Actual:', doubleLettersOf(["cat", "dog", "bat"]));

// boolean negation of [true, false, true] => [false, true, false]
const negatedBooleansOf = function (booleans) {
  return booleans.map(function (bool) { return !bool; });
};
console.log('Expected: [false, true, false]');
console.log('Actual:', negatedBooleansOf([true, false, true]));

// character codes of ["a", "b", "c"] => [97, 98, 99]
// Use the `charCodeAt` method on each string
const charCodesOf = function (strings) {
  return strings.map(function (char) { return char.charCodeAt(0); });
};
console.log('Expected: [97, 98, 99]');
console.log('Actual:', charCodesOf(["a", "b", "c"]));

// extract domain names from ["user1@gmail.com", "admin@yahoo.com"] => ["gmail.com", "yahoo.com"]
const domainNamesOf = function (emails) {
  return emails.map(function (email) { return email.slice(email.indexOf('@'), email.length); });
};
console.log('Expected: ["gmail.com", "yahoo.com"]');
console.log('Actual:', domainNamesOf(["user1@gmail.com", "admin@yahoo.com"]));

// split words in ["hello world", "goodbye moon"] => [["hello", "world"], ["goodbye", "moon"]]
const splitWordsOf = function (strings) {
  return strings.map(function (string) { return string.split(' '); });
};
console.log('Expected: [ ["hello", "world"], ["goodbye", "moon"] ]');
console.log('Actual:', splitWordsOf(["hello world", "goodbye moon"]));

// join arrays of [["a", "b"], ["c", "d"]] => ["ab", "cd"]
const joinedArraysOf = function (arrayOfArrays) {
  return arrayOfArrays.map(function (array) { return array.join(''); });
};
console.log('Expected: ["ab", "cd"]');
console.log('Actual:', joinedArraysOf([["a", "b"], ["c", "d"]]));

// repeat strings in ["hi", "bye"] => ["hihi", "byebye"]
const repeatedStringsOf = function (strings) {
  return strings.map(function (string) { return string + string; });
};
console.log('Expected: ["hihi", "byebye"]');
console.log('Actual:', repeatedStringsOf(["hi", "bye"]));

const countVowels = function (string) {
  const vowels = 'aeiou';
  let vowelsCount = 0;

  for (let char of string) {
    if (vowels.includes(char)) {
      vowelsCount += 1;
    }
  }

  return vowelsCount;
};
// count vowels in ["apple", "banana", "grape"] => [2, 3, 2]
const countVowelsOf = function (strings) {
  return strings.map(countVowels);
};
console.log('Expected: [2, 3, 2]');
console.log('Actual:', countVowelsOf(["apple", "banana", "grape"]));

// reverse arrays of [[1, 2, 3], [4, 5, 6]] => [[3, 2, 1], [6, 5, 4]]
const reversedArraysOf = function (arrays) {
  return arrays.map(function (array) { return array.reverse(); });
};
console.log('Expected: [[3, 2, 1], [6, 5, 4]]');
console.log('Actual:', reversedArraysOf([[1, 2, 3], [4, 5, 6]]));

const accumulateConsonants = function (accumulator, element) {
  accumulator += 'aeiou'.includes(element) ? '' : element;
  return accumulator;
};

const removeVowels = function (string) {
  const stringAsArary = string.split('');
  return stringAsArary.reduce(accumulateConsonants, '');
};
// remove vowels from ["apple", "banana", "grape"] => ["ppl", "bnn", "grp"]
const withoutVowelsOf = function (strings) {
  return strings.map(removeVowels);
};
console.log('Expected: ["ppl", "bnn", "grp"]');
console.log('Actual:', withoutVowelsOf(["apple", "banana", "grape"]));

const accumulateRunningTotal = function (runningTotal, element) {
  if (runningTotal.length === 0) {
    return [element];
  }
  runningTotal.push(runningTotal.at(-1) + element);
  return runningTotal;
};
const getRunningTotal = function (array) {
  return array.reduce(accumulateRunningTotal, []);
};
// cumulative sums of [[1, 2, 3], [4, 5, 6]] => [[1, 3, 6], [4, 9, 15]]
// Example: cumulative sum of [1, 2, 3] is [1, 1+2, 1+2+3]
const cumulativeSumsOf = function (arrays) {
  return arrays.map(getRunningTotal);
};
console.log('Expected: [[1, 3, 6], [4, 9, 15]]');
console.log('Actual:', cumulativeSumsOf([[1, 2, 3], [4, 5, 6]]));

const reverseWords = function (string) {
  const stringAsArary = string.split(' ');
  return stringAsArary.map(reverseWord).join(' ');
};
// reverse words in ["hello world", "goodbye moon"] => ["olleh dlrow", "eybdoog noom"]
const reversedWordsOf = function (strings) {
  return strings.map(reverseWords);
};
console.log('Expected: ["olleh dlrow", "eybdoog noom"]');
console.log('Actual:', reversedWordsOf(["hello world", "goodbye moon"]));

const isUnique = function (string, char) {
  if (!string.includes(char)) {
    string += char;
  }

  return string;
};
const getUniqueCharacters = function (string) {
  return string.split('').reduce(isUnique, '');
};
// extract unique characters from ["apple", "banana", "grape"] => ["aple", "ban", "grape"]
// Maintain the order of their first appearance in each string
const uniqueCharactersOf = function (strings) {
  return strings.map(getUniqueCharacters);
};
console.log('Expected: ["aple", "ban", "grape"]');
console.log('Actual:', uniqueCharactersOf(["apple", "banana", "grape"]));

const getRange = function (number) {
  const range = [];
  for (let positon = 0; positon < number; positon++) {
    range.push(positon);
  }

  return range;
};
// generate ranges from [3, 5, 2] => [[0, 1, 2], [0, 1, 2, 3, 4], [0, 1]]
const rangesOf = function (numbers) {
  return numbers.map(getRange);
};
console.log('Expected: [[0, 1, 2], [0, 1, 2, 3, 4], [0, 1]]');
console.log('Actual:', rangesOf([3, 5, 2]));

const capitalizeWord = function (word) {
  return word[0].toUpperCase() + word.slice(1, word.length);
};
const capitalizeString = function (string) {
  return string.split(' ').map(capitalizeWord).join(' ');
};
// capitalize first letters of ["hello world", "goodbye moon"] => ["Hello World", "Goodbye Moon"]
const capitalizedFirstLettersOf = function (strings) {
  return strings.map(capitalizeString);
};
console.log('Expected: ["Hello World", "Goodbye Moon"]');
console.log('Actual:', capitalizedFirstLettersOf(["hello world", "goodbye moon"]));

const getWordLengths = function (string) {
  return string.split(' ').map(function (word) { return word.length; });
};
// find word lengths in ["apple pie", "banana split"] => [[5, 3], [6, 5]]
const wordLengthsOf = function (strings) {
  return strings.map(getWordLengths);
};
console.log('Expected: [[5, 3], [6, 5]]');
console.log('Actual:', wordLengthsOf(["apple pie", "banana split"]));

const flattenArray = function (array) {
  return array.flatMap(function (element) { return element; });
};
// flatten nested arrays of [[1, [2, 3]], [4, [5, 6]]] => [[1, 2, 3], [4, 5, 6]]
const flattenedArraysOf = function (arrays) {
  return arrays.map(flattenArray);
};
console.log('Expected: [[1, 2, 3], [4, 5, 6]]');
console.log('Actual:', flattenedArraysOf([[1, [2, 3]], [4, [5, 6]]]));

const sortString = function (string) {
  return string.split('').sort().join('');
};
// sort letters in ["cat", "bat", "rat"] alphabetically => ["act", "abt", "art"]
const sortedLettersOf = function (strings) {
  return strings.map(sortString);
};
console.log('Expected: ["act", "abt", "art"]');
console.log('Actual:', sortedLettersOf(["cat", "bat", "rat"]));

// wrap strings in brackets ["apple", "banana"] => ["[apple]", "[banana]"]
const wrappedStringsOf = function (strings) {
  return strings.map(function (string) { return '[' + string + ']'; });
};
console.log('Expected: ["[apple]", "[banana]"]');
console.log('Actual:', wrappedStringsOf(["apple", "banana"]));

// normalize strings by the longest string length in ["cat", "elephant", "dog"] => ["cat    ", "elephant", "dog    "]
// (pad with spaces to match the longest length)
const getLongestString = function (longestString, string) {
  if (string.length > longestString.length) {
    longestString = string;
  }

  return longestString;
};
const findLongestString = function (strings) {
  return strings.reduce(getLongestString, '');
};
const padString = function (longestString) {
  return function (string) {
    return string.padEnd(longestString.length);
  };
};
const normalizeStringLengths = function (strings) {
  return strings.map(padString(findLongestString(strings)));
};
console.log('Expected: ["cat     ", "elephant", "dog     "]');
console.log('Actual:', normalizeStringLengths(["cat", "elephant", "dog"]));

// normalize strings by centering them based on the longest string length in ["cat", "elephant", "dog"] => ["  cat   ", "elephant", "  dog   "]
// (pad with spaces to justify to the center)
const centerJustifyString = function (longestString) {
  return function (string) {
    const stringFirstHalf = string.slice(0, string.length / 2);
    const stringSecondHalf = string.slice(string.length / 2, string.length);

    const paddedAtStart = stringFirstHalf.padStart(longestString.length / 2);
    const paddedAtEnd = stringSecondHalf.padEnd(longestString.length / 2);

    return paddedAtStart + paddedAtEnd;
  };
};
const centerJustifyStrings = function (strings) {
  return strings.map(centerJustifyString(findLongestString(strings)));
};
console.log('Expected: ["  cat   ", "elephant", "  dog   "]');
console.log('Actual:', centerJustifyStrings(["cat", "elephant", "dog"]));

// scale all numbers proportionally so the largest number becomes 100 in [20, 50, 80] => [25, 62.5, 100]
const scaleNumber = function (biggestNumber) {
  const multiplier = 100 / biggestNumber;
  return function (number) {
    return number * multiplier;
  };
};
const scaleToMax100 = function (numbers) {
  return numbers.map(scaleNumber(Math.max(...numbers)));
};
console.log('Expected: [25, 62.5, 100]');
console.log('Actual:', scaleToMax100([20, 50, 80]));

// map each number to the difference between it and the average of the array in [10, 20, 30] => [-10, 0, 10]
const sum = function (sum, number) {
  return sum + number;
};
const getMeanDifference = function (mean) {
  return function (number) {
    return number - mean;
  };
};
const differencesFromMean = function (numbers) {
  const mean = numbers.reduce(sum, 0) / numbers.length;
  return numbers.map(getMeanDifference(mean));
};
console.log('Expected: [-10, 0, 10]');
console.log('Actual:', differencesFromMean([10, 20, 30]));

// map each string to its frequency in ["apple", "banana", "apple", "apple", "banana"] => [3, 2, 3, 3, 2]
const countOccurences = function (key, array) {
  let occurences = 0;
  for (const element of array) {
    if (element === key) {
      occurences += 1;
    }
  }

  return occurences;
};
const getFrequency = function (strings) {
  return function (string) {
    return countOccurences(string, strings);
  };
};
const stringFrequencies = function (strings) {
  return strings.map(getFrequency(strings));
};
console.log('Expected: [3, 2, 3, 3, 2]');
console.log('Actual:', stringFrequencies(["apple", "banana", "apple", "apple", "banana"]));

console.log = originalLog;
// mark the largest number in an array as true, others as false in [1, 3, 2] => [false, true, false]
const isLargestNumber = function (largestNumber) {
  return function (number) {
    return number === largestNumber;
  };
};
const markLargestNumber = function (numbers) {
  return numbers.map(isLargestNumber(Math.max(...numbers)));
};
console.log('Expected: [false, true, false]');
console.log('Actual:', markLargestNumber([1, 3, 2]));
console.log = function () { };