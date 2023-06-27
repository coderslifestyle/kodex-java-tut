/*
Javascript has 8 datatype
1. String
2. number
3. bigint
4. boolean
5. undefined
6. undefined null
7. symbol
8. object





*/


//Value and Variable
console.log("Hello World");


let firstName = "Ebuka";

console.log(firstName);


//Variable nameing convention
let last_name2 = "Kelz";
let $function = 50;

//BOlean-True or False valiues
var JavaScriptIsEasy = true;
console.log(typeof JavaScriptIsEasy);

console.log(typeof 25);




//Numbers

donaldAge = 150;
nsonsoAge = 90.5;

console.log(typeof donaldAge);
console.log(typeof nsonsoAge);


let henry = '24' + 2;

console.log(typeof henry);


// Null (Undefined)
let year;
console.log(typeof year);

//An empty value has nothng to do with undified rather, its a string
let david = '';
console.log(typeof david);


let car = undefined;
console.log(typeof car)


// let vehicle = 16 + 4 + "volvo";
// console.log(typeof vehicle);

//when adding a number and string
let vehicle = 16 + 4 + "volvo";
console.log(vehicle);


/*
In javascript null is nothing. it is supposed to be somethiing that doesn't exist. The datatype of null is an object
*/

let prisca = null;
console.log(typeof prisca);



//undefine and null ae equal in value
console.log(null == undefined);



//let can not be Redecleared
let ugo = "UGOCHUKWU";

//let ugo = "Kodex studen"; -> cannot be redeclared


//var can be redeclared
var kelz = "CEO DRIFLY TECH LIMITED";
var kelz = "Laravel Developer";
console.log(kelz);


// Block scope
//let has block scope
{
    let job = 5;
    console.log(job);
}


//var does not have a block scope
{
    var animal = "Elephant";
}

console.log(animal);


//
var macBook = 10;

{
    var macBook = 200;
}
console.log(macBook);



// REDECLARING A VARIABLE INSDIE A BLOCK WILL NOT REDECLARE THE VARIAVLE OUTSIDE THE BLOCK

let windows = 5;

{
    let windows = 9000;
}
console.log(windows);


/*Hoisting -> You can use the variabele before it is declared
        -----------Let and const are not Hoisted---------
*/
linux = "Ubuntu";
var linux;


//The const keyword
/* **Rules**
    1. Const cant be redeclared
    2. const can not be reassigned 
    3. const has block scope
*/


//Const can not be redeclared

// const costFromTempSite = 150;
// costFromTempSite = 150;
// console.log(costFromTempSite);


/** Always declare a varible with const when you  know that the value should not be changed
 * **/



// ***************************NEXT CLAS****************************************
// Basic Operators

// Math operatiors

const now  = 2023;
const divineAge = now - 1990;
const davidAge = now - 1990

console.log(divineAge, davidAge);

//Multiplication, Division and Raise to Power of number
console.log(divineAge * 2, davidAge / 10, 2 ** 3);

/*
* Create two variable 
* The datatype Must be string

*/

const amaraVilage = "Enugu";
const ogeSchool = "Unizik";
const addUp = amaraVilage + ' ' + ogeSchool;
console.log(addUp);

//Or using let instead of const

let amaraVilages, ogeSchools;

amaraVilages = "Enugu";
ogeSchools   = "Unizik";

console.log(amaraVilages + ' ' + ogeSchools);

//------------------ USING ASSIGNMENT OPERATORS (=) --------------------------
let numberOne = 10 + 15;
numberOne = numberOne + 5;




let numberTwo = 2 +5;
numberTwo *= 7;
 //it can also be used as
//  numberTwo = numberTwo * 7;




 let numberThree = 1;
 numberThree ++;

 //it can be written in the following formate
 //numberThree = numberThree + 1;



 let numberFour = 4;
 numberFour --;

 //It can be written as following format too

 //numberFour = numberFour - 1;

 console.log(numberOne, numberTwo, numberThree, numberFour);


 // ----------------------- Comparison Operators (> greater than, < less than, >= greater than equal to, <= less than equal to)------------

 let ugoAge, olisaAge;
 ugoAge = 25;
 olisaAge = 23;
 console.log(ugoAge > olisaAge);


 //----------------------- Operator precedence ----------

 const yearNow = 2023;
 const joshAge = yearNow - 1999;
 const kelzAge = yearNow - 1987;
 console.log(kelzAge + joshAge * 10);
    //or this method console.log((kelzAge + joshAge) * 10);

 // Josh age = 24 kelz age 36 so the precedence is 24 + 36 multiply by 10



 // ------ CHALLENGE ABOUT OPERATORS -------
const johnWeight = 78;
// const johnHeight = 1.69;
// const markWeight = 95;
// const markHeight = 1.88;

// const bmiWeight = johnWeight / markWeight ** 2;

// const bmiHeight =  johnHeight / markHeight ** 2;

// console.log(bmiWeight);

// console.log(bmiHeight);



// console.log(bmiWeight > bmiHeight);





/* -------------------- CODING CHALLANGE -> JavaScript Operators -------------------------

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

*/

// Corrrection to the previous assignment

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





// ********************* String and template literial *******************************
const myName = 'Kelz';
const myJob = 'Laravel Developer';
const myYearOfBirth = '1987';
const currentYear = '2023';

const Kelz = "I'm " + myName + ', a ' + (currentYear - myYearOfBirth) + ' year old ' + myJob + '!';

console.log(Kelz);


const  newKelz = `I'm ${myName}, a ${currentYear - myYearOfBirth} year old ${myJob}!`;
console.log(newKelz);


// Taking a decision: if/else statement


// const kelsAge = 36;
const kelsAge = 5;
// if (kelsAge >= 36)

if (kelsAge >= 18){
    console.log(`kelz is eligiable to drink alchohol cos his age is ${kelsAge}`);
    
}else{
    const yearsLeft = 18 - kelsAge;
    console.log(`Kels is not eligible to drink alchohol. Wait for another ${yearsLeft} years`);
}


let dayOfTheWeek = 'Monday';
if (dayOfTheWeek == 'Monday >= Tuesday') {
    console.log('SIT AT HOME');
    
}else{
    const notMonday ='Tuesday';
    console.log(`Sorry Today is ${notMonday}, not ${dayOfTheWeek}, go to work`);
}