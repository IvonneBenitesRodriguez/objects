// creating a class blueprint named Auto which is our base for everything
class Auto {
  // here we are creating our Auto properties
  constructor(color, brand, model, yearBuilt, price, fuel, sensorIntelligent) {
    // we are refering the Auto using keyword named this
    this.color = color;
    this.brand = brand;
    this.model = model;
    this.yearBuilt = yearBuilt;
    this.price = price;
    this.fuel = fuel;
    this.sensorIntelligent = sensorIntelligent;
  }
  // we are creating a method named move
  move(withSensor, withoutSensor) {
    this.moveWithSensor = withSensor;
    this.moveWithoutSensor = withoutSensor;
  }
}
//I am exporting this class created so i can use it in another file:
//I use the keyword named module which is specified in my package.json file
// this module.exports help me to use the Auto class and import it
// in another files
module.exports = Auto;
