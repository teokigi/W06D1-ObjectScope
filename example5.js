const scenario = {
  murderer: 'Miss Scarlet',
  room: 'Kitchen',
  weapon: 'Candle Stick'
};

const changeWeapon = function(newWeapon) {
  scenario.weapon = newWeapon;
}

const declareWeapon = function() {
  return `The weapon is the ${scenario.weapon}.`;
}

changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);

//pseudo
// create a module scoped constant variable object called scenario.
// assign a hash to it with 3 key/value sets.
// create a constant variable called changeweapon and assign a anonymous function
// to it with parameter new weapon.
// changes the module scoped scenario variable with key weapon to parameter newweapon
// create a constant variable declareweapon with anonymous function assigned to it
// function returns an interpolated string with scenario variables weapon value.

// call change weapon and pass the string 'revolver'
// create a const verdict and assign to it the result from running declareweapon
// print to console verdict constant

//predicted:
// The Weapon is the Revolver.
//actual:
// as predicted

//reasoning:
//changeweapon changes weapon successfully.
// so on call in line 12, weapon is revolver.
