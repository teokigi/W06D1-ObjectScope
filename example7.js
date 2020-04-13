//pseudo create module scoped variable murderer and assign to it string

let murderer = 'Professor Plum';
// create anonymous function called changemurderer,
const changeMurderer = function() {
  // in it change murderer,
  // variable to mr.green.
  murderer = 'Mr. Green';
  // create a anonymous function called plotwist,
  const plotTwist = function() {
    // create a scoped variable,
    // called murderer with string assigned to it.
    let murderer = 'Colonel Mustard';
    // create a anonymous function called unexpectedoutcome,
    const unexpectedOutcome = function() {
      // change scoped murderer
      // to new string.
      murderer = 'Miss Scarlet';
    }
  // run unexpected outcome, before ending plot twist.
  unexpectedOutcome();
  }
// run plottwist. before ending change murderer.

  plotTwist();
}

// create anonymous function declare murderer and in it print to console.

const declareMurderer = function() {
  // interpolation of a string with module scoped murderer variable.
  return `The murderer is ${murderer}.`;
}
//run changermurderer, run declaremurderer and assign returning result to
changeMurderer();
// new constant verdict.
const verdict = declareMurderer();
// print verdict.
console.log(verdict);



//predicted:
// the murderer is mr green.

//actual:
//as predicted.


//reason:
//line 8 changes module scoped variable murderer to new string.
//line 13 creates a new scoped variable murderer with a string in it,
// this doesn't change module scoped variable murderer.
// line 18 is still refering to the scoped variable murderer.
// ultimately delcaremurderer only refers to the module scoped variable.
