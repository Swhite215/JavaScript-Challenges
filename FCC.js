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
