
// Question no 1

var arr = [[],[],[]];

// Question no 2
document.write(`<hr>`);
var matrix = [[0, 1, 2, 3],[1, 0, 1, 2],[2, 1, 0, 1]];

// Question no 3
document.write(`<hr>`);
for(var i=1; i<=10; i++){
    document.write(`<p>${i}</p>`);
}

// Question no 4    
document.write(`<hr>`);
var tableNum = +prompt("Enter a number to show its multiplication table");
var tableLength = +prompt("Enter length of multiplication table");
document.write(`<h3>Multiplication table of ${tableNum} </h3>`);
document.write(`<h3>Length ${tableLength} </h3>`);
for(var i=1; i<=tableLength; i++){
    document.write(`<p>${tableNum} x ${i} = ${tableNum*i} </p>`);
}

// Question no 5
document.write(`<hr>`);
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for(var i=0; i<fruits.length; i++){
    document.write(`<p>${fruits[i]}</p>`);
}
for(var i=0; i<fruits.length; i++){
    document.write(`<p>Element at index ${i} is ${fruits[i]}</p>`);
}

// Question no 6
document.write(`<hr>`);
document.write("<h3>Counting:</h3>");
for(var i=1; i<=15; i++){
    document.write(`${i}, `);
}
document.write("<h3>Reverse Counting:</h3>");
for(var i=10; i>=1; i--){
    document.write(`${i}, `);
}
document.write("<h3>Even:</h3>");
for(var i = 0; i <= 20; i++){
    if(i%2==0){
         document.write(`${i}, `);
    } 
}
document.write("<h3>Odd:</h3>");
for(var i = 0; i <= 20; i++){
    if(i%2!=0){
         document.write(`${i}, `);
    }   
}

document.write("<h3>Series:</h3>");
for(var i=2; i<=20; i+=2){
    document.write(`${i}k, `);
}

// Question no 7
document.write(`<hr>`);
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
userInput = userInput.toLowerCase();
for (var i =0; i<A.length; i++){
    if(A[i] === userInput){
        document.write(`<p>${userInput} is available at index ${i} in our bakery</p>`);
        break;
    }
}
if(i === A.length){
    document.write(`<p>We are sorry. ${userInput} is not available in our bakery</p>`);
}

// Question no 8

var arr = [24, 53, 78, 91, 12];
var largest = arr[0];
for(i=1; i<arr.length; i++){
    if(arr[i]>largest){
        largest = arr[i];
    }
    
}
document.write(`<hr>`);
document.write(`Array items: ${arr}<br>`);
document.write(`<p>The largest number is ${largest}</p>`);

// Question no 9

var arr = [24, 53, 78, 91, 12];
var smallest = arr[0];
for(i=1; i<arr.length; i++){
    if(arr[i]<smallest){
        smallest = arr[i];
    }
}
document.write(`<hr>`);
document.write(`Array items: ${arr}<br>`);
document.write(`<p>The smallest number is ${smallest}</p>`);

// Question no 10

document.write(`<hr>`);
for(i=1; i<=20; i++){
    document.write(`${i*5}, `);
}         




