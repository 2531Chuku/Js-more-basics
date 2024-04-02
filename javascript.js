/*Pattern to organize code
Plain Old JavaScript Objects and Object Constructors
Factory Functions and the Module Pattern
Classes
ES6 Modules*/ 

// object literal syntax, dot notation and brackets notation
const Phone = {
  color: 'Black',
  model : 'Samsung',
  "Phone Color": function(){
    return this.color;
  }
}
Phone["Phone Color"]; // access using brackets
Phone.color  // access using dot

const Player = {
  name : 'Dp',
  maker : 'X',
  "getName" : function(){ return this.name},
  winningPlayer(){
    return `winner is ${this.name}`;
  }
}
// prototype is another object(methods and properties)
// built in object/ constructor

function Truck(name){
  this.name  = name;
}
Truck.prototype.startEngine = function(){
  return `the engine  is running`;
}

const Truck1 = new Truck();
Truck1.startEngine();

// Do a book shelf , add && remove a book, add a button  for a read status

/*Describe the scope of a variable.
Explore what closures are.
Briefly consider the disadvantages of using constructors.
Discuss Factory functions with examples.
Discuss Private variables and functions concerning factory functions.
Showcase object inheritance with the help of factory functions.
Describe what module pattern and IIFEs are.
Discuss encapsulation and how the module pattern helps with namespacing.*/ 

export{
  Player,
  Truck
}