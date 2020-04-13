let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

//pseudo:
//create a let variable called murderer and assign professor plum to it.
//create a constant variable called declaremurderer with anonymous function
//assigned to it, inside the scope redeclare murderer and give it a new,
//double declaration will flag an error here.
//string mrs peacock.
// return the murderer is mrs peacock.
// create a constant variable called firstverdict and assign to it the result
// of calling declaremurderer.
// print to console 'first verdict' and the variable firstverdict.
//create a constant variable called secondverdict and assign to it a interpolated
//string with 'the murderer is' then insert the variable murderer.
//print to console the 'second verdict' with the variable first verdict.

//predict:
// will break on line 4 and stop working.
//if fixed both verdicts will result in mrs.peacock.

//actual:
//no errors, first verdict murderer is mrs.peackock
// second verdict murderer is professor plum

//reasoning:
//seems the second let declares a scoped variable, that ignores the module scoped
//variable with the same name.
