// // Question no 1


// var num = prompt("Enter a positive number");
// num = Number(num);

// document.write(`Number: ${num}<br>`);
// document.write(`Round off value: ${Math.round(num)}<br>`);
// document.write(`Floor value: ${Math.floor(num)}<br>`);
// document.write(`Ceil value: ${Math.ceil(num)}`);

// document.write(`<hr>`);

// // Question no 2

// var num = prompt("Enter a negative floating point number");
// num = Number(num);

// document.write(`Number: ${num}<br>`);
// document.write(`Round off value: ${Math.round(num)}<br>`);
// document.write(`Floor value: ${Math.floor(num)}<br>`);
// document.write(`Ceil value: ${Math.ceil(num)}`);
// document.write(`<hr>`);


// // Question no 3

// var num = prompt("Enter any number");
// num = Number(num);

// document.write(`Number: ${num}<br>`);
// document.write(`Absolute value: ${Math.abs(num)}`);

// document.write(`<hr>`);

// // Question no 4

// var diceValue = Math.floor(Math.random() * 4) + 1;
// document.write(`Random Dice Value: ${diceValue}`);
//  document.write(`<hr>`);
// var diceValue = Math.floor(Math.random() * 6) + 1;
// document.write(`Random Dice Value: ${diceValue}`);
//  document.write(`<hr>`);

// // Question no 5

// var coinSides = ["Heads", "Tails"];
// var randomIndex = Math.floor(Math.random() * 2);
// var result = coinSides[randomIndex];

// document.write(`Coin Toss Result: ${result}`);
//  document.write(`<hr>`);

// // Question no 6

// var randomNumber = Math.floor(Math.random() * 100) + 1;
// document.write(`Random number between 1 and 100: ${randomNumber}`);
// document.write(`<hr>`);

// // Question no 7

// var weightInput = prompt("Enter your weight (e.g., 50, 50kgs, 50.2kgs)");
// var numericPart = weightInput.replace(/[^\d.]/g, "");
// var weight = Number(numericPart);
// document.write(`Your weight is ${weight} kilograms`);
// document.write(`<hr>`);


// // Question no 8

// var secretNumber = Math.floor(Math.random() * 10) + 1;
// var userInput = Number(prompt("Guess the secret number (1 to 10)"));

// if (userInput === secretNumber) {
//     document.write(`Congratulations! You guessed the secret number ${secretNumber}`);
// } else {
//     document.write(`Try again! The secret number was ${secretNumber}`);
// }
// document.write(`<hr>`);


// // PDF 2

// // Question no 1

// document.write(new Date())
//  document.write(`<hr>`);

// // Question no 2

// var monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
// var a = new Date();
// var b = a.getMonth(); 
// alert(`Current month is ${monthNames[b]}`);

// // Question no 3

// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var currentDate = new Date();
// var currentDayIndex = currentDate.getDay(); 
// var halfDayName = dayNames[currentDayIndex].slice(0, 3); 
// alert(`Today is ${halfDayName}`);


// // Question no 4

// var currentDate = new Date();
// var currentDay = currentDate.getDay();
// if (currentDay === 0 || currentDay === 6) {
//     document.write(`It's Fun day`);
// } 
// else {
//     document.write(`It's a regular day`);
// }
// document.write('<hr>')


// // Question no 5

// var today = new Date();
// var day = today.getDate();
// if (day <16){
//     alert('first fifteen days of the month')
// } 
// else {
//     alert('last days of the months')
// }


// // Question n 6

//  var todayDate = new Date();
//  var since1970 = todayDate.getTime()/(1000*60)
//  alert(since1970);

// //  Question no 7

// var time = new Date();
// var hours = time.getHours();
// if(hours <12){
//     alert('its AM')
// }
// else{
//     alert('its PM')


// }


// // Question no 8

// var laterDate = new Date(2020,11,13);
// alert(laterDate)


// // Question no 9

// var rdStart = new Date(2015,5,18);
// var today = new Date();
// var diffrentTime = today.getTime()- rdStart.getTime()
// var dayPassed = Math.floor(diffrentTime/(1000*60*60*24))
// alert(dayPassed);

// // Question no 10

// var date = new Date();
// var start = new Date(2015,0,1)
// var seconds = Math.floor((date.getTime()-start.getTime())/1000);
// document.write(`Seconds elapsed since jan 1 2015 : ${seconds}`)
// document.write('<hr>')

// // Question no 11

// var currentDate = new Date();
// var currentHour = currentDate.getHours();
// alert(currentHour)



// // Question no 12

// var currentDate = new Date(); 
// var currentYear = currentDate.getFullYear();
// currentDate.setFullYear(currentYear-100);
// alert(`Date 100 years back: ${currentDate}`);

// // Question no 13

// var userAge = Number(prompt("Enter your age"));
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - userAge;
// document.write(`Your age is ${userAge} <br>`);
// document.write(`Your birth year is ${birthYear}`);

// Question no 14


var a = prompt("Enter Customer Name");
var b = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var c = new Date();
var d = b[c.getMonth()];
var e = Number(prompt("Enter number of units"));
var f = Number(prompt("Enter charges per unit"));
var g = e * f;
var h = Number(prompt("Enter late payment surcharge"));
var i = g + h;

document.write(`<h2>K-Electric Bill</h2>`);
document.write(`Customer Name: ${a}<br>`);
document.write(`Current Month: ${d}<br>`);
document.write(`Number of Units: ${e}<br>`);
document.write(`Charges per Unit: ${f.toFixed(2)}<br>`);
document.write(`Net Amount Payable (within Due Date): ${g.toFixed(2)}<br>`);
document.write(`Late Payment Surcharge: ${h.toFixed(2)}<br>`);
document.write(`Gross Amount Payable (after Due Date): ${i.toFixed(2)}`);

