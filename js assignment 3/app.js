    // Question no 1

    var cityName = "karachi";
    var userInput = prompt("Enter city name : ")

    if(cityName.toLowerCase()===userInput.toLowerCase()){
        alert("Welcome to city of lights")
    }
    else{
        alert("Welcome to "+ userInput)
    }

    // Question no 2

    var userGender = prompt("Enter your gender : (Male or Female)");
    var gender1 = "male";
    var gender2 = "female";

    if(userGender.toLowerCase()===gender1.toLowerCase()){
        alert("Good morning Sir 😊")
    }
    else if(userGender.toLowerCase()===gender2.toLowerCase()){
        alert("Good morning Ma'am 😊")
    }
    else{
        alert("Sorry 🙂")
    }

    // Question no3 

    var signalColor = prompt("Enter color of road traffic signal :");
    var color1 = "red";
    var color2 = "yellow";
    var color3 = "green";

    if(signalColor.toLowerCase()===color1.toLowerCase()){
        alert("Must stop 🛑")
    }
    else if(signalColor.toLowerCase()===color2.toLowerCase()){
        alert("Ready to move 🚴‍♂️")
    }
    else if(signalColor.toLowerCase()===color3.toLowerCase()){
        alert("Move now 🚵🏽‍♂️")
    }
    else{
        alert("This color not in signal 🚫")
    }

    // Question no 4

    var fuel = +prompt("Enter remaining fuel in your car (in litres):");

    if (fuel < 0.25) {
    alert("Please refill the fuel in your car ⛽");
    } 
    else {
    alert("Fuel level is sufficient 👍");
    }

    // Question no 5   "A"

    var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

// // Question no 5   "B"

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

// // Question no 5   "C"


var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}


// // Question no 5   "D"

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

// // Question no 5   "E"

if (true){
alert("True");
}
if (false){
alert("False");
}


// // Question no 5   "F"


if("car" < "cat"){
alert("cat is smaller than car");
}

    // Question no 6

    var english = +prompt("Enter marks obtained in english :");
    var urdu = +prompt("Enter marks obtained in urdu :");
    var math = +prompt("Enter marks obtained in math :");
    var totalMarks = 300;
    var totalObtained = english+urdu+math;
    var percentage = totalObtained/totalMarks*100;
    var grade, remarks;

    if (percentage>= 80) {
    grade = "A-one";
    remarks = "Excellent";
    } 
    else if (percentage >= 70) {
    grade = "A";
    remarks ="Good";
    } 
    else if (percentage >=60) {
    grade ="B";
    remarks = "You need to improve";
    } 
    else {
    grade = "Fail";
    remarks= "Sorry";
    }

    document.write("<h2>Marks Sheet</h2>");
    document.write("Total Marks: "+ totalMarks +"<br>");
    document.write("Marks Obtained: "+totalObtained+"<br>");
    document.write("Percentage: "+percentage+"%<br>");
    document.write("Grade: "+grade+"<br>");
    document.write("Remarks: "+remarks+"<br>");


    // Question no 7


    var number1 = 5;
    var guess = +prompt("Guess the secret number (1 to 10)")
    
    if (guess===number1){
        alert("Bingo! Correct answer 🎯");
    }
    else if (guess+1=== number1){
        alert("Close enough to the correct answer 😉");
    }
    else{
        alert("Sorry, try again!")
    }


     // Question no 8

     var number2 = +prompt("Enter a number :")

     if(number2%3===0){
        alert("The number is divisible by 3 ✅");
     }
     else{
         alert("The number is NOT divisible by 3 ❌");
     }

    // Question no 9


    var number3 =+prompt("Enter a number:");

    if (number3 %2 ===0) {
        alert("The number is even 🔵");
    } 
    else {
        alert("The number is odd 🔴");
    }


    // Question no 10

    var temperature= +prompt("Enter the temperature :")

    if (temperature > 40) {
        alert("It is too hot outside.");
    }
    else if (temperature > 30) {
        alert("The Weather today is Normal.");
    } 
    else if (temperature > 20) {
        alert("Today's Weather is cool.");
    } 
    else if (temperature > 10) {
        alert("OMG! Today's weather is so Cool.");
    }

    // Question no 11

    var num1 = +prompt("Enter the first number:");
    var num2 = +prompt("Enter the second number:");
    var operation = prompt("Enter the operation (+, -, *, /, %):");


    if(operation ==="+"){
        result =num1+num2;
    }
    else if(operation ==="-"){
        result =num1-num2;
    }
    else if(operation ==="/"){
        result =num1/num2;
    }
    else if(operation ==="*"){
        result =num1*num2;
    }
    else if(operation ==="%"){
        result =num1%num2;
    }
    else{
        result = "invalid operation!";
    }

    alert("The result is : " + result)