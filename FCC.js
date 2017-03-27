//Palindrome Challenge
function palindrome(str) {
  // Good luck!
  var compareString = str.replace(/[\W\.,_]/g, "");
  var alteredString = str.replace(/[\W\.,_]/g, "").toLowerCase();

  compareString = compareString.toLowerCase().toLowerCase();
  compareString = reverse(compareString);


  if (alteredString === compareString) {
    return true;
  } else {
    return false;
  }

}

function reverse(str) {
  str = str.split('');
  str = str.reverse();
  str = str.join('');
  return str;
}

//Find Longest Word Challenge

function findLongestWord(str) {
  var splitString = str.split(" ");
  var wordLengths = [];

  for (var i = 0; i < splitString.length; i++) {
    wordLengths.push(splitString[i].length);
  }

  return Math.max.apply(null, wordLengths);
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

//Split on space
//Iterate through the array and calculate each length and push to score array
//Choose max number in that array.

//Title Case Challengefunction titleCase(str) {
  var newString = str.split(" ");

  var upperCase = [];

  for (var i = 0; i < newString.length; i++) {
    upperCase.push(newString[i][0].toUpperCase() + newString[i].slice(1, newString[i].length));
  }

  upperCase = upperCase.join(" ");
  console.log(upperCase);

  return upperCase;
}

titleCase("I'm a little tea pot");


//Split String based on space.
//Iterate through array and upper case each word.
//Join with a space.

//Array of largest
function largestOfFour(arr) {
   var largest = [];

   for (var i = 0; i < arr.length; i++) {
     console.log(arr[i]);
     largest.push(Math.max.apply(null, arr[i]));
   }
  console.log(largest);
  return largest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])


//Confirm the ending
function confirmEnding(str, target) {
  var length = target.length;

  var newString = str.substr(str.length - length, str.length);

  if (target === newString) {
    return true;
  } else {
    return false;
  }

}

confirmEnding("Bastian", "n");

//Repeat a String
function repeatStringNumTimes(str, num) {
  if (num > 0) {
    return str.repeat(num);
  } else {
    return "";
  }
}

repeatStringNumTimes("abc", 3);

//Truncate a string function
function truncateString(str, num) {
  if (str.length > num && num > 3) {
    var newString = str.slice(0, num-3);
    newString = newString + "...";
    return newString;
    } else if (str.length > num && num <= 3) {
    var newShortString = str.slice(0, num);
    newShortString = newShortString + "...";
    return newShortString;
    } else if (str.length <= num) {
     return str;
   }

}

truncateString("A-tisket a-tasket A green and yellow basket", 11);

//Splice Practice

function slasher(arr, howMany) {
  arr.splice(0, howMany);
  console.log(arr);
  return arr;
}

slasher([1, 2, 3], 2);

//Mutations
function mutation(arr) {

  var splitOne = arr[0].split('');

  lowerCase(splitOne);

  var splitTwo = arr[1].split('');
  var compareArray = [];

  for (var i = 0; i <splitTwo.length; i++){
      if (splitOne.indexOf(splitTwo[i].toLowerCase()) !== -1) {
        compareArray.push(splitTwo[i]);
        console.log(compareArray);
      }
  }

  if(compareArray.length === splitTwo.length) {
        return true;
      } else {
        return false;
      }
}

function lowerCase(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase();
  }
}
