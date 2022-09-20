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
//prevwordlength
  if (currWord.length > nextWord) {
    return currWord.length;
  } else {
    return nextWord;
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) return "";

  return str.slice(0, 1) + everyOther(str.slice(2));
}

/** find: return boolean depending on if val exists in array or not. */
// basecase - array.length === 0
// callback, pop, check if equal to val
function find(arr, val) {
  if (arr.length === 0) return false;
  let currWord = arr.pop();
  if (currWord === val) return true;
  else return find(arr, val);
}
//can check if arr[0] === val

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) return true;
  let len = str.length - 1;
  if (str[0] === str[len]) {
    return isPalindrome(str.slice(1, len));
  }
  return false;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0) return "";
  let last = str.length - 1;
  return str[last] + revString(str.slice(0, last));
}
//or reverse, concat w str[first]
/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (i === arr.length) return -1;
  if (arr[i] === val) return i;
  return findIndex(arr, val, i + 1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, strings = []) {
  for (let key in obj) {
    if (typeof obj[key] === "string") strings.push(obj[key]);
    else if (typeof obj[key] === "object") {
      gatherStrings(obj[key], strings);
    }
  }
  return strings;
}

// FURTHER STUDY

/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */
// basecase -
// divide array in half, get middle idx
// slice
// slice time complexity?

function binarySearch(arr, val, ptL=0, ptR=arr.length-1) {
  // let idx = Math.floor(arr.length / 2);
  // if (arr.length === 0) return false;
  // if (arr[idx] === val) return true;
  // if (val > arr[idx]) {
  //   return binarySearch(arr.slice(idx + 1), val);
  // } else {
  //   return binarySearch(arr.slice(0, idx), val);
  // }

  let idx = Math.floor((ptL+ptR) / 2);
  if (arr[idx] === val) return true;
  if (arr.length === 0 || ptL >= ptR) {
    return false;
  }

  if (val > arr[idx]) {
    return binarySearchIndex(arr, val, idx+1, arr.length-1);
  } else {
    return binarySearchIndex(arr, val, 0, idx);
  }
}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */


function binarySearchIndex(arr, val, ptL=0, ptR=arr.length-1) {
  let idx = Math.floor((ptL+ptR) / 2);
  if (arr[idx] === val) return idx;
  if (arr.length === 0 || ptL >= ptR) {
    return -1;
  }

  if (val > arr[idx]) {
    return binarySearchIndex(arr, val, idx+1, arr.length-1);
  } else {
    return binarySearchIndex(arr, val, 0, idx);
  }
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
