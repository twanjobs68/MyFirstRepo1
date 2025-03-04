//Part 1-examples of functions: Thinking Functionally
/**
 * Any of the examples below will accomplish the
 * same task: reversing a string.
 * 
 * Which of these examples is best? Why?
 * Note that there is no "correct" answer.(Personally I like 3 or 4)
 */
function reverseString(str) {
    const strArray = str.split("");
    const revArray = strArray.reverse();
    const revString = revArray.join("");
    return revString;
  }
  /*2*/
  function reverseString2(str) {
    return str.split("").reverse().join("");
  }
  /*3*/
  function reverseString3(str) {
    let revString = "";
    for (let i = str.length - 1; i >= 0; i--) {
      revString += str[i];
    }
    return revString;
  }
  //4*I WOULD TAKE THIS FUNCTION OR THE NEXT
  function reverseString4(str) {
    if (str === "") return "";
    else return reverseString4(str.substr(1)) + str.charAt(0);
  }
  //5**OR THIS FUNCTION */
  function reverseString5(str) {
    return (str === "") ? "" : reverseString5(str.substr(1)) + str.charAt(0);
  }
  
  console.log(reverseString("!dlroW olleH"))
  console.log(reverseString2("!dlroW olleH"))
  console.log(reverseString3("!dlroW olleH"))
  console.log(reverseString4("!dlroW olleH"))
  console.log(reverseString5("!dlroW olleH"))

//write functions that accomplish the following:
// 1A.Take an array of numbers and return the sum.
function calculateSum() {
    // Create array of numbers
    const myArrayNums = [5, 7, 12, 47];//
  
    // Initialize a variable to hold the sum
    let totalNums = 0;
  
    // Loop through the array to calculate sum of numbers
    for (let i = 0; i < myArrayNums.length; i++) {
      totalNums += myArrayNums[i];
    }
  
    // Return sum
    return totalNums;
  }
  
  // Call function and save result
  const total = calculateSum();
  
  // Output
  console.log("The total sum is:", total);
  
//2A Take an array of numbers and return the average.
function calculateAverage() {
    // Create an array with the numbers
    const twansArray = [7, 8, 10, 15, 29, 33];
  
    // Initialize a variable to hold the sum of the numbers
    let sum = 0;
  
    // Loop through the array to calculate the sum
    for (let i = 0; i < twansArray.length; i++) {
      sum += twansArray[i];
    }
  
    // Calculate the average by dividing the sum by the number of items in the array
    let average = sum / twansArray.length;
  
    // Return the average
    return average;
  }
  
  // Call the function and store the result
  const avg = calculateAverage();
  
  // Output the average
  console.log("The average is:", avg);

// 3A. Take an array of strings and return the longest string.
function findLongestString() {
    // Create an array with the strings
    const myString = [
      "The Cat", 
      "My blanket is blue", 
      "The apple fell from the sky", 
      "My hair is red", 
      "The chicken is brown", 
      "Raisins"
    ];
  
    // Initialize a variable to keep track of the longest string
    let longest = "";
  
    // Loop through the array to find the longest string
    for (let i = 0; i < myString.length; i++) {
      if (myString[i].length > longest.length) {
        longest = myString[i];
      }
    }
  
    // Return the longest string
    return longest;
  }
  
  // Call the function and store the result
  const longestString = findLongestString();
  
  // Output the longest string
  console.log("The longest string is:", longestString);

//4A. Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
//initial code
// Create the array
// const twansLongestByNum = [
//     "Parents", "a", "of", "b", "Jaliil", "c", "Marcella", "d", 
//     "Lionell Jr.", "e", "f", "Jamaul", "g", "Audrinna", "h", 
//     "are", "i", "Lionell Sr", "j", "and", "Deme", "k", "Grant", 2
//   ];
  


function findStringsLongerThan() {
    // Step 1: Create the array with strings and a number
    const twansLongestByNum = [
      "Parents", "a", "of", "b", "Jaliil", "c", "Marcella", "d", 
      "Lionell Jr.", "e", "f", "Jamaul", "g", "Audrinna", "h", 
      "are", "i", "Lionell Sr", "j", "and", "Deme", "k", "Grant", 1
    ];
  
    // Step 2: Separate the number from the array
    const number = twansLongestByNum[twansLongestByNum.length - 1]; // The last item is the number. separate so you con check length
  //of other strings
    // Step 3: Filter the strings longer than the given number
    const stringsLongerThanNumber = twansLongestByNum.filter(item => {
      return typeof item === "string" && item.length > number; // Check if it's a string and longer than the number
    });
  
    // Step 4: Print the strings that meet the condition
    console.log("Strings longer than the given number:", stringsLongerThanNumber);
  }
  
  // Call the function to run it
  findStringsLongerThan();
  
  // Example usage:
  // console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3));
  // Output: ["hello", "morning"]

  // For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

//5A.  Take a number, n, and print every number between 1 and n without using loops. Use recursion.
// Create function called takeN
function takeN(n) {
    // if n is less than 1, stop (nothing to print)
    if (n < 1) {
      return;
    }
  
    // Recursive method- print numbers from 1 to n
    takeN(n - 1); // Call the function with a smaller number
    console.log(n); // Print the current number
  }
  
  // Call the function with a number (example: 5)
  takeN(7);
  
/********************************************************************************************** */
 //Part 2: Thinking Methodically
