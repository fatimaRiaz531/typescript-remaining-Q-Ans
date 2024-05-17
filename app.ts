
// 🚀 Day 31 Challenge: Start Coding! 🚀

// Question 91: Create an array of your three favorite fruits and add a new fruit to the end of the array.
// Explain & TIP: Adding elements to an array can be easily done using the .push() method. It allows you 
// to add new items to the end of an array.

// SOLUTION:

// let favoriteFruits1:string[] = [ "apple", "pappaya", "avacado"];
// favoriteFruits1.push("mango");
// console.log(favoriteFruits1);

// **Question 92:** Write a function to remove the last element from an array and return the removed element.
// **Explain & TIP:** The `.pop()` method removes the last element from an array and returns that element.
//  This can be useful when you need to work with the removed item.

// // SOLUTION:
// function removeLastElement<T>(arr:T[]): T | undefined {
//   return arr.pop();
// }
// const fruits: string[] = ["Apple", "Banana","Orange"];
// console.log(removeLastElement(fruits));
// console.log(fruits);

// **Question 93:** Find the index of "Banana" in an array of fruits and replace it with "Mango".
// **Explain & TIP:** To replace an item in an array, find its index using `.indexOf()`, 
// then use that index to set a new value with array bracket notation.

// SOLUTION:
// This function finds "Banana" in the fruits array and replaces it with "Mango"
// function replaceBananaWithMango(fruits: string[]): void {
//   const index = fruits.indexOf("Banana");
//   if (index !== -1) fruits[index] = "Mango";
// }
//  const fruits: string[] = ["Apple", "Banana", "Kiwi"];
//  replaceBananaWithMango(fruits);
//  console.log(fruits);

// 🚀 **Day 32 Challenge: Start Coding!** 🚀

// **Question 94:** Use the `.map()` method to create a new array that contains the length of each word from an
//  array of words.
// **Explain & TIP:** The `.map()` method transforms each item in an array according to a specific function and 
// returns a new array with the transformed items.

// SOLUTION:

// Defines an array with some words
// const words : string[] =["Hello","World","TypeScript", "JavaScript"];
// const lengths: number[] = words.map(word => word.length);
// console.log(lengths);

// **Question 95:** Write a function that uses the `.filter()` method to return an array of numbers greater than 10.
// **Explain & TIP:** The `.filter()` method creates a new array with all elements that pass the test implemented
//  by the provided function.

// SOLUTION:

// This function filters an array, keeping only numbers greater than 10
// function filterGreaterThanTen(numbers:number[]): number[] {
//   return numbers.filter(number => number > 10);
// }
// const numbers: number[] = [5,10,15,20,25,30,45];
// console.log(filterGreaterThanTen(numbers));

// **Question 96:** Demonstrate how to use the `.reduce()` method to calculate the sum of all numbers in an array.
// **Explain & TIP:** The `.reduce()` method applies a function against an accumulator and each element in the array
//  (from left to right) to reduce it to a single value.

// SOLUTION:

// function calculateSum(numbers:number[]): number {
//   return numbers.reduce((accumulator, current) => accumulator + current, 0);
// }
// const numbers: number[] = [1+2+3+4+5+6+7];
// console.log(calculateSum(numbers));

// 🚀 **Day 33 Challenge: Start Coding!** 🚀

// **Question 97:** Write a function that returns the current date in the format "DD-MM-YYYY".
// **Explain & TIP:** Working with dates in JavaScript often requires formatting them in a specific way.
//  The `Date` object provides methods to get the day, month, and year, which you can then assemble into any format you need.

// SOLUTION:

// This function formats the current date as DD-MM-YYYY
// function getCurrentDateFormatted(): string {
//   const now = new Date();
//   const day= String(now.getDate()).padStart(2,"0");
//   const month = String(now.getMonth() + 1).padStart(2,"0");
//   const year = now.getFullYear();
//   return`${day}-${month}-${year}`;
// }
// console.log(getCurrentDateFormatted());

