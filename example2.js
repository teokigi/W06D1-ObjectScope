// const murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//Pseudo
// create constant string called murderer,
// create a anonymous function called changeMurderer, on call
// changes the muderer variable to 'Mrs. Peacock'
// create a anonymous function called declareMurderer, on call
// returns a interpolated string, 'The Murdeer is ' then insert contents
// of murderer variable.
// run change murderer function, create a variable called verdict
// and assign the result of running declaremurderer function, to verdict
// print the string in verdict to console.

//Predicted:
//'The murderer is Professor Plum'

//Actual:
//error sprung from trying to assign a new string to a constants variable.

//Solution:
// const string cannot be reassigned.
// would have to use let, if murderer needs to be changed.

let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
