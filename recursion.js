/** product: calculate the product of an array of numbers. */
/*
1. base case - array is empty, return 1
2. pop the last num in array
3. return that multiplied by product(nums)
*/
function product(nums) {
  if (nums.length === 0) return 1;

  return nums.pop() * product(nums);
}

/** longest: return the length of the longest word in an array of words. */
/*
1. base case - array length = 1, return length of item in array
2. call itself -
3. progress - moving onto the next word in the array
*/
function longest(words) {

  if (words.length === 0) return 0;

  let currWord = words.pop();
  let nextWord = longest(words);

  if (currWord.length > nextWord) {
    return currWord.length;
  } else {
    return nextWord;
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) return "";

  return str.slice(0, 1) + everyOther(str.slice(2))
}

/** find: return boolean depending on if val exists in array or not. */

function find(arr, val) {

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr, val) {

}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(arr, val) {

}

// you might find the above two problems easier if you change the function signature to:
//
// function binarySearch(arr, val, left = 0, right = arr.length) {
//
// }


module.exports = {
  product,
  longest,
  everyOther,
  find,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
  binarySearchIndex,
};