// **Question 98:** Create a JavaScript snippet that calculates and logs how many days are left until New Year.
// **Explain & TIP:** To find the difference between two dates, you can subtract one Date object from another,which 
// gives you the difference in milliseconds. Convert that to days to see how many days are left until a specific event.

// SOLUTION:
// // Calculates how many days are left until New Year's Day
// function daysUntilNewYear(): number{
//   const today = new Date();
//   const newYear =new Date(today.getFullYear() + 1, 0,1); // january 1st day
//   const diff = newYear.getTime() - today.getTime(); //differnce in milliseconds
//   const days =Math.ceil(diff / (1000 * 60 * 60 *24)); //converts into days
//   return days;
  
// }
// console.log(daysUntilNewYear() + "days until New Year.");

// **Question 99:** Generate a date object representing your next birthday and log it to the console.
// **Explain & TIP:** When creating a `Date` object for a future event like a birthday, you might need
//  to adjust the year based on whether the birthday has already occurred this year or not.

// SOLUTION:
// Generates a Date object for the next occurrence of a specific birthday
// function getNextBirthday(month:number, day: number): Date {
//   const today =  new Date();
//   let year = today.getFullYear();
//   const birthday = new Date(year , month - 1, day);
//   if (birthday< today){
//      // If the birthday this year has already passed, use next year's date
//     birthday.setFullYear(year + 1);
//   }
//   return birthday;
// }
// const nextBirthday = getNextBirthday( 5, 17);
// console.log("Next Birthday on:", nextBirthday.toLocaleDateString());

// 🚀 **Day 34 Challenge: Start Coding!** 🚀

// **Question 100:** Use the JavaScript Math object to find the square root of 144.
// **Explain & TIP:** The `Math.sqrt()` function is a straightforward way to calculate the square root of 
// any positive number, directly providing the result you need.

// SOLUTION:

// Finds the square root of 144 using Math.sqrt()
// const squareRoot:  number = Math.sqrt(144);
// console.log(squareRoot);

// **Question 101:** Generate a random integer between 1 and 10.

// **Explain & TIP:** To generate a random integer within a specific range, you can use `Math.random()`
//  in combination with `Math.floor()` or `Math.ceil()` to ensure the result is an integer.

// SOLUTION:

// function getRandomInt():number {
//   return Math.floor(Math.random()*10+1);
// }
// console.log(getRandomInt());
// This function combines Math.random() with Math.floor() to create a random integer within our range.

// **Question 102:** Calculate and log the absolute difference between the number -5 and 5.

// **Explain & TIP:** The `Math.abs()` function returns the absolute value of a number, which is useful for
//  finding the magnitude of a difference without regard to direction.

// SOLUTION:
// Calculates the absolute difference between -5 and 5
// const difference: number =Math.abs(-5 - 5);
// console.log(difference);
// This line shows the absolute value of the difference between -5 and 5, ignoring the sign.

// 🚀 Day 35 Challenge: Start Coding! 🚀

// Question 103: Write a function that returns a random boolean value, true or false.
// Explain & TIP: Generating a random boolean is a simple but useful trick. You can use Math.random() 
// and check if it's above or below 0.5 to decide between true or false.

// SOLUTION:

// function getRandomBoolean():boolean {
//   return Math.random() > 0.5;
// }
// console.log(getRandomBoolean());

// Question 104: Create a function that generates a random hexadecimal color code.
// Explain & TIP: Hexadecimal color codes are strings that start with # followed by 6 hexadecimal digits. 
// You can generate each digit randomly and concatenate them into a full color code.

// // This function generates a random hexadecimal color code
// function getRandomHexColor(): string {
//     const color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
//     return color; // Returns the random color code
// }
// console.log(getRandomHexColor()); // Outputs a random hex color code like #ff3e12
// We generate a random number, convert it to hexadecimal, and ensure it's 6 characters long.

