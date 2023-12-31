// ***************************** Values and Variables ********************************
console.log("Hello World!");


let firstName = "Donald";

console.log(firstName);


// ************************** Variable Naming Conventions *****************************
let last_name2 = "John"
let _function = 50;

let birthYear = 1990;

console.log(last_name2);


// ******************************* Data Types ************************************

/*
JavaScript has 8 Datatypes
    1. String
    2. Number
    3. Bigint
    4. Boolean
    5. Undefined
    6. Null
    7. Symbol
    8. Object
 */

// 1. Booleans->True or False Values
var javaScriptIsEasy = true;
var lifeisHard = false;

console.log(typeof lifeisHard);

// 2. Numbers
donaldAge = 150;
nonsoAge = 90.5;

console.log(typeof donaldAge);
console.log(typeof nonsoAge);

// 3. Strings
let message = "Welcome to Dubai";
console.log(typeof message);

let divine = '24';
console.log(typeof divine)


let henry = '24' + 2;
console.log(typeof henry);


//4. undefined
let year;
console.log(year);
console.log(typeof year)


// An empty value has nothing to do with undefined.
let david = '';
console.log(typeof david);


// Value is undefined, type is undefined
let car = undefined;
console.log(typeof car)


// When adding a number and a string, JavaScript will treat the number as a string.
let vehicle = 16 + 4 + "Volvo"
console.log(vehicle);

/* 5. Null

    In JavaScript null is nothing. It is supposed to be something that doesn't exist
    The data type of null is an object

*/
let prisca = null;
console.log(typeof prisca);

/**
 * Difference between undefined and null
 * Typeof undefined is undefined
 * Typeof null is object 
 */

// undefined and null are equal in value
console.log(null == undefined);


// ******************************** let, const and var *********************************

/* The let keyword

The let keyword was introduced in ES6 (2015)

    **Rules**
    1. let cannot be Redeclared
    2. let must be Declared before use
    3. let has Block Scope
*/


// 1. let cannot be Redeclared
let ugo = "Ugochukwu";
// let ugo = "Kodex Student"; -> Cannot be redeclared


// var can be redeclared
var kels = "Kodex Student";
var kels = "Laravel Developer";

console.log(kels);


// Block Scope
// ----------------let has block scope----------------------

{
    let job = 5;
}

// console.log(job);

// --------------- var does not have block scope------------------
{
    var animal = "Lion"
}

console.log(animal);


// ------------------Redeclaring a variable inside a block will also redeclare the variable outside the block-----------------------------------------
var macBook = 10;

{
    var macBook = 200;
}

console.log(macBook);


//--------------------------Redeclaring a variable inside a block will not redeclare the variable outside the block--------------------

let windows = 5;

{
    let windows = 9000;
}

console.log(windows);

/* Hoisting -> You can use the variable before it is declared 
-------let and const are not hoisted-----------
*/
linux = "Ubuntu";
var linux;


/* The const keyword

The const keyword was introduced in ES6 (2015)

    **Rules**
    1. const cannot be Reassigned
    2. const cannot be Redeclared
    3. const has Block Scope
*/


// const cannot be Reassigned
const costFromTempSiteToKodex = 150;
// costFromTempSiteToKodex = 100;
console.log(costFromTempSiteToKodex);

/**
 * Always declare a variable with const when you know that the value should not be 
 * changed.
 */


// ********************************* Basic Operators *************************************


// Math Operators
const now = 2023;
const divineAge = now - 1990;
const davidAge = now - 1981;

console.log(divineAge, davidAge);


// Multiplication, Division and Raise to power
console.log(divineAge * 2, divineAge / 10, 2 ** 3);


/**
 * Create 2 variables
 * The datatype must be strings
 * Concatenate (Add) the two varaibles
 * And display the result in the console
 */

let bestSeries, bestMovie;

bestSeries = "From";
bestMovie = "Extraction"


console.log(bestSeries + ' ' + bestMovie);



// ----------------------------------Assignment Operator (=) ----------------------------
let numberOne = 10 + 15;
numberOne += 5;
// numberOne = numberOne + 5;
console.log(numberOne);


let numberTwo = 2 + 5;
numberTwo *= 7;
// Can be rewritten as:
numberTwo = numberTwo * 7;

let nummberThree = 1;
nummberThree++;
// Can be rewritten as:
nummberThree = nummberThree + 1;

let numberFour  = 4;
numberFour--;
// Can be rewritten as:
numberFour = numberFour - 1;



// ---------------------------- Comparison Operators ( >, <, >=, <=, ==, ===) --------------------------------
let ugoAge, olisaAge;
ugoAge = '35';
olisaAge = 35;

console.log(ugoAge === olisaAge);


// ----------------------------- Operator Precedence ---------------------------------
const yearNow = 2023;
const josephAge = yearNow - 1999;
const henryAge = yearNow - 1990;

console.log((josephAge + henryAge) * 10);
// 22 + 33 * 10




/* -------------------- CODING CHALLANGE -> JavaScript Operators -------------------------

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

*/

// Step 1 - Store Mark and John's mass and height in variables
let markMass, markHeight, johnMass, johnHeight, markBMI, johnBMI, markHigherBMI;
markMass = 78;
markHeight = 1.69;

johnMass = 92;
johnHeight = 1.95;


// Step 2 - Mark and John's BMI using the formular: BMI = mass / height ** 2 
markBMI = markMass / markHeight ** 2; // markMass / markHeight * markHeight
johnBMI = johnMass / johnHeight ** 2;

console.log(markBMI, johnBMI);


// Step 3 - Create a boolean variable 'markHigherBMI'
markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);


