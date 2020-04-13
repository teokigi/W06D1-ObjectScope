let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

//pseudo:
//create 3 module scoped, with 3 strings assigned to it.
// create anonymous function with name declareAllSuspects.
// create a scoped variable with let called suspectthree.
// return the string with 'the suspects are ' insert miss scarlet,
// professur plum and mrs. peacock.
// create a const suspects and assign function result declareallsuspects
// to it.
//prints to console suspects const variable.
//prints strng with module scoped let variable suspect three, mrs peacock.

//predicted:
// console shows :The suspects are Miss Scarlet, Professor Plum, Colonel Mustard.
// console shows on second line : Suspect Three is Mrs Peacock.

//actual:
//as predicted.

//reasoning:
// line 6 declares a scoped variable suspect three,
// which is used in line 7.
// line 11  function will refer to the scoped variable for the third
// suspect.
// line 12 refers directl to the module scoped variable, which is unrelated
// to the scoped variable in line 6.