// SOLUTION:

// function getRandomHexColor(): string {
//   const color ='#' +Math.floor(Math.random()* 0xFFFFFF).toString(16).padStart(6,"0");
//   return color;
// }
// console.log(getRandomHexColor());

// Question 105: Simulate a dice roll using JavaScript and return a random integer between 1 and 6.
// Explain & TIP: Simulating a dice roll involves randomly choosing an integer between 1 and 6.
//  Use Math.random() along with some arithmetic to achieve this range.

// SOLUTION:

// function rollDice():number {
//   return Math.floor(Math.random()* 6 ) +1;
// }
// console.log(rollDice());

// Question 106: Determine if a given year is a leap year using comparison operators.
// Explain & TIP: A leap year is divisible by 4 but not by 100 unless it's also divisible by 400.
//  This rule helps align our calendar years with the Earth's orbital period

// SOLUTION:
// function isLeapYear(year:number):boolean {
//   return (year % 4 === 0 && year % 100 !==0) || year % 400 === 0;
// }
// console.log(isLeapYear(2024));
// console.log(isLeapYear(1998));

// Question 107: Write a condition using logical operators that checks if a number is divisible by both 2 and 3.
// Explain & TIP: Checking for divisibility involves using the modulo operator (%) to see if there's any remainder.
//  A number divisible by both 2 and 3 without a remainder is also divisible by 6.

// SOLUTION:
// This function checks if a number is divisible by both 2 and 3
// function isDivisibleByTwoAndThree(number:number): boolean {
//     // Uses the modulo operator to check for no remainder

//   return number %2 ===0 && number % 3 === 0; 
// }
// console.log(isDivisibleByTwoAndThree(12));
// console.log(isDivisibleByTwoAndThree(14));

//   Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.
// Explain & TIP: To compare strings without considering their case (uppercase/lowercase), 
// you can convert both strings to the same case before comparing.

// SOLUTION:

// This function compares two strings, ignoring case sensitivity
// function areStringsEqualIgnoreCase(str1:string , str2:string) : boolean{
//   return str1.toLowerCase() === str2.toUpperCase(); 
// }
// console.log(areStringsEqualIgnoreCase("hello","Hello"));
// console.log(areStringsEqualIgnoreCase("world","World"));

// 🚀 Day 37 Challenge: Start Coding! 🚀

// Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM.
// Explain & TIP: You can get the current hour using the Date object and its getHours() method. 
// Remember, hours are in 24-hour format, so 12 PM is 12.

// SOLUTION:
// const currentTime = new Date();
// if (currentTime.getHours() < 12){
// }
// console.log("Good Morning");

// Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
// Explain & TIP: A common grading system assigns letter grades based on score ranges.
//  You can use an if-else-if chain to determine the grade.

// SOLUTION:

// function assignGrade(score:number): string {
//   if (score >= 90){
//     return "A";
//   } else if (score >= 80){
//     return "B";
//   } else if (score >= 70){
//     return "C";
//   } else if (score >=60){
//     return "D";
//   } else {
//     return "F";
//   }  
// }

// console.log(assignGrade(87));
// console.log(assignGrade(55));

//   Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
// Explain & TIP: Age groups can typically be categorized by specific ranges. 
// For instance, you might consider anyone under 13 a child, between 13 and 19 a teenager, and 20 or older an adult.

// // SOLUTION:
// function categorizeAge(age:number):string {
//     if(age< 13){
//         return "child";
//     } else if ( age <=19){
//         return "teenager";
//     } else {
//         return "adult";
//     } 
// }
// console.log(categorizeAge(10));
// console.log(categorizeAge(18));
// console.log(categorizeAge(26));

// 🚀 Day 38 Challenge: Start Coding! 🚀

