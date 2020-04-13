const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Library',
  weapon: 'Rope'
};

const declareMurderer = function() {
  return `The murderer is ${scenario.murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);


//Pseudo:
// create a constant hash object called 'scenario' scoped to module.
// with the keys, murderer, room,weapon with values. Miss Scarlet, Library and Rope.
// create a constant function called declareMurderer.
// if the program is called, the function returns a interpolated string
// 'The Murderer is Miss Scarlet.
// create a constant verdict, call declareMurderer and assign the functions result
// to verdict.
// prints verdict to console. which should state 'The Murderer is Miss Scarlet'

// predicted:
//'The Murderer is Miss Scarlet'

// actual:
//'The Murderer is Miss Scarlet'

//reasoning:
//line 12 just calls up the declaremurderer function.
// which solely asks for the murderer and interpolates in the murderer
// scarlet.
