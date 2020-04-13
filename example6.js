let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

//pseudo
//create module scoped variable called murderer and assign to it string
// create constant anonymous function called changemurderer.
// in it, assign murderer with new string.
// create a block scoped constant anonymous function called plotwist.
// in it , assign murderer with new string
// run plot twist, and end function

// create a anonymous function called declaremurderer thats a constant
// in it, return a interpolated string with murderer variable.

//run changemurderer function,
// create a variable verdict and assign results from running declaremurderer
// print to console verdict.

//predicted:
//The murderer is Mrs White

//actual:
//as predicted

//reasoning:line 4 and 7 both change module scoped murderer.
// line 7 runs last. so in line 14 murderer is mrs white.
