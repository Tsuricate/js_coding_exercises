/**
 * Capitalizes a string (ex: "hello" => "Hello")
 * @param {string} word - The word to capitalize.
 * @return {string}
 */
const capitalize = (word) => {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!

  const firstLetterInUppercase = word.slice(0, 1).toUpperCase();
  const rest = word.slice(1);
  return firstLetterInUppercase.concat(rest);
};

/**
 * Converts a person's name to initials (ex: ("Roger","Sterling") => "R.S")
 * @param {string} firstName - Person's firstname.
 * @param {string} lastName - Person's lastname.
 * @return {string}
 */
const generateInitials = (firstName, lastName) => {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!
  return firstName[0] + '.' + lastName[0];
};

/**
 * Adds VAT to a given price using given VAT rate
 * @param {number} originalPrice - The original price (tax-free).
 * @param {number} vatRate - The VAT rate (expressed as percentage) to apply (ex: 20 for 20% VAT).
 * @return {number}
 */
const addVAT = (originalPrice, vatRate) => {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!
  const taxPrice = originalPrice * (vatRate / 100);
  return Number((originalPrice + taxPrice).toFixed(2));
};

/**
 * Gets price after reduction
 * @param {number} originalPrice - The original price (tax-free).
 * @param {number} reduction - The reduction (expressed as percentage) to apply (ex: 50 for 50% discount).
 * @return {number}
 */
const getSalePrice = (originalPrice, reduction) => {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!
  const reductionAmount = (reduction * originalPrice) / 100;
  return Number((originalPrice - reductionAmount).toFixed(2));
};

/**
 * Gets the middle character of a given string
 * @param {string} str - String to process
 * @return {string}
 */
const getMiddleCharacter = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
  const isEven = str.length % 2 === 0;
  if (!isEven) {
    const middleCharacterIndex = Math.trunc(str.length / 2);
    return str[middleCharacterIndex];
  }
  else {
    const middleIndex = str.length / 2; 
    return str.slice(middleIndex - 1, middleIndex + 1 )
  }

};

/**
 * Reverses letters in a given word
 * @param {string} word - Word to reverse
 * @return {string}
 */
const reverseWord = (word) => {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  return [...word].reverse().join('');
  // return word.split('').reverse().join('');
};

/**
 * Reverses letters of a given list of words
 * @param {Array<string>} words - Words to reverse
 * @return {Array<string>}
 */
const reverseAllWords = (words) => {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
  return words.map((word) => reverseWord(word));
};

/**
 * Returns the number of given users that are Linux users
 * @param {Array<User>} users - List of users
 * @return {number}
 */
const countLinuxUsers = (users) => {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
  return users.filter((user) => user.type === 'Linux').length;
};

/**
 * Returns the mean score of given scores
 * @param {number[]} scores - List of scores
 * @return {number}
 */
const getMeanScore = (scores) => {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
  const totalScore = scores.reduce((accumulator, currentScore) => {
    return accumulator + currentScore;
  }, 0);
  return Number((totalScore / scores.length).toFixed(2));
};

/**
 * Checks if a number is divisible by 3 or 5
 * @param {number} n - Number to check
 * @return {string|number}
 */
const simpleFizzBuzz = (n) => {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
  const divisibleBy3 = n % 3 === 0;
  const divisibleBy5 = n % 5 === 0;
  
  if ( divisibleBy5 && divisibleBy3) return 'fizzbuzz';
  if (divisibleBy3) return 'fizz' ;
  if (divisibleBy5) return 'buzz' ;
  return n;
};

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz,
};

/**
 * An operating-system user
 * @typedef {Object} User
 * @property {string} name - User name
 * @property {string} OS - Operating system name
 * @property {string} type - Type of operating system.
 */