// *********************************** Strings and Template Literals ********************
const myName = 'Donald';
const myJob = 'Developer';
const yearOfBirth = 1717;
const currentYear = 2077;

const donald = "I'm " + myName + ', a ' + (currentYear - yearOfBirth) + ' year old ' + myJob + '!';
console.log(donald);


const newDonald = `I'm ${myName}, a ${currentYear - yearOfBirth} year old ${myJob}!`;
console.log(newDonald);

console.log(`Hello how are you doing`);

console.log('This is \n\
for multiple \n\
lines');

console.log(`This
is
for multiple
lines`);


// ******************************** Taking Decision: if / else statements *************************************
const kelsAge = 35;

// If statement only executes when the expression evaluated to true
if(kelsAge >= 18){
    console.log(`Kels is eligible to drink Alchohol 🍷 cos his age is ${kelsAge}`);
}
// Else statement executes when the if statement returns false
else{
    const yearsLeft = 18 - kelsAge;
    console.log(`Kels is not eligible to drink alchohol 🥲. Wait another ${yearsLeft} years`);
}

let dayOfTheWeek = 'Monday';

if(dayOfTheWeek == 'Monday'){
    console.log('SIT AT HOME 🏠')
}
else{
    console.log('Write some code!');
}


////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

// Step 1 - Store Mark and John's mass and height in variables

// Step 2 - Mark and John's BMI using the formular: BMI = mass / height ** 2 
markBMI = markMass / markHeight ** 2; // markMass / markHeight * markHeight
johnBMI = johnMass / johnHeight ** 2;

console.log(markBMI, johnBMI);


// Step 3 - Create a boolean variable 'markHigherBMI'
if(markBMI > johnBMI){
    console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`)
}
else{
    console.log(`John's BMI ${johnBMI} is higher than Marks's ${markBMI}!`)
}

// ************************** Ttpe Conversion to  anc coercion
//  TYpe conversion is the process converting a value from one type to another

const inputYear =  '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 10);

console.log(Number('Donald'));
console.log(typeof NaN);
console.log(String(23), 23);



//*************TYpe Coersion */
/***********Type Coersion is when javascript coerces or changes a data type by itself */

const sum = 35 + 'Hello';
console.log(sum);

console.log('23' - '10' - 3 );

console.log('24'/ 2);

let n= '1' + 1;
n = n - 1;
console.log(n);



/******************Tuthy and falsy value */

/******************Whe have 5 Falsey values: 0, '', undefined, null and NaN Anything else */

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

//Create new constant about money

//THis is a truthy value
const money = 100;
if(money){
    console.log('Buy a Bread');
}else{
    console.log('Dont Spend a Dime');
}


//This is a Falsy value
let product = 0;
if(product){
    console.log('Stay Home');
}else{
    console.log('Buy Bread Again')
}



// *************************************************** Logical Operators ********************************************
/* Logical Operatoes are used to determine the logic between vairables or values
    && is the AND Operator
    || is the OR Operator
    ! is the NOT Operator   
*/
const hasDriversLicense = true;
const hasGoodVision = false;
const isTired = false;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);


if(hasDriversLicense && hasGoodVision || isTired){
    console.log('Nonse is eligible to drive');
}
else{
    console.log('Someone else should drive');
}

/* Coding Challange 3 - If Statements and Opeartors
There are two football teams, Manchester and Barcelona. They compete against each other 3 times. The team with the highest average score will win the trophy!

1. Calculate the average score for each team using the test data below.

2. Compare the average scores of the teams to determine the winner of the competition and display it on the console. Remember to account for a possible draw, where both teams have the same average score.

3. BONUS 1: Introduce a minimum score requirement of 100. According to this rule, a team can only win if it has a higher score than the other team and a score of at least 100 points. Hint: Use a logical operator to test for the minimum score, along with multiple else-if blocks. 😉

4. BONUS 2: The minimum score requirement also applies to a draw. A draw will only occur if both teams have the same score and both teams have a score greater than or equal to 100 points. Otherwise, neither team wins the trophy.

TEST DATA: Manchester scores 96, 108, and 89. Barcelona scores 88, 91, and 110.
TEST DATA BONUS 1: Manchester scores 97, 112, and 101. Barcelona scores 109, 95, and 123.
TEST DATA BONUS 2: Manchester scores 97, 112, and 101. Barcelona scores 109, 95, and 106.

GOOD LUCK! 😀

*/
// Step 1
const manchesterScore = (96 + 108 + 89) / 3;
const barcelonaScore = (88 + 91 + 110) / 3;

console.log(manchesterScore, barcelonaScore);

// Step 2
if(manchesterScore > barcelonaScore){
    console.log('Manchester wins the trophy 🏆');
}
else if(manchesterScore < barcelonaScore){
    console.log("Barcelona wins the trophy 🏆");
}
else if(manchesterScore === barcelonaScore){
    console.log('Its a Draw!, Both Teams win 😉');
}


// Step 3
const manchesterScore2 = (97 + 112 + 101) / 3;
const barcelonaScore2 = (109 + 95 + 123) / 3;
console.log(manchesterScore2, barcelonaScore2);

if(manchesterScore2 > barcelonaScore2 && manchesterScore2 >= 100){
    console.log("Manchester wins the trophy 🏆");
}
else if(barcelonaScore2 > manchesterScore2 && barcelonaScore2 >= 100){
    console.log("Barcelona wins the trophy 🏆");
}
else if(manchesterScore2 === barcelonaScore2 && manchesterScore2 >= 100 && barcelonaScore2 >= 100){
    console.log("Both wins the trophy 🏆");
}
else{
    console.log("No one wins 😭");
}




/* The switch statment */

const day ="Tuesday";
switch(day){
    case 'monday';
    console.log('Sit at Home';)
}

