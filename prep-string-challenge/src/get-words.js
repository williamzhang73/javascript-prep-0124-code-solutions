/* exported getWords */
function getWords(input) {
  if (input.length === 0) {
    return [];
  } else {
    return input.split(' ');

    //why this code snippits does not work?
    /*     getWords= input.split(' ');
    return getWords; */
  }
}