// Question 112: Create a Map that stores the names of countries as keys and their capitals as values. 
// Add three countries to the Map.
// Explain & TIP: The Map object in JavaScript holds key-value pairs and remembers the original insertion
//  order of the keys. It can be more efficient for large sets of data and when the key is not a string.

// SOLUTION:
// const countries = new Map<string , string>();
// countries.set("USA" , "Washington , D.C.");
// countries.set("France", "Paris" );
// countries.set("Pakistan" , "Peshawar");

// console.log(countries);

// Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
// Explain & TIP: You can check for the presence of a key in a Map with the .has() 
// method and retrieve its value with the .get() method.

// SOLUTION:

// Creates a new Map to store countries and their capitals
// const countries = new Map<string , string>();
// countries.set("USA" , "Washington , D.C.");
// countries.set("France", "Paris" );
// countries.set("Pakistan" , "Peshawar");
// console.log(countries);
// // This function checks for "Canada" in the Map and logs its capital
// function logCapitalOfCanada(countries:Map<string, string>):void {
//     if (countries.has("Canada")){
//         console.log(`The capital of Canada is ${countries.get("Canada")}`);
//     } else {
//         console.log('Canada is not in the Map.');
//     }  
// }
// logCapitalOfCanada(countries);

// Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.
// Explain & TIP: Iterating over a Map can be done using the .forEach() method or a for...of loop, 
// providing access to each key-value pair.


// SOLUTION:
// Creates a Map to store student IDs (keys) and names (values)

// const students = new Map<number, string>();
// students.set( 1, "ALI");
// students.set( 2, "AHMED");
// students.set( 3, "ALIYAN");
// students.forEach((name,id) => {
//     console.log(`Student ID: ${id}, ${name}`);
// });

// 🚀 Day 39 Challenge: Start Coding! 🚀

// Question 115: Use a switch statement to log the days of the week based on a number (1-7).
// Explain & TIP: A switch statement is a great way to select one of many code blocks to be executed. 
// It's particularly useful for scenarios like mapping numbers to days of the week.

// SOLUTION:
// function logDayOfWeek(dayNumber:number): void {
//     switch (dayNumber) {
//         case 1:
//             console.log("Sunday");
//             break;
//         case 2:
//             console.log("Monday");
//             break;
//         case 3:
//             console.log("Tuesday");
//             break;
//         case 4:
//             console.log("Wednesday");
//             break;
//         case 5:
//             console.log("Thursday");
//             break;
//         case 6:
//             console.log("Friday");
//             break;
//         case 7:
//             console.log("Saturday");
//             break;

//         default:
//             console.log("Invalid Day Number" );
//     }    
// }
// logDayOfWeek((5));


//   Question 116: Create a switch case that matches several cases to the same code block, representing seasons.
// Explain & TIP: You can group multiple case statements together when they should execute the same block of code,
//  which is handy for categorizing items into broader groups.

// SOLUTION:

// This function logs the season based on the month

// function logSeason(month:number) :void{
//     switch (month) {
//         case 12:
//         case 1:
//         case 2:        
//             console.log("Winter");
//             break;

//         case 3:
//         case 4:    
//         case 5:
//             console.log("Spring");  
//             break;

//         case 6:    
//         case 7:    
//         case 8: 
//               console.log("Summer");
//               break;
              
//         case 9:    
//         case 10:    
//         case 11:
//             console.log("Autumn");    
              
//         default:
//             console.log("Invalid Month");
//             break;
//     };   
// }

// logSeason((3));

//   Question 117: Implement a switch statement that evaluates an expression and uses the default case if none 
//   of the cases match.
// Explain & TIP: The default case in a switch statement provides a way to execute a block of code when none 
// of the other case labels match the expression's value.

// SOLUTION:
// function evaluateGrade(grade:string) :void{
//     switch (grade) {
//         case "A":
//             console.log("Excellent");
//             break;
//         case "B":
//                 console.log("Good");
//                 break;
//         case "C":
//                 console.log("Satisfactory");
//                 break; 
//         case "D":
//                 console.log("Need Improvement");
//                 break;  
//         case "F":
//                 console.log("Fail");
//                 break;
    
