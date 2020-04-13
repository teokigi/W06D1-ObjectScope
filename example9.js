// create a module scoped let variable called murderer assigned with string.
let murderer = 'Professor Plum';
// if murderer variable is strictly equal to string, then
// create a new scoped murderer variable assigned with string.
if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}
//create anonymous function called declare murderer
const declareMurderer = function() {
// return function result as interpolated string with module scoped murderer variable.
  return `The murderer is ${murderer}.`;
}
//create a constant variable called verdict and assign result of declaremurderer
//to it
const verdict = declareMurderer();
//print result
console.log(verdict);

//predicted:
//The murderer is Professor Plum

//actual:
// as predicted

//reasoning:
// line 6 doesn't change the module scoped variable only creates a new
// scoped variable with a string. and is never used
