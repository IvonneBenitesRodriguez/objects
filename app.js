const dog = {
  name: "Lucas",
  age: "8",
  bread: "fox terrier",
  color: "white and brown",
  address: {
    city: "Lima",
    country: "Peru",
  },

  //Methods of an object :

  bark: function (barkStatus1, barkStatus2) {
    this.barkStrong1 = barkStatus1;
    this.barkStrong2 = barkStatus2;
  },

  runFast: function (runLeft, runRight) {
    this.left = runLeft;
    this.right = runRight;
  },

  play: function (playWithKids, playWithAdults) {
    this.withKids = playWithKids;
    this.withAdults = playWithAdults;
  },

  run: function (temperament1, temperament2) {
    this.temperamentInThePark = temperament1;
    this.temperamentInTheBeach = temperament2;
  },
};

//calling the methods

dog.bark("barkWeak", "barkLoud");
console.log(dog.barkStrong1);
console.log(dog.barkStrong2);

dog.runFast("slow", "fast");
console.log(dog.left);
console.log(dog.right);

dog.play("active", "calm");
console.log(dog.withKids);
console.log(dog.withAdults);

dog.run("happy", "sad");
console.log(dog.temperamentInThePark);
console.log(dog.temperamentInTheBeach);

//calling the object's properties

console.log(dog.name);
console.log(dog.age);
console.log(dog.bread);
console.log(dog.color);
console.log(dog.address);

//Template literals used in this paragraph:

const story = `This is the story of ${dog.name} who lived in ${dog.address.city} which is the capital of ${dog.address.country},
${dog.name} used to ${dog.barkStrong1} depending of the person who he used to met.
Everytime ${dog.name} used to visit the beach and the park, he was ${dog.temperamentInThePark}.`;

console.log(story);