//         default:
//             console.log("Invalid Grade")
//             break;
//     } 
// }
// evaluateGrade(("B"));

//   🚀 Day 40 Challenge: Start Coding! 🚀

// Question 118: Write a loop that logs numbers from 1 to 10 to the console.
// Explain & TIP: A for loop is a concise way to run a block of code a specific number of times. 
// It's perfect for when you know exactly how many iterations you need.

// SOLUTION:

// for (let i =1 ; i <= 10; i++){
//     console.log(i);
// }

//   Question 119: Create a while loop that logs "Hello, World!" 5 times.
// Explain & TIP: A while loop continues to run as long as its condition remains true. 
// It’s ideal for when you want to repeat something until a certain condition changes.

// SOLUTION:

// let count: number =0;
// while (count < 5){
//     console.log("Hello", "World!");
//     count++;
// }

// Question 120: Use a for...of loop to iterate through an array of your favorite movies and log each one.
// Explain & TIP: The for...of loop is a modern loop introduced in ES6, designed to iterate over iterable
//  objects like arrays, strings, Maps, NodeLists, and more, making it very readable and easy to use.

// SOLUTION:

// const favoriteMovies: string[] = [
//     "Aik Villain",
//     "Taray Zameen Par",
//     "Mujh say shadi kro gi",
//     "The Meg",
// ]
// for (const movie of favoriteMovies){
//     console.log(movie);
// }

// 🚀 Day 41 Challenge: Start Coding! 🚀

// Question 121: Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.
// Explain & TIP: The continue statement can be used to skip over an iteration in a loop. 
// It's particularly handy when you want to ignore specific cases without stopping the entire loop.

// SOLUTION:

// for (let i = 1; i <= 10; i++) {
//     if (i === 5){
//         continue;
//     }
//     console.log(i);
// }


//   Question 122: Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.
// Explain & TIP: The break statement terminates the loop immediately. This is useful for stopping a loop when a 
// certain condition is met, even if the loop's original termination condition hasn't been reached yet.

// SOLUTION:

// let counter: number = 10;
// while (counter > 0){
//     if (counter === 5){
//         break;
//     }
//     console.log(counter)
//     counter--;
// }


// Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.
// Explain & TIP: To find a specific character in a string, you can iterate through each character and use a condition to check for vowels. 
// The loop can stop once a vowel is found.

// SOLUTION:

// function logUntilVowel(str:string): void {
//     const vowels ="aeiouAEIOU";
//     for (const characters of str){
//         if (vowels.includes(characters)){
//             console.log(`First vowel found: ${characters}`);
//             break;
//         }
//         console.log(characters);
//     }   
// }
// logUntilVowel("sdsji");

//   🚀 Day 42 Challenge: Start Coding! 🚀

// Question 124: Create a function inside an object that returns the object's own name property using the this keyword.
// Explain & TIP: The this keyword in an object's method refers to the object itself, making it straightforward to access 
// its properties from within its methods.

// SOLUTION:
// const person = {
//     name :"Fatima",
//     getName: function(){
//         return this.name;
//     },
// };
// console.log(person.getName());


//   Question 125: Modify a method in an object to use the this keyword to access another property in the same object.
// Explain & TIP: You can leverage the this keyword to interact with multiple properties within the same object, 
// providing a cohesive way to manipulate internal data.

// SOLUTION:

// const triangle ={
//     length: 4,
//     width : 4,
//     calculateArea: function(){
//         return this.length * this.width;
//     },
// };
// console.log(triangle.calculateArea());


//   Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.
// Explain & TIP: When this is used inside a nested function within an object's method, it does not refer to the object itself but to the global object (in a browser, window). 
// This behavior often requires workarounds like assigning this to another variable in the outer function.


