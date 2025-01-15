//lESSON 308.2 12/16/2024 - assignment

// 1. Create an if...else... state for each comparison operation.
// 2. If the operation is true, print out the question and answer using console.log.
// 3. If the operation is false, then print out a message saying that it is false.

// 12/17/2024 assignment
// add error catches to all of the comparison equations below

//COMPARISON STGATEMENTS
let gradeKy = 100;
let gradeKa = 95;
let fnameKy = "Kyrie";
let fnameKa = "Kaedin";

//check to see if Kyries grade value equals kaedins grade value
if (gradeKy == gradeKa) {
  console.log(
    `${fnameKy}s grade of  ${gradeKy} is equal in value and type to  ${fnameKa}s grade of  ${gradeKa}`
  );
} else {
  console.log(
    `${fnameKy}s grade value and type does not equal than of ${fnameKa}s;`
  );
}

//check to see if Kyries grade is greater than Kaedins(>)
if (gradeKy > gradeKa) {
  console.log(
    `${fnameKy}s grade of  ${gradeKy} is greater than  ${fnameKa}s grade of  ${gradeKa}`
  );
} else {
  console.log(`${fnameKy}s grade is not greater thant ${fnameKa}s;`);
}

//check to see if Kyries grade is less than Kaedins(<)
if (gradeKy < gradeKa) {
  console.log(
    `${fnameKy}s grade of  ${gradeKy} is less than  ${fnameKa}s grade of  ${gradeKa}`
  );
} else {
  console.log(`${fnameKy}s grade is not less than ${fnameKa}s;`);
}

//checkl to see if Kyries grade is equal to Kaedins(===)
if (gradeKy === gradeKa) {
  console.log(
    `${fnameKy}s grade of  ${gradeKy} is equal to  ${fnameKa}s grade of  ${gradeKa}`
  );
} else {
  console.log(`${fnameKy}s grade is not equal to ${fnameKa}s;`);
}

//check to see if Kyries grade is greater than or equal to Kaedins(>=)
if (gradeKy >= gradeKa) {
  console.log(
    `${fnameKy}s grade of  ${gradeKy} is greater than or equal to  ${fnameKa}s grade of  ${gradeKa}`
  );
} else {
  console.log(`${fnameKy}s grade is not greater or equal to ${fnameKa}s;`);
}

//check to see if Kyries grade is less than or equal to Kaedins(<=)
if (gradeKy <= gradeKa) {
  console.log(
    `${fnameKy}s grade of  ${gradeKy} is less than or equal to  ${fnameKa}s grade of  ${gradeKa}`
  );
} else {
  console.log(`${fnameKy}s grade is not less than or equal to ${fnameKa}s;`);
}

//check to see if Kyries grades is not equal to Kaedins(!=)
if (gradeKy != gradeKa) {
  console.log(
    `${fnameKy}s grade of  ${gradeKy} is greater than  ${fnameKa}s grade of  ${gradeKa}`
  );
} else {
  console.log(`${fnameKy}s grade is not greater thant ${fnameKa}s;`);
}
// END OF COMPARISON EQUATIONS

//12/17/2024 - CLASS DISCUSION EXAMPLES
//Terinary operator fits on a single line and performs the same as an if/else statement. Can evaluate Expressions(Mathematical equations, Comparison Operations, etc...
//Literal Values
//Functions(console.log()...)
//format of terinary is -condition ? value if true: value if false; condition is not defined
if (gradeKa < gradeKy) {
  console.log("Kaedins grade is less than Kyries");
} else {
  console.log("Kaedins grade is not less than Kyries");
}
//above code written in terinary operator
const result1 =
  gradeKa < gradeKy
    ? console.log(`Kaedins grade is ${gradeKa}`)
    : console.log(`Kyries grade is ${gradeKy}`); // condition is not defined
//              if this is true..........   do this                                   if false do this
console.log("result1 ", result1);

const result2 = gradeKy > 75 ? gradeKy + 20 : gradeKy ** 2;
console.log("result2 ", result2);

//Regular function
const gradeKy3 = 0;
const gradeKa3 = 0;
const result3RegularFunction = function (gradeKa3, gradeKy3) {
  return gradeKy3 + gradeKa3;
};
result3RegularFunction(80, 100);
console.log("Regular function output- ", result3RegularFunction);

//Arrow Functions
const gradeKy4 = 85;
const gradeKa4 = 50;
const result4FunctionVarialbe = (gradeKy3, gradeKa3) => gradeKy3 + gradeKa3; // This DOESN'T WORK CORRECTLY.  SEE CONSOLE.LOG

console.log(result4FunctionVarialbe);

if (false) {
  console.log("True");
} else {
  console.log("False");
  console.log("HERE!!!!!!!!!!!!!!!!!");
}

//ERRORS
//Syntax error-Code that is not what javascript is expecting(console will give error information and squiggly line under error in code)
//const result2 //example of syntax error
//Logical errors-Erros that Javascript can't handle and will try to resolve but you will normally get wrong results
//also an example of the Switch function
//how to CATCH an error message is done with the if check and "throw" below and tells javascript to STOP running the code to alert the error
const a = 10;
const b = 0;
const operand = "/";
switch (
  operand //key is not defined
) {
  case "/":
    if (b === 0 && gradeKy4 > 85) {
      //throw"Error - Can't divide by zero"; // javascript to STOP running the code to alert the error and display this message
      throw new "Error - Still Can't divide by zero"(); // throw a new error and tell javascript to STOP running the code to alert the error and display this message
    }
    console.log(a / b);
    break;
  default:
    console.Log("Unknow operator");
}

//Databases can throw error messages in the background to make sure there is alertness and maybe some cleanup to do to continue processing
//TRY/CATCH -
const c = 20;
const d = 0;
const operand2 = "/";

try {
  switch (
    operand //key is not defined
  ) {
    case "/":
      if (d === 0 || gradeKy4 > 85) {
        // throw"Error - Can't divide by zero"; // javascript to STOP running the code to alert the error and display this message
        //throw new"Error - Still Can't divide by zero"; // throw a new error and tell javascript to STOP running the code to alert the error and display this message
      }

      console.log(c / d);
      break;
    default:
      console.Log("Unknow operator");
  }
  //catch block with TRY keyword
} catch (err) {
  console.error("Error occurred when forming basic math:", err);
  //console.log("Anything below the catch bracketto run");
  console.log("Leaving Try Catch section");
}
//PSEUDO Code examples.  This will not work
//final block will occur if error happens or not from the try block
// const connection = database.openConnection("ajdsjfsaf'sadjg['jf");
// try{
//     const someData = connection.query("SELECT * Rom some_table");//Potential error vector!!
//     console.log(someData); //potentially 'undefined because the line above may fail} catch (error){

// }catch (error){
//     //Handle the database error
// }
// finally{
//     console.close("This seciton should have anything that you want to do to stop the code from executing")
// }
if (false) {
  console.log("True");
} else {
  console.log("False");
}
