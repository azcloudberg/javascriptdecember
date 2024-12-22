// console.log("Connected...");

// let fruits = ['Apple','Mango', 'Orange','Pineapple','Banana'];
// let moreFruits = ['Pear', 'Kiwi'];

// concat(): It merges two or more arrays into a new array.
// let allFruits = fruits.concat(moreFruits);
// console.log(allFruits);

// forEach():  Use it to iterate over the arrays. It does not return any value.

// arryaName.forEach(callback( currentValue, index, array)


// function functionNam(parameters){
//     return value;
// }






// const myFunction = () => {

// }


// fruits.forEach((fruit, index) => {
//     console.log(fruit, index);
// })


let nums = [2,3,61,7,83,35];
// let sum = 0;
// nums.forEach((num,index) => {
//         // console.log(num*(index * 23))
//         sum+=num;

// });

// console.log(sum);

// let pos = nums.findIndex(num => num === 35);
// console.log(pos);

// let sortedArray =  nums.sort();
// console.log(nums.sort(function(a,b){
//     return a>b;
// }));

// let fruits = ['Apple','Mango', 'Orange','Pineapple','Banana'];
// console.log(fruits.sort());

// Objects in JS: An object in js is a collection of key-value pairs, where each key is a unique identifier which has some value associated with it.

// let obj = {
//     key: value, //property
// }

// let person = {
//     name: "Tushar",
//     age: 25,
//     isAdmin: false,
//     isStudent: true,
//     email: "tushar@gmail.com",
//     "phone number": 78399101739
// }

// Accessing the properties of an object:

// 1. Dot Notation:
// let personName = person.name;
// console.log(personName);


// 2. Backet Notation:
// let personPhone = person['phone number'];
// console.log(personPhone);

// Adding or updating a property

// person.followers = 20346;
// person.followings = 645;
// person['phone number'] = 6787901243;

// console.log(person);

// Using for in loop to iterate over an object
// for (let key in person){
//     console.log(person[key]);
// }

// Using forEach to iterate over an object
// Object.keys(person).forEach(key => {
//     console.log(person[key]);
// })


// Deleting a property

// delete person['phone number'];


// let blog = {
//     blogTitle: "Azure new updates - 2024",
//     blogDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolorem animi, delectus voluptas quidem fuga perferendis magnam temporibus reiciendis ea!",
//     createdAt: "20/12/2024",
//     id:1,
//     createdBy: "Tushar"
// }


// Check keys of an object
// let keys = Object.keys(blog)
// console.log(keys);

// print the values of key

// console.log(Object.values(blog))

// check a specific property

// console.log(blog.hasOwnProperty('createdBy'));

// Functions

// function sum(num1,num2){
//     return num1+num2;
// }

// function subtract(a,b){
//     return a-b;
// }

// function greet(greeting){
//     console.log(greeting);
// }

// greet("Hi everyone!");
// console.log(subtract(100,13));
// console.log(sum(20,30));
// console.log(sum(153,543));


// Function as values:
// Functions in js are first-class citizens.
// They can:

//  be stored in a variable.
// Passed as an argument to other functions.
// They can be returned from other functions.

// const square = function (a){
//     return a*a;
// }

// function applyFn(fn, value){
//     return fn(value);
// }

// console.log(applyFn(square, 5));


// Arrow Functions: Shorthand way of writing functions.

// const sum = (num1,num2) => {
//     return num1+num2;
// };

// const add = (a,b) => a+b;

// DOM (Document Object Model) Manipulation is bascially interacting with the structre of a websiet or it html code. 


// DOM Basics
// Select Elements
// Read or change their properties
// React to the user events


// Selecting Elements

// const title = document.getElementById('heroSectionTitle');
// heroSectionTitle.innerHTML = "<span>Welcome to the session</span>";


// add class

// title.classList.add("myTitle")
// title.classList.remove("myTitle")
// title.classList.toggle("hidden")

// const container = document.getElementById('container');
// console.log(container);
// const newParagraph = document.createElement("p");
// newParagraph.textContent = "Hi this is a new paragraph!";
// container.appendChild(newParagraph);

// const title = document.getElementsByClassName("title");
// console.log(title)


// const allParagraphs = document.getElementsByTagName('p');
// console.log(allParagraphs);

// const subTitle = document.querySelectorAll(".card");
// console.log(subTitle);

// Event listeners


const btn = document.getElementById('getStartedBtn');

function updateMyText(e){
    const title = document.getElementById('heroSectionTitle');
    title.innerHTML = `<span>${e}</span>`;
}

btn.addEventListener("click", () => {
    console.log("Clicked");
    updateMyText();
});



const input = document.getElementById('inputId');
input.addEventListener('keyup', (e) => {
    console.log(e.target.value);
    updateMyText(e.target.value);
})

const card1 = document.getElementById('card1');
card1.addEventListener("mouseover", () => {
    console.log("Mouse entered the first card")
})


// API (Application programming Interface) -> 
// let arr = [];
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => {
//     if(!response.ok)
//     {
//         throw new Error("Network Error");
//     }
//     return response.json();
// }).then (data => {
//    arr.push(data);
// }).catch(error => {
//     console.log('There was an error accessing', error);
// })

// console.log(arr)

// arr.forEach(data => {

// })


async function fetchPosts() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if(!response.ok){
            throw new Error('Network Error');
        }
        const data = await response.json();
        console.log(data);
    } catch(error){
        console.log(error);
    }
}

fetchPosts();