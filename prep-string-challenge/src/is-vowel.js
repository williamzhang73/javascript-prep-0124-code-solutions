/* exported isVowel */
function isVowel(input) {
  const vowels = 'aeiouAEIOU';
  if (vowels.includes(input)) {
    return true;
  } else {
    return false;
  }
}
