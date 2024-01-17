/* exported isLowerCased */
function isLowerCased(input) {
  const toLowerCased = input.toLowerCase();
  if (toLowerCased === input) {
    return true;
  } else {
    return false;
  }
}
