//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
function listFoods(person) {
    for (var key in person) {
      if (Array.isArray(person[key])) {
        console.log(key + ':');
        for (var i = 0; i < person[key].length; i++) {
          console.log('- ' + person[key][i]);
        }
      }
      
      else if (typeof person[key] === 'object') {
        
        console.log(key + ':');
        for (var innerKey in person[key][0]) {
          console.log('- ' + person[key][0][innerKey]);
        }
      }
    
      else {
        console.log(key + ': ' + person[key]);
      }
    }
  }
  
  
 listFoods(person3);
  



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  printInfo = () => {
    return `Name ${this.name} \n Age: ${this.age}`;
  };

  addAge = () => {
    this.age += 3 ;
  };

  getOlder = () => {
    let count = 0; 
    return () => {
      count++;
      this.addAge(1);
      console.log(`${this.name} is now ${this.age} years old.`);
    };
  };
}

let william = new Person("William", 27);
let julia = new Person("Julia", 28);

console.log(william.printInfo());

william.addAge();
console.log(william.printInfo()); 

console.log(julia.printInfo());

const williamGetOlder = william.getOlder();
williamGetOlder(); 
williamGetOlder(); 
williamGetOlder(); 

const juliaGetOlder = julia.getOlder();
juliaGetOlder(); 
juliaGetOlder(); 




// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function stringLength(str) {
  return new Promise((resolve, reject) => {
    if (str.length > 10) {
      resolve("Big word");
    } else {
      reject("Small number");
    }
  });
}

stringLength("Today is a sunny day.")
  .then((result) => console.log(result)) 
  .catch((error) => console.log(error));

stringLength("Hello.")
  .then((result) => console.log(result))
  .catch((error) => console.log(error)); 


  //===== CodeWars Problem 1 - Area or Perimeter ===== // 

  const areaOrPerimeter = function(l , w) {
    if (l === w) {
      return l * w
    } else { 
      return 2 * (l + w)
    }
  }; 
  
  console.log(areaOrPerimeter(4,4));


  //===== CodeWars Problem 2 -- BMI ============/

  function bmi(weight,height) {
      const x = weight/(height ** 2) 
      if (x <= 18.5)
        return "Underweight";
      if (x <= 25.0)
        return "Normal";
      if (x <=30.0)
        return "Overweight";
      return "Obese"
    };
    
    