// SOLUTION:
// const myObject ={
//     property: "value",
//     outerMethod: function(){
//         console.log(this.property);
//         const innerMethod = () =>{
//             console.log(this.property);
//         };
//         innerMethod();
//     },
// };
// myObject.outerMethod();

  
// 🚀 Day 43 Challenge: Start Coding! 🚀

// Question 127: Convert a traditional function expression to an arrow function.
// Explain & TIP: Arrow functions provide a concise syntax for writing function expressions.
//  They don't have their own bindings to this or super, and should not be used as methods.

// SOLUTION:

// const traditionalFunction = function (a, b){
//     return a+ b;
// };
// const arrowFunction = (a, b) => a + b;
// console.log(traditionalFunction(4,9));
// console.log(arrowFunction(4,9));


//   Question 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.
// Explain & TIP: Arrow functions can take zero, one, or multiple parameters. When dealing with multiple parameters,
//  you enclose them in parentheses.

// SOLUTION:

// const multiplyParameters = (...numbers: number[]) =>
//     numbers.reduce((total, number) => total * number, 1);
// console.log(multiplyParameters(5,7,9));

  
// Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.
// Explain & TIP: In traditional functions, this refers to the object that called the function, which can vary depending
//  on the context.In arrow functions, this is lexically bound, meaning it uses this from the code that contains the arrow function.


// SOLUTION:
// const traditionalVsArrow1 ={
//     value: "traditionalVsArrow value",
//     traditionalFunction: function(){
//         console.log("Traditional function:", this.value);
//     },
//     arrowFunction: () => {
//         console.log("Arrow function:",this.value);
//     },
// };
// traditionalVsArrow1.traditionalFunction();
// traditionalVsArrow1.arrowFunction();
  
// 🚀 Day 44 Challenge: Start Coding! 🚀


//   Question 133: Write a JavaScript object and convert it into a JSON string.
//   Explain & TIP: JSON (JavaScript Object Notation) is a lightweight data-interchange format. It's easy for
//  humans to read and write  and for machines to parse and generate.  Converting a JavaScript object into a JSON 
//  string can be done using JSON.stringify().

// SOLUTION:

// const person ={
//     name : " Fatima",
//     age: 25,
//     city:" Karachi,"
// };
// const jsonString =JSON.stringify(person);
// console.log(jsonString);

//   Question 134: Take a JSON string and parse it into a JavaScript object.
// Explain & TIP: JSON.parse() is used to convert a JSON string into a JavaScript object.
//  This is particularly useful when dealing with data received as JSON from a web server or API.

// SOLUTION:

// const jsonString ='{"name": "Fatima","age": 25,"city":"Karachi"}';
// const person = JSON.parse(jsonString);
// console.log(person);

// Question 135: Explain how you can format a JSON string with proper indentation for readability.

// Explain & TIP: JSON.stringify() can take additional parameters to format the resulting JSON string.
//  Adding an indent level as the third argument beautifies the output, making it more readable.

// SOLUTION:
// const person={
//     name : " Fatima",
//     age:     25,
//     city:" Karachi,"
// };
// const jsonString =JSON.stringify(person, null,2);
// console.log(jsonString);

// 🚀 Day 46 Challenge: Start Coding! 🚀

// Question 136: Use console.log() to debug and track the value of a variable inside a loop.
// Explain & TIP: console.log() is an invaluable tool for developers to monitor the values of variables, the flow of execution, and to understand 
// the state of their program at various points in time, especially within loops where values change with each iteration.


// SOLUTION:

// for (let i = 1; i <= 5; i++){
//     console.log(`Iteration ${i}, i value:, i`);
// }

//   Question 137: Implement a try-catch block to handle potential errors in a block of code.
// Explain & TIP: The try-catch statement marks a block of statements to try, and specifies a response,
//  should an exception be thrown. It's a critical feature for robust error handling in JavaScript.

