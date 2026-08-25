// Functions

// function - keyword
// functionName - function name
// () - parameter - Invocation operator / call operator
// { - function body
// }
// functionName() - function callback with arguments

// Function Syntax
// type:1
function welcome(){
    console.log("Welcome Learners");
}
welcome();
// type:2
function welcome(name){
    console.log(`Welcome ${name}`); // Welcome Guna
}
welcome("Guna");


// // Function with Conditions (Hardcoding method)
// Type:1
function checkAge(){
    let age = 18;
    if(age >= 18){
        console.log("Eligible"); 
    } else{
        console.log("Not Eligible"); 
    }
}
checkAge(); // Eligible
// Type:2
function checkAge1(age1){
    if(age1 >= 18) {
        console.log("Eligible");
    }else {
        console.log("Not Eligible");
    }
}
checkAge1(18); // Eligible
checkAge1(15); // Not Eligible


// Function parameters and arguments
// Type:1
let a = 10;
let b = 15;
let c = 20;
let d = 25;
function add(num1,num2,num3,num4){
    console.log(num1+num2+num3+num4);
}
add(a,b,c,d); // 70
// Type:2 ( Rest Parameter-more nbr adding purpose)
function addEverything(...numbers){
    let total = 0;
    // for loop modern method of -> for...of 
for(let num of numbers){
total += num;
}
console.log(total);
}
addEverything(10,15,20,25); // 70



// return statement example
// Type:1
function greet(){
    return "Welcome Back Learner"
}
console.log(greet()); // Welcome Back Learner
// Type:2
function greet(){
    return "Welcome Back Learner"
}
let message = greet();
console.log(message.toUpperCase()); //WELCOME BACK LEARNER
console.log(message + "!!!"); // Welcome BAck Learner!!! 


// Real-time Example for calculating student grade
function calculateGrade(studentName, studentMark){
    let grade;
    if(studentMark >= 90){
        grade = "A";
    } else if(studentMark >= 75){
        grade = "B";
    } else if(studentMark >= 50){
        grade = "C";
    } else {
        grade = "Fail";
    }
    // console.log(`Hi ${studentName} you got ${grade} grade`);
    return `Hi ${studentName} you got ${grade} grade`;
};
// calculateGrade("Guna", 82);
console.log(calculateGrade("Guna", 82));

// Advance function pattern
// Nested functions
function parent(functionName){
    console.log("Parent Function Executed");
    console.log(functionName, "Function Executed");
    function child(){
        console.log("Child Function executed");
    };
    child();
};
parent("Parent");


// Most wanted interview problem
// Function Currying

// function multiply(a){
//     return function(b){
//         return function(c){
//             return a + b + c;
//         }
//     };
// };
// console.log(multiply(5)(2)(3));

function authentication(username){
    return function(password){
        if(username === "admin@mail.com" && password === "admin@123"){
            console.log("Welcome Admin");
        }else{
            console.log("Invalid Credentials");
        }
    }
};

authentication("admin@mail.com")("admin@123");
authentication("admin@mail.com")("admin@234");