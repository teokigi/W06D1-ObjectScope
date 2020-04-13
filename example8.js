//create a module scoped constant object with 3 key/values.
const scenario = {
  murderer: 'Mrs. Peacock',
  room: 'Conservatory',
  weapon: 'Lead Pipe'
};
//create anonymous function called change scenario
// change module scoped constant scenario's murderer and room key.

const changeScenario = function() {
  scenario.murderer = 'Mrs. Peacock';
  scenario.room = 'Dining Room';
  // within changescenario function, declare anonymous function.
  // with one parameter called room
  // called plotwist, in it,
  const plotTwist = function(room) {
	//if the module scoped scenario's room value
	// is strictly equal to room variable then change murderer to new string.
    if (scenario.room === room) {
      scenario.murderer = 'Colonel Mustard';
    }
	// within plotwist function create a new anonymous function called
	// unexpected outcome with murderer as parameter
    const unexpectedOutcome = function(murderer) {
      // in it, if scenario's murderer is strictly equal to parameter murderer
      if (scenario.murderer === murderer) {
        // then change scenario's weapon to candle stick.
        scenario.weapon = 'Candle Stick';
      }
    // end unexpectedoutcome function
    }
    //run unexpected outcome function with parameter colonel mustard.
    unexpectedOutcome('Colonel Mustard');
  //end plotwist function.
  }
  // run plotwist function with parameter dining room.
  plotTwist('Dining Room');
}
// create anonymous function called declareweapon.
const declareWeapon = function() {
// return interpolated string with scenario's weapon value.
  return `The weapon is ${scenario.weapon}.`
}
//run changescenario
changeScenario();
//create a const called verdict and assign returning result from declareweapon function
const verdict = declareWeapon();
//print verdict to screen.
console.log(verdict);

//predicted:
//The weapon is candle stick
//actual:
// as predicted

//reasoning:
//scenario's object variables are changable,
// murderer and room changed upon calling changescenario.
//all if's are true therefore, murderer changes and this cascades,
// the second true. which changes the weapon to candlestick