// SOLUTION:
// try {
//     throw new Error("Something went wrong");
// } catch (error) {
//     console.log(error.message);  
// }

//   Question 138: Describe how to use breakpoints in browser developer tools to debug JavaScript code.
// Explain & TIP: Breakpoints are a powerful feature in browser developer tools that allow you to pause the execution of your JavaScript
//  code at a specific line. This gives you an opportunity to inspect variables,
//  step through code one line at a time, and understand how your code executes in real-time.


// SOLUTION:

// console.log("Before breakpoint");
// console.log(
//    "This line has a breakpoint set on it in the browser's developer tools"
// );
// console.log("After breakpoint");

// Day 47 Challenge: Start Coding! 🚀

// Question 139: List three reserved words in JavaScript and create a valid use case for each.
// Explain & TIP: Reserved words in JavaScript are words that have a special meaning and cannot be used
//  as identifiers (e.g., variable names, function names). Understanding these can help prevent syntax errors 
//  and make your code more readable.

// SOLUTION:
// let count =5;
// if (count > 0){
//     console.log("Count is greater then 0.");
// }
// function add(a,b){
//     return a + b;   
// }

// Question 140: Explain the error that occurs when trying to use a reserved word as a variable name.
// Explain & TIP: Attempting to use a reserved word as a variable name will cause a syntax error in JavaScript. 
// This is because reserved words have predefined meanings and uses in the language syntax.

// SOLUTION:

// console.log(
//     "Using a reserved word as a variable name causes a syntax error in JavaScript."  
// );


//   Question 141: Discuss the significance of the await reserved word in asynchronous JavaScript.
// Explain & TIP: The await operator is used to wait for a Promise to settle. It can only be used inside
//  an async function. Using await makes asynchronous code look and behave a little more like synchronous code,
//   which can make it easier to understand and debug.

// SOLUTION:
// async function fetchData(){
//     const data = await fetchSomething();
//     console.log(data);
// }
// console.log(
//     "The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion."
// );

  
// 🚀 Day 48 Challenge: Start Coding! 🚀

// Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.
// Explain & TIP: Promises in JavaScript are used for asynchronous computations and can be in one of these states: pending, fulfilled, or rejected. A Promise that resolves after a
//  delay demonstrates how to handle operations that take some time to complete, like fetching data or timing events.

// SOLUTION:
// const helloPromise = new Promise<string>((resolve) =>{
//     setTimeout(() => {
//         resolve ("Hello, World!");
//     }, 2000);
// });
// helloPromise.then((message) => console.log(message));
 // After 2 seconds, "Hello, World!" will be logged to the console.

//   Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
// Explain & TIP: The .then() method is called when a Promise is successfully resolved, while .catch() is called 
// when a Promise is rejected. Together, they provide a powerful and readable way to handle asynchronous success and 
// error scenarios.

// SOLUTION:
// const conditionalPromise = new Promise<string> ((resolve , reject) => {
//     const success =Math.random() > 0.5;
//     if (success){
//         resolve("Success!");
//     } else {
//         reject(new Error("Failure"));
//     }
// });
// conditionalPromise
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error.message));


//   Question 144: Explain the use of the Promise.all() method with an example.
// Explain & TIP: Promise.all() takes an iterable of Promises and returns a single Promise that resolves when all 
// of the Promises in the iterable have resolved or when the iterable contains no Promises. It is rejected if any of 
// the passed Promises are rejected. This method is useful for aggregating the results of multiple promises.

// SOLUTION:
// Example using Promise.all to wait for multiple promises to resolve
// const promise1 = Promise.resolve(3);
// const promise2 = 43;
// const promise3 = new Promise<string>((resolve) =>{
//     setTimeout(resolve, 100, "panda");
// });
// Promise.all([promise1, promise2, promise3]).then((values) => {
//     console.log(values);
// });

// 🚀 Day 49 Challenge: Start Coding! 🚀

