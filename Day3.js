// Data Types
// There are two types of data types in js:
// 1. Primitive Data types
// 2. Reference Data types

// Primitive data types are most basic data types in js,

// 1. Number: It represents both integer and floating point number
// let num = 18;
// let krish = 10;
// console.log(typeof krish);
// krish = "Krishnan";
// console.log(typeof krish);

// 2. String:  It is a sequence of characters
// let firstName = "Tushar";
// console.log(firstName + " is a",typeof firstName);
// console.log(typeof firstName);

// 3. Boolean: It represents a logical entity and can only store two values either 0 or 1 / true or false.
// let isAdmin = false;
// console.log(isAdmin);
// console.log(typeof isAdmin);

// 4. Undefined: It indicates that a variable is declared but has not yet assigned any value.
// let x = null;
// console.log(typeof x)
// console.log(x)


// Reference Values
// 1. Objects - Collections of key-value pairs.

// let obj = {
//     name: "krish",
//     age: 18,
// }

// let user = {
//     name: "Raman",
//     email: "raman@gmail.com",
//     phone: 783929111,
//     country: "India",
//     password: "adfqwee4d@123"
// }
// console.log(user)

// let fruitName1 = "Apple";
// let fruitName2 = "Mango";
// let fruitName3 = "Pineapple";

// let arr = ["Apple","Mango","Pineapple", "Papaya", "Banana"];
// console.log(arr)
// let arr1 = [1,2,4,5,71,6,9];
// console.log(arr1)

// let users = [
// {
//     name: "Sudhanshu",
//     age:34
// },
// {
//     name: "Prakhar",
//     age:23
// },
// {
//     name: "Tushar",
//     age:36
// },
// {
//     name: "Rinki",
//     age:25
// }

// ];

// console.log(users);

// Date - With this we create instance of the date object
// let today = new Date();
// console.log(today);

// Type conversion ->  Converting data types using built in functions
// String conversion
// let num = 212;
// console.log(typeof num)
// let str = String(num);
// console.log(typeof str);

// Number Conversion
// let name = "Tushar";
// let num = Number(name);
// console.log(num);
// console.log(typeof num);

// boolean conversion
// let str = null;
// let bool = Boolean(str);
// console.log(bool);
// console.log(typeof bool);

// Expression or Operators

// x+y = 2 //expression
// 1+1 = 2
// 3+ (-1) = 2

// x,y -> operands, + -> operator

// Assignment operator (=): It is used to assign a value to a variable.
// let x = 100;
// let y = 200;
// let z = (x + y)*(44.2);

// console.log(z);

// Addition Operator (+=)
// let firstName = "Tushar";
// let lastName = "Nagaraj";

// console.log(firstName+' '+lastName);

// Subtraction Operators (-=)
// let a = 4;
// a-=3;
// console.log(a);

// Remainder assignment (%=)

// let a = 10;

// console.log(a%=2);
// console.log(a)

// Relational Expressions
// let a = 78382127483;
// let b = 78381194333;
// let isGreater = a < b;
// console.log(isGreater);


// let a = true;
// let b = true;

// let andOutput = a&&b; //true
// console.log(andOutput);
// b = false;
// andOutput = a&&b; //false
// console.log(andOutput);

// let ouResult = a||b;
// console.log(ouResult);
// b = true;
// console.log(ouResult);

// let a = 10;
// let b = "10";
// console.log(a===b);

// let a = 5;
// ++a; - prefix increment operator 
// let b = a++;
// console.log(b);

// Control Flow Statements
// They decide tthe direction in which a program's code is executed.

// If else

// if - It executes a block of code of a specified condition is true.
// else -  it will run in case when if statement is false.

// let age = 17;

// if (age >= 18){
//     console.log("You are eligible.");
// }else {
//     console.log("You are not eligible.");
// }

// Switch Statements

// let day = "Wed";
// switch(day){
//     case "Monday":
//         console.log("Start of the week");
//         break;
//     case "Wed":
//         console.log("Middle of the week, weekend's almost there!");
//         break;
//     case "Friday":
//     console.log("Its end of the week");
//     break;
//     default:
//         console.log("Just another day");
// }  


// Loops in JS

// for loop

// for( init; condtion; increment/decrment){
//     // block of code
// }

// for(let i=1; i<=10; i++){
//     console.log(i);
// }


// while loop
// while(condition){

// }

// let i = 1;
// while(i<=10){

//     if(i%2==0)
//     {
//         console.log(i);
//     }
//     i++;
// }

// do while
// let i =1;
// do {
//     console.log(i);
//     i++;
// } while(i <= 10);

// let marks = [67,90,42,64,98,62];

// let users = ["Ram","Mohan","Adil","Rohan","Ramesh"];
// // console.log(marks);

// for (let user of users ){
//     console.log(user);
// }


// let user = {
//     name: "Raman",
//     email: "raman@gmail.com",
//     phone: 783929111,
//     country: "India",
//     password: "adfqwee4d@123"
// }


// console.log(user['password']);


// for(let key in user){
//     console.log("The "+key+" of the user is "+user[key]);
// }


// Arrays: An array is data structure that can hold multiple values at a time. These values can be of any type, number, string, objects, array or objects.
            //  0       1        2       3        4
// let arr = ['Adil','Tushar','Raman','Ankit','Harshit'];

// common array methods

// push() -> Add one or more elements to the end of an array
// arr.push('Ramesh');
// console.log(arr);

// arr[2] = "Shuhani";

// arr[2] = "Akshay";
// console.log(arr);


// let newArray = ['Apple','Mango', 'Orange','Pineapple','Banana'];
// // newArray[2] = "Berry";

// console.log(newArray);

// newArray.push('Guava');
// newArray.push('Pears');

// newArray.pop(); // It removes the last element from the array.

// newArray.shift(); //Removes the element from start of an array.
// newArray.unshift("Kiwi"); //Adds element at the start of an array.

// console.log(newArray);
// 0 1 2 3  4 5  
// 1,2,3,7, 4,5


// let numbers = [1,2,3,4,5,6,7,8,9];

// numbers.splice(Start, deleteCount, item1, item2,..);


let newArray = ['Apple','Mango', 'Orange','Pineapple','Banana'];
// let removedElements = newArray.splice(1,2);
// console.log(newArray);
// console.log(removedElements);
newArray.splice(1,0,"Cherry");
console.log(newArray);







