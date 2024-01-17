/* exported reverseWord */
function reverseWord(input) {
  let reversed = '';
  for (let i = input.length - 1; i >= 0; i--) {
    reversed = reversed.concat(input[i]);
  }
  return reversed;
}
