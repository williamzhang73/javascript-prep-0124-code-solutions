/* exported capitalize */
function capitalize(input) {
  let capitalizedInput = '';
  for (let i = 0; i < input.length; i++) {
    if (i === 0) {
      capitalizedInput = capitalizedInput.concat(input[i].toUpperCase());
    } else {
      capitalizedInput = capitalizedInput.concat(input[i].toLowerCase());
    }
  }
  return capitalizedInput;
}