// Question 145: Create a function that accepts a callback and invokes it with some arguments.
// Explain & TIP: Callbacks are functions passed as arguments to another function. This design pattern is very 
// common in JavaScript for asynchronous operations, event listeners, or to customize the behavior of a function
//  with custom actions.

// SOLUTION:
// function executeCallback(
//     callback:(arg1: number , arg2: number) => void,
//     arg1: number,
//     arg2: number,
// ): void {
//     callback(arg1, arg2);   
// }
// // Example callback function that adds two numbers
// const add = (a: number , b: number) => {
//     console.log(a+b);
// };
// executeCallback(add, 5,6);

// 2nd solution:
// function executeCallback(
//     callback:(arg1: number, arg2: number)=> void,
//     arg1: number,
//     arg2: number,
// ): void {
//     callback(arg1, arg2);  
// }
// const add = (a: number , b: number)=> {
//     console.log(a+b);
// };
// executeCallback(add, 19,7);

//   Question 146: Show an example of a callback function used to filter an array of numbers.
// Explain & TIP: The .filter() method creates a new array with all elements that pass the test implemented by 
// the provided function. This method is commonly used to search through an array and create a subset of it based on 
// certain criteria.

// SOLUTION:
// const numbers: number[] = [1,2,3,4,5,6,7,8,9,10];
// const filteredNumbers: number[] = numbers.filter((number) => number > 5);
// console.log(filteredNumbers);

// Question 147: Explain how to handle errors in a callback pattern.
// Explain & TIP: Handling errors in a callback pattern often involves passing an error as the first argument to
//  the callback. This convention allows the callback function to check for errors before proceeding with its execution.

// SOLUTION:
// function fetchData(
//     callback:(error: Error | null , data? : string ) => void
//     ): void {
//         const error = new Error("Failed to fetch data");
//         const data = "Some data";
//         if (Math.random()> 0.5) {
//             callback(null , data);
//         } else {
//             callback(error);
//         }  
// }
// fetchData((error, data) =>{
//     if(error){
//         console.error(error.message);
//     }else {
//         console.log(data);
//     }
// });


//   🚀 Day 50 Challenge: Start Coding! 🚀

//   Question 148: Demonstrate the use of the setTimeout() function to execute code after a delay.
//   Explain & TIP: setTimeout() is a built-in JavaScript function that allows you to execute a piece of code after a 
//   specified delay. It's especially useful for scheduling tasks, animations, or delaying execution without blocking
//    the main thread.

// SOLUTION:
// setTimeout(() => {
//     console.log("This message is shown after a 5-second delay.")
// }, 2000);

//   Question 149: Explain the concept of the event loop in JavaScript with an example.
// Explain & TIP: The event loop is a fundamental concept in JavaScript, enabling asynchronous operations. 
// It monitors the call stack and the callback queue. 
// If the call stack is empty, it moves the first event from the queue to the stack, ensuring non-blocking execution.


// SOLUTION:

// console.log("Start");
// setTimeout(() => {
//     console.log("Callback executed");
// }, 0);
// console.log("End");

// Although the timeout is 0, "Callback executed" is logged after "End" due to the event loop.


// Question 150: Describe how asynchronous callbacks differ from synchronous code execution.
// Explain & TIP: Asynchronous callbacks allow JavaScript to perform long network requests, file operations, 
// or set timers without blocking the main thread, enabling the continuation of code execution. Synchronous code, 
// in contrast, runs sequentially, blocking further execution until the current operation completes.


// SOLUTION:

// console.log("Before synchronous operation");
// for (let i = 0; i < 1e9; i++) {}
// console.log("After synchronous operation");
// console.log("Before asynchronous operation");
// setTimeout(() => {
//     console.log("Asynchronous operation completed");
// }, 1000);
// console.log("After asynchronous operation setup");
// Demonstrates how the rest of the code continues to execute without waiting for the asynchronous operation.
