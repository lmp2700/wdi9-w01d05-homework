// THIS WAS WORKED ON THE FRIDAY IT WAS ASSIGNED AND SAVED, BUT I CANNOT FIND IT ON MY COMPUTER. IT WAS ALSO PUSHED TO GIT IN A WEIRD WAY
// BUT THE FILE IS NOT THERE FOR SOME REASON. WILL BE REDOING THIS AS I HAVE TIME

// I. Variables & Datatypes
// A. Q + A
// How do we assign a value to a variable? const blank = blank
// How do we change the value of a variable? by using "let", we are able to change variables
// How do we assign an existing variable to a new variable? const sumBlank = blank + 1
// Remind me, what are declare, assign, and define? you declare a variable with const, you define a variable after you provide a value and assign is the same as define.
// What is pseudocoding and why should you do it? Pseudocoding is typing out all of your code ahead of time
// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? 70% time should be spent pseudocoding, the rest should be spent actually coding

// --> B. Strings
// Create a variable called firstVariable.
// Assign it the value of the string "Hello World"

// const firstVariable = ('Hello world');
// console.log(firstVariable)

// Change the value of this variable to some number.
// Store the value of firstVariable in a new variable called secondVariable
// Change the value of secondVariable to any string.
// What is the value of firstVariable?
// Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean

// 🔴 Commit.

// C. Booleans
// Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be 
// all be valid JS syntax and not weird things that don't make sense but happen to print true to the console.
//   const a = 4;
//   const b = 53;
//   const c = 57;
//   const d = 16;
//   const e = 'Kevin';

//   console.log(a < b);
//   console.log(c > d);
//   console.log('Name' == 'Name');
//   console.log(true !== false);
//   console.log(false == false == false == false == false == false == true);
//   console.log(false == false)
//   console.log(e == 'Kevin');
//   console.log(a < b < c);
//   console.log(a !== a < d);
//   console.log(48 !== '48');

// D. The farm
// Declare a variable animal. Set it to be either "cow" or something else.
// Write code that will print out "mooooo" if the it is equal to cow.
// Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
// const animal = () => {
// if(animal === 'cow'); {
//     console.log("mooo")
//     }
// }
// animal('cow')

// --> E. Driver's Ed
// Make a variable that will hold a person's age. Be semantic.
// Write code that will print out "Here are the keys", if the age is 16 years or older.
// If the age is younger than 16, a message should print "Sorry, you're too young."
// 🔴 Commit.

// const age = () => {
//     for(let age = 1; age >= 16; age++) {
//         console.log("here are the keys");
//     } if(age < 16) {
//   console.log("Sorry you're too young")
// }
// console.log(age(21))


// II. Loops
// Remember: USE let when you initialize your for loops!
// This is GOOD: for(let i = 0;i < 100; i++)
// This is NO GOOD: for(i = 0; i < 100; i++)

// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive.
// Write a loop that will print out all the numbers from 10 up to and including 400.
// Write a loop that will print out every third number starting with 12 and going no higher than 4000.
// for(let i = 0; i <= 10; i++) {
//     console.log(i)
// }

// for(let i = 10; i <= 400; i++) {
//     console.log(i)
// }

// for(let i = 12; i <= 4000; i += 3) {
//     console.log(i)
// }

// --> B. Get even
// Print out the even numbers that are within the range of 1 - 100.
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number".
// NOT PRINTING EVEN NUMBERS; PRINTING ALL NUMBERS
// const i = 1
// for(let i = 1; i <= 100; i++) {
//     if(i % 2 === 0);
//     console.log(i + ' is an even number')
// }
// 🔴 Commit.

// --> C. Give me Five
// PRINTING ALL NUMBERS AGAIN
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.
// for(let i = 0; i <= 100; i++) {
//     if(i % 5 === 0);
//     console.log('I found a ' + i + ' I found a number. High five!');
//     if(i % 3 === 0);
//     console.log('I found a number. Three is a crowd.')
// }
// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three.
// 🔴 Commit.

// --> D. Savings account
// PRINTING NAN
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.
// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your banck_account should have $10,100 in it.
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let bank_account = 0;
// for(let i = 0; i <= num.length; i++) {
//   bank_account = num[i] + num[i];
// }
// console.log(bank_account)

// 🔴 Commit.

// --> E. Multiples of 3 and 5
// SAYS DO NOT DO, HOWEVER NEED PRACTICE
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000. If a previous question you've done has helpful bits of code in it that partially 
// solves this problem, look back at them.
// You just solved Project Euler problem 1!
// Are you having dejà vu? This just in! From the "Read the entire problem before you start" dept: This problem was on a previous assignment. 
// You may skip it if you've already done it, just include a comment saying that you've already done it. If you've now done the problem 
// twice, perhaps next time you'll read the whole problem before starting it.

// 🔴 Commit.

// III. Arrays & Control flow
// A. Talk about it:
// What are the things in an array called? Elements
// Do Arrays guarantee those things will be in order? Arrays guarantee the order that you put the elements in
// What real-life thing could you model with an array? Breeds of cats

// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes.
// const quotes = ['hi there', 'goodbye', 'how are you']

// C. Accessing elements
// Given the following array const randomThings = [1, 10, "Hello", true]
// How do you access the 1st element in the array?
// Change the value of "Hello" to "World".
// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
// const randomThings = [1, 10, "Hello", true]
// console.log(randomThings[0]);
// randomThings[2] = "world"
// console.log(randomThings)

// D. Change values
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// What would you write to access the 3rd element of the array?
// Change the value of "Github" to "Octocat"
// Add a new element, "Cloud City" to the array.
// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// console.log(ourClass[2])
// ourClass[4] = "Octocat"
// console.log(ourClass)
// ourClass.push('Cloud City')
// console.log(ourClass)

// E. Mix It Up
// Given the following array: const myArray = [5, 10, 500, 20]
// Add the string "Egon" to the end of the array. Add another string of your choice to the end of the array.
// Remove the 5 from the beginning of the array.
// Add the string "Bob Marley" to the beginning of the array.
// Remove the string of your choise from the end of the array.
// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse() method 
// return anything?
// const myArray = [5, 10, 500, 20]
// myArray.push('Egon', 'lovely')
// console.log(myArray)
// myArray.shift()
// console.log(myArray)
// myArray.unshift('Bob Marley')
// console.log(myArray)
// myArray.pop()
// console.log(myArray)
// console.log(myArray.reverse())

// --> F. Biggie Smalls
// PRINTING ALL 'LITTLE NUMBER' AND 'BIG NUMBER' - NO NUMBERS
// Create a variable that contains an integer.
// Write an if ... else statement that:
// console.log()s "little number" if the number is entered is less than 100
// console.log()s big number if the number is greater than or equal to 100.
// let variable = (22)
// for(let i = 0; i < 200; i++) {
//     if(i < 100) {
//         console.log('little number');
//     } else if(i > 100) {
//         console.log('big number');
//     }
// }
// console.log(variable);

// 🔴 Commit.

// G. Monkey in the Middle
// Write an if ... else if ... else statement:
// console.log() little number if the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey". 
// for(let i = 0; i <= 20; i++) {
//     if(i < 5) {
//         console.log('Little number');
//     } else if(i >= 10) {
//         console.log('big number');
//     } else {
//         (console.log('monkey'))
//     }
// };

// H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];

// // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];
// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + 
// the third item in Kristyn's closet + " today!" to the console.
// console.log('Kristyn is rocking that ' + kristynsCloset[2] + ' today!')

// Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
// kristynsCloset.splice(6, 0, 'raybans')
// console.log(kristynsCloset)

// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
// kristynsCloset[5] = 'stained knit hat'
// console.log(kristynsCloset)

// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
// console.log(thomsCloset[0][0]);

// In the same way, access one item from Thom's pants array.
// console.log(thomsCloset[1][2]);

// Access one item from Thom's accessories array.
// console.log(thomsCloset[2][1])

// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
// console.log('Thom is looking fierce in a ' + thomsCloset[0][0] + ', ' +  thomsCloset[1][1] + ' and a ' + thomsCloset[2][1] + '!')
// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
// thomsCloset[1][2] = 'footie pajamas'
// console.log(thomsCloset)


// --> IV. Functions
// NEED TO RE DO FOR PRACTICE
// A. printGreeting
// Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument 
// interpolated into the greeting?
// const printGreeting = (name) => {
//   console.log(`Hello there, ${name}!`)
// }
// printGreeting('Slimer')

// Like so?
// console.log(printGreeting("Slimer"));
// => Hello there, Slimer!

// You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, 
// read entire problems carefully before doing them from now on.

// B. printCool
// Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying 
// that that person is cool.
// => "Captain Reynolds is cool";

// const printCool = (name) => {
//   console.log(`${name} is cool`);
// }
// printCool('Captain Reynolds')


// C. calculateCube
// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
// const calculateCube = (num) => {
//   return num * num * num
// }
// calculateCube(5);
// const cubeResults = calculateCube(5)
// console.log(cubeResults)

// console.log(calculateCube(5));
// => 125

// D. isVowel
// ONLY RETURNING TRUE - CANNOT GET FALSE TO WORK
// Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. 
// The vowel could be upper or lower case.

const isVowel = (str) => {
  let vowelCount = 0;
  const string = str.toString();
  for(let i = 0; i <= string.length - 1; i++) {
    if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
      vowelCount += 1
    }
  }
  return true
} 
console.log(isVowel("a"));

// => true
// 🔴 Commit.

// E. getTwoLengths
// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each 
// number is the length of the corresponding string.

// console.log(getTwoLengths("Hank", "Hippopopalous"));
// => [4, 13]
// 🔴 Commit.

// F. getMultipleLengths
// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should 
// return an array of numbers where each number is the length of the corresponding string.

// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// => [5, 4, 2, 2, 4]

// 🔴 Commit.

// G. maxOfThree
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, 
// it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.

// console.log(maxOfThree(6, 9, 1));
// => 9
// 🔴 Commit.

// H. printLongestWord
// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word 
// in the array. In case of a tie, the method should return the word that appears first in the array.

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// => "Peanutbutter"
// 🔴 Commit.

// I. transmogrify
// Write a Javascript function called transmogrify. This function should accept three arguments, which you can assume will be numbers. 
// Your function should return the "transmogrified" result.

// The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

// For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.

// console.log(transmogrify(5, 3, 2));
// => 225
// 🔴 Commit.

// J. reverseWordOrder v2
// Without using .split(), .reverse(), or .join(), write a function reverseWordOrder that accepts a single argument, a string. The 
// function should return a string with the order of the words reversed. Don't worry about punctuation.

// See if you can do it without googling.

// Remember: Jim showed you today that you can index directly into a string:

// "hello world"[6]
// => "w"

// That and basic loops and variables and arrays are all you need to solve this without the Array methods.

// console.log(reverseWordOrder("Ishmael me Call"));
// => "Call me Ishmael"

// console.log(reverseWordOrder("I use Lâncome on my comb"));
// => "comb my on Lâncome use I"
// 🔴 Commit.

// K. Get down and dirty with Math.random()
// Write a function that will return a random integer between 1 and 10. Test it.
// const random = (min, max) => {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min;
// }
// console.log(random(1, 10))
// Write a function that will return a random integer between 10 and 100. Test it.
// const random = (min, max) => {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min;
// }
// console.log(random(10, 100))
// Write a function that will return a random number between 532 and 13267. Test it.
// const random = (min, max) => {
//   return Math.floor(Math.random() * Math.floor(max - min) + min);
// }
// console.log(random(532, 13267))
// Write a function that will return a random number between 1 and 10. Test it.
// const random = (min, max) => {
//   return Math.floor(Math.random() * Math.floor(max - min) + min);
// }
// console.log(random(1, 10))

