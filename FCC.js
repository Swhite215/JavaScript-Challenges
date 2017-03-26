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