//   When functions are built into objects, like Arrays, they are referred to as “methods” of those objects. Many methods, including Array methods, require “callback functions” to determine their behavior.
// For the tasks below, use the following data to test your work:
// [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
// Use callback functions alongside Array methods to accomplish the following:
// a. Sort the array by age.
// Filter the array to remove entries with an age greater than 50.
// Map the array to change the “occupation” key to “job” and increment every age by 1.
// Use the reduce method to calculate the sum of the ages.
// Then use the result to calculate the average age.

//DATA
const data = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" },
  ];
/**************************************************************** */
//2B. Sort the array by age
/**************************************************************** */
// Step 1: Create the array with data given 
let sortByAgeArray = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
  ];
  
  // Step 2: Write a function to convert age strings to numbers
  function convrtStrToANum(stringAge) {
    //console.log("String Age is ",stringAge);
    return parseInt(stringAge); // Convert string ex. "41" to the number 41
  }
  
  // Step 3: Write a function to sort the array by age
  function arraySrtAge(array) {
    return array.sort(function (age1, bage2) {
      // Compare the ages after converting them to numbers
      return convrtStrToANum(age1.age) - convrtStrToANum(bage2.age);
    });
  }
  
  // Step 4: Call the function arraySrtAge and save the sorted array
  let sortedArray = arraySrtAge(sortByAgeArray);
  
  // Step 5: Print out the sorted array
  console.log(sortedArray);

/*Explanation:
I decided to go with parseInt to convert the string to function.  Thanks to online search I found that I could use this
parseInt("41") converts the string "41" into the number 41.
Numbers can be compared, but strings cannot be compared in the same way.
I separated the parseInt step into it'ds own function so that I could understand what it was doing better.

For me to understand what my code is doing I created a "helper function" called convertToNumber
to show how the string is turned into a number.
I used the sort method to compare two items at a time using the a.age and b.age values.
I use the convertToNumber function on both age1.age and bage1.age to make sure they are numbers before comparing.
Sorting Logic:

If the first age is smaller, it moves earlier in the list.
If the second age is smaller, it moves later in the list.

******************************************************************** */

//2. Filter the array to remove entries with an age greater than 50
const filteredByAge = data.filter((person) => parseInt(person.age) <= 50);
console.log("Filtered (age <= 50):", filteredByAge);

//3. Map the array to change the “occupation” key to “job” and increment every age by 1
const mappedData = data.map((person) => ({
    id: person.id,
    name: person.name,
    job: person.occupation, // Change "occupation" to "job"
    age: (parseInt(person.age) + 1).toString(), // Increment age by 1
  }));
  console.log("Mapped data (occupation to job, age incremented):", mappedData);

//4. Use the reduce method to calculate the sum of the ages
const totalAge = data.reduce((sum, person) => sum + parseInt(person.age), 0);
console.log("Sum of ages:", totalAge);

//5. Use the result to calculate the average age
const averageAge = totalAge / data.length;
console.log("Average age:", averageAge);

//Part 3: Thinking Critically
// For this section, develop functions that accomplish the following:
//1.  Take an object and increment its age field.
function incrementAge(obj) {
    // Check if the object has an "age" field
    if (!obj.hasOwnProperty("age")) {
      // If not, set age to 0
      obj.age = 0;
    } else {
      // If it does, increase age by 1
      obj.age += 1;
    }
  
    // Add or update the "updated_at" field with the current time
    obj.updated_at = new Date();
  
    // Return the modified object
    return obj;
  }
  // Example usage
const person1 = { name: "Alice" }; // Create an object without "age"
console.log("Before:", person1);  // Look at the object before calling the function
console.log("After:", incrementAge(person1))


// Take an object, make a copy, and increment the age field of the copy. Return the copy.
function incrementAgeCopy(obj) {
    // Create a copy of the object using {...obj}
    const copy = { ...obj };
  
    // Check if the copy has an "age" field
    if (!copy.hasOwnProperty("age")) {
      // If not, set age to 0
      copy.age = 0;
    } else {
      // If it does, increase age by 1
      copy.age += 1;
    }
  
    // Add or update the "updated_at" field with the current time
    copy.updated_at = new Date();
  
    // Return the modified copy
    return copy;
  }
  // Example usage
const person2 = { name: "Bob", age: 30 }; // Create an object with "age"
console.log("Original:", person2); // Show the original object
console.log("Modified Copy:", incrementAgeCopy(person2)); // Call the function and see the new object
console.log("Original After Function:", person2); 
// For each of the functions above, if the object does not yet contain an age field, create one and set it to 0. 
// Also, add (or modify, as appropriate) an updated_at field that stores a Date object with the current time.
//Thought experiment: since the Date object is an object, what would happen if we modified it in the copy of 
// the object created in the second function using setTime() or another method? How could we circumvent potentially undesired behavior?
//
//


//Not Completed

//Part 4: Thinking Practically
// Practical application of these concepts varies greatly in industry, but the core foundations are the same: functions handle repeated, specialized tasks, and methods are functions attached to specific types of objects.
// The Skills-Based Assessment (SBA) for this module will have you work on a real-world example that employs all of the tools you have learned thus far. To prepare for it, revisit your previous work as described below.
// Part 5: Thinking Back
// Once you have completed the tasks outlined above, take any extra time you may have to revisit your previous JavaScript assignments. 
// How many of the scripts could be turned into functions?
// What would the parameters look like? What kind of returns should they have?
// Could you package your code into even smaller blocks, creating helper functions?
// What else could be changed to optimize the code, knowing what you now know?
// Explore, experiment, and experience the magic of reusable code!