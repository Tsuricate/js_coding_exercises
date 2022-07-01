// Spread Syntax Bonus activity

const printColours = (colours) => {
  if (!colours) throw new Error("colour is required");
  // Your solution using the spread operator here!
  return [...colours];
};

const shoppingList = (list, newItem) => {
  if (!list) throw new Error("list is required");
  if (!newItem) throw new Error("newItem is required");
  // Your solution using the spread operator here!
  return [...list, ...newItem];
};

const highestNumber = (numbers) => {
  if (!numbers) throw new Error("numbers are required");
  // Your solution using the spread operator here!
  return Math.max(...numbers);
};

const splitThatString = (string) => {
  if (!string) throw new Error("string is required");
  // Your solution using the spread operator here!
  return string?.split('');

};

// Optional Chaining Bonus activity!

const addressLookUp = (user) => {
  if (!user) throw new Error("user is required");
  // Your solution using optional chaining here!
  return user.address?.postcode;
};

module.exports = {
  printColours,
  shoppingList,
  highestNumber,
  splitThatString,
  addressLookUp,
};
