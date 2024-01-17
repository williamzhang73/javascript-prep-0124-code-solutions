/* exported compact */
function compact(array) {
  const compactArray = [];
  for (const element of array) {
    //console.log(element);
    if (Boolean(element)) {
      compactArray.push(element);
    }
  }
  return compactArray;
}
//compact([2, 3, 'f']);
