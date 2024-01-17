/* exported isUpperCased */
function isUpperCased(input) {
  const upperCased = input.toUpperCase();
  if (input === upperCased) {
    return true;
  } else {
    return false;
  }
}
