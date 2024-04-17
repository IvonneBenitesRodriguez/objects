//Already created the Auto class now i am importing this class in a new file
//so i can create according the blueprint a new object
// we need to use require to import the Blueprint made before in Auto.js file
// the blueprint created named Auto is our base for everything
//As you see we are directly creating our auto's model

// creating auto1 version
const Auto = require("./Auto.js");
const auto1 = new Auto("red", "Volkswagen", "Golf", 1998, 13000, "Gas", true);
console.log(auto1);
console.log((auto1.moveWithSensor = "yes"));

const article = `Today we have launched our new ${auto1.brand}, its model is ${auto1.model},
its fabulous color ${auto1.color} make it remarkable and it only costs ${auto1.price} dollars.
Believe it or not, some people ask if it moves with an intelligent sensor,
Does it moves with an intelligent sensor... ${auto1.moveWithSensor}`;

console.log(article);

//Another example: creating a new auto with the blueprint already defined named Auto
//and using the keyword new
//creating auto2 version
const auto2 = new Auto("blue", "tesla", "Humble", 2024, 889000, "Water", true);
console.log(auto2);
console.log((auto2.moveWithSensor = "yes"));

//using template literals to call all our object properties:

const article2 = `Being humble is not for this ${auto2.brand} version,
this fantastic ${auto2.color} ${auto2.yearBuilt} ${auto2.brand} is
only for those who search more than conventional, if not can you imagine the
${auto2.fuel} as fuel? no way! and if you are asking yourself if this is a
revolutionary auto ... ${auto2.moveWithSensor}`;
console.log(article2);