// --> Add a few more quotes to the quotes array from question III-B-1 above. Write a function that will take an array as a parameter, 
// and return a random element from that array. Call your function a few times, passing in the quotes array. Give it a nice semantic 
// name like getRandomElement.

// const quotes = ['hi there', 'goodbye', 'how are you', 'what the fork']
// const getArray = () => {
//   let getRandomElement = quotes[Math.floor(Math.random() * quotes.length)];
//   console.log(getRandomElement);
// }
// 🔴 Commit.

// Objects
// Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we 
// want to store that user's data. The object data structure is a good way to organize the data from our user.
// A. Make a user object
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchased to an empty array []. 
// Set the other values to whatever you would like.
// const user = {
//   name: 'Hello Fresh',
//   email: 'email@gmail.com',
//   age: 22,
//   purchased: []
// }

// // B. Update the user
// // Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.
// user.email = 'newemail@gmail.com'
// console.log(user)

// // Our user has had a birthday! Without changing the original user object, increment the age value using the postfix operator. Hint: age++
// user.age++
// console.log(user)

// C. Adding keys and values
// You have decided to add your user's location to the data that you want to collect.
// Without changing the original user object, add a new key location to the object, and give it a value or some-or-other location (a string).
// user.location = 'Chicago'
// console.log(user)

// // D. Shopaholic!
// // Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchased 
// // array.
// user.purchased.push('carbohydrates')
// console.log(user)

// // Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchased 
// // array.
// user.purchased.push('peace of mind')
// console.log(user)

// // Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the 
// // purchased array.
// user.purchased.push('Merino jodhpurs')
// console.log(user)

// // Console.log just the "Merino jodhpurs" from the purchased array.
// console.log(user.purchased[2])


// E. Object-within-object
// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.
// If we want to give our user a friend with a name and age, we could write:
// user.friend = {
//     name: "Grace Hopper",
//     age: 85
// }
// When we console.log user, we would see the friend object added to our user object.
// const user = {
//   name: 'Hello Fresh',
//   email: 'email@gmail.com',
//   age: 22,
//   purchased: []
// }

// Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now)
// user.friend = {
//   name: "Grace Hopper",
//   age: 85,
//   purchased: [],
//   location: 'Denver',
// }

// Console.log just the friend's name
// console.log(user.friend.name)
// // Console.log just the friend's location
// console.log(user.friend.location)
// // CHANGE the friend's age to 55
// user.friend.age = 55
// console.log(user.friend)
// // The friend has purchased "The One Ring". Use .push() to add "The One Ring" to the friend's purchased array.
// user.friend.purchased.push('The One Ring')
// console.log(user.friend)
// // The friend has purchased "A latte". Use .push() to add "A latte" to the friend's purchased array.
// user.friend.purchased.push('A latte')
// console.log(user.friend)
// // Console.log just "A latte" from the friend's purchased array.
// console.log(user.friend.purchased[1])


// F. Loops
// Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.
// const user = {
//   name: 'Hello Fresh',
//   email: 'email@gmail.com',
//   age: 22,
//   purchased: []
// }
// for(let key in user) {
//   console.log(user[key])
// }

// Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.
// user.friend = {
//   name: "Grace Hopper",
//   age: 85,
//   purchased: [],
//   location: 'Denver',
// }
// for(let key in user.friend) {
//   console.log(user.friend[key])
// }

// --> G. Functions can operate on objects
// Write a single function updateUser that takes no parameters. When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
// The function does not need a return statement, it will merely modify the user object.

// Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our user 
// object, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. 
// Call your oldAndLoud function with user as the argument.
// 🔴 Commit.