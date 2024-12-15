// console.info("Connected");
// var <name> = <value>;

/* This is 
an example of
multi-line comment
*/

// Declaring a variable in JS

// What is a variable?
// Variable is a data container which is used to store information. The information can be anything, like your name, age, contact, etc.

// It is a data container which holds some values in it.


// Types of variable in JS
// var, let & const

// What is var keywords

// It is a method of declaring a variable in js.

var firstName; //nothing stored in this variable as of now. This process is known as declartion of variable.
firstName = "Adil"; // firstName variable is now storing "Adil" in it. This process is known as initialization of a variable.
// console.log(firstName); //Adil

// Features or Drawback

// Re-declaration is allowed
// Any variable decalred using var keyword can be re-declared.

// var firstName; 
// firstName = "Raja";
// console.log(firstName);

// firstName = "Naveen";
// console.log(firstName);

// Scope of a variable

// Global Scope
// Ḷocal Scope
// Block Scope


// {
//     var myName = "Ram";
// }


// console.log(myName); // a variable decalred using var keyword inside a block can be accessed outside of the block as well.
// var does not have block scope.

// It is global in nature.


// Variable Naming

// Allowed Namings -
// var userName; - Best practice
// var ageGroup5
// var $URI
// _valueMark

// Not allowed -

// let user_name - bad practice
// var let keywords are not allowed
// var new-user not allowed
// var 20Players not allowed

// let keyword

// Let keyword is used to declare a variable
// let newFile = "myFile"; //Global Variable

// {
//     let x = 10; //local variable or block variable
//     console.log(newFile);
// }


// console.log(x); //we cannot access a block variable declared using let keyword outside the block. We will get reference error

// Re-declaration in let is not allowed

// let x = 309;
// console.log(x);

// let x = 781;
// console.log(x); // We will get SyntaxError

// Reaassignment is allowed in let keyword
// you can reassign the value of a variable declared using let keyword
// x = 881;
// console.log(x)

// let x; // variable declaration
// x = 472; //value assignment
// This is accepted in let and var.

// const - constant variable

// constant is an entity whose value cannot be changed.
// variable is something whose value keeps changing.

// const userID = "73489292SID"; // they needs to be initialized with a value at the time of declaration.
// // userId = 47281991; syntax error (Missing initializer in const declaration);
// console.log(userID);

// let and const both are block scoped, accessible only within the block where the variable is declared or defined.

// {
//     const y = 15;
// }

// console.log(y); //Day2.js:118 Uncaught ReferenceError: y is not defined;

// const userId = 3728181;
// userId = 7349201;
// console.log(userId); //Uncaught TypeError: Assignment to constant variable.

// It cannot be re-declared as well.
// const userId = "adasdasd"; //Uncaught SyntaxError: Identifier 'userId' has already been declared.