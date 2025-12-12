// Chapter no 1
// Question 1

alert("Welcome to JavaScript!");

// Question 2

var userName = prompt("Enter your name:");
alert(`Your name is: ${userName}`);

// Question 3

var favColor = prompt("Enter your favorite color:");
alert(`Your favorite color is : ${favColor}`);




// chater no 2
// Question 1

var firstName = "Ali";
var lastName = "Khan";
alert("Full Name: " + firstName + " " + lastName);

// Question 2

var city = "Karachi";
alert("You live in " + city);

// Question 3

var hobby = "Reading";
alert("Your hobby is: " + hobby);




// Chapter no 3
// Question 1

var num1 = 10;
var num2 = 20;
var sum = num1 + num2;
alert("Sum of numbers is: " + sum);

// Question 2

var marks = 65;
if (marks >= 50) {
    alert("Pass");
} else {
    alert("Fail");
}

// Question 3

var age = 22;
if (age > 18) {
    alert("You are above 18");
}

// chapter no 4

// Question 1

var first_name = "Ali";
var userAge = 20;
var totalAmount = 500;

alert("Legal variable names created successfully.");


// Question 2:  ye code is leay comment h kyu k code mai error aeyga

// var 1name = "abc";
// var user-name = "xyz";
// var var = "test";

alert("Illegal variable names cannot be used — shown in comments.");


// Question 3

var variablesList = [first_name, userAge, totalAmount];
alert("Variables: " + variablesList);

// Chapter no 5

// Question 1
var num1 = 12;
var num2 = 4;

var sum = num1 + num2;
var difference = num1 - num2;

alert("Sum: " + sum);
alert("Difference: " + difference);

// Question 2
var a = 15;
var b = 3;
var product = a * b;
var quotient = a / b;
var remainder = a % b;
alert("Product: " + product);
alert("Quotient: " + quotient);
alert("Remainder: " + remainder);



// Question 3
var value = 10;
value++;
alert("Incremented Value: " + value);


// Question no 6

// Question 1

var num = 10;
num++;
alert("After ++ : " + num);
num--;
alert("After -- : " + num);


// Question 2

var value = 20;
value += 5;
alert("After += : " + value);
value -= 3;
alert("After -= : " + value);


// Question 3

var number = 6;
number *= 2;
alert("After *= : " + number);
number /= 3;
alert("After /= : " + number);


// Chapter no 7

// Question 1
var result1= (5 + 3) * 2;
alert("Result 1: "+ result1);

// Question 2
var a = 4;
var b= 6;
var c = 2;
var result2 = a + b * c - 3;
alert("Result 2: " + result2);



// Question 3
var x = (10 - (2 + 3)) * (4 + 1);
alert("Result 3: "+ x);

// Chapter no 8



// Question 1
var firstName = "Ali";
var lastName = "Khan";
alert(firstName +" "+ lastName);

// Question 2
var city="Karachi";
alert("Welcome from "+ city);

// Question 3
var part1="JavaScript ";
var part2="is ";
var part3="awesome.";
alert(part1+part2+part3);

// Chapter no 9


// Question 1
var color = prompt("Enter your favorite color:");
alert("Your favorite color is " +color);
// Question 2
var age = prompt("Enter your age:");
alert("Your age is "+age);

// Question 3
var fruit = prompt("Enter your favorite fruit:");
alert("Your favorite fruit is  "+ fruit );

// CHapter no 10


// Question no 1

var num =13;
if(num>10){
    alert("Number is greater than 10");
}

// Question 2
var marks =55;
if(marks>=50) {
    alert("Pass");
}

// Question 3
var age=15;
if(age<18) {
    alert("Minor");
}

// Chapter no 11

// Question 1
var a = 10;
var b = 5;
alert(a > b);


// Question 2
var x = 7;
var y = 7;
if (x == y) {
    alert("Numbers are equal");
} else {
    alert("Numbers are not equal");
}


// Question 3
var p = 8;
var q = 12;
alert(p <= q);
// Chapter no 12

// Question 1
var marks = 85;
if (marks >= 90) {
    alert("A");
} else if (marks >= 70) {
    alert("B");
} else {
    alert("C");
}


// Question 2
var age = 15;
if(age<12){
    alert("Child");
} 
else if(age<18){
    alert("Teen");
}
else{
    alert("Adult");
}


// Question 3
var temperature=35;
if(temperature>30){
    alert("Hot");
} 
else if(temperature>=20){
    alert("Warm");
} 
else{
    alert("Cold");
}

// Chapter no 13


// Question 1
var num =8;
if (num>0&&num% 2==0) {
    alert("Number is positive and even");
}

// Question 2
var marks=75;
if(marks>=50 && marks<=100) {
    alert("Valid Marks");
}
// Question 3
var number=15;
if(number%3==0&&number%5==0) {
    alert("Number is divisible by 3 and 5");
}

// Chapter no 14

// Question 1
var age = 20;
var hasID = true;
if (age >= 18) {
    if (hasID) {
        alert("Allowed");
    } else {
        alert("Not Allowed");
    }
}

// Question 2
var num = 4;
if (num > 0) {
    if (num % 2 == 0) {
        alert("Number is positive and even");
    } else {
        alert("Number is positive but odd");
    }
}
// Question 3
var marks = 60;
var extraCredit = true;
if (marks >= 50) {
    if (extraCredit) {
        alert("Pass with extra credit");
    } else {
        alert("Pass");
    }
}
// Chapter no 15

// Question 1
var fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
alert(fruits);


// Question 2
var numbers = [10, 20, 30, 40, 50];
alert("First element: " + numbers[0]);
alert("Last element: " + numbers[numbers.length - 1]);


// Question 3
var colors = ["Red", "Green", "Blue", "Yellow"];
alert(colors);


// Chapter no 16


// Questin no 1

var fruits =["banana","gaava","peach","mango","kiwi","strawberry"];
fruits.push("apple");
alert(fruits);


// Question no 2

fruits.pop();
alert(fruits);


// Question no 3

fruits.shift()
fruits.unshift("orange")
alert(fruits)


// Chapter no 17


// Question no 1

var vehicles =["car","bus","bike","jeep","jetsky"];
vehicles.splice(1,0,"truck");
alert(vehicles);

// Question no 2

vehicles.splice(2,1);
alert(vehicles)


// Question no 3


var newarr = vehicles.slice(1,3)
alert(newarr);


// chapter no 18


// Question 1
for (var i = 1; i <= 5; i++) {
    alert(i);
}

// Question 2
var arr = ["apple", "banana", "mango", "orange"];
for (var i = 0; i < arr.length; i++) {
    alert(arr[i]);
}

// Question 3
for (var i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        alert(i);
    }
}



// Chapter no 19

// Question 1
var arr = [2, 4, 6, -3, 8];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        break;
    }
    alert(arr[i]);
}

// Question 2
var arr2 = [3, 7, 10, 14, 21];
var flag = false;
for (var i = 0; i < arr2.length; i++) {
    if (arr2[i] % 2 === 0) {
        flag = true;
    }
}
alert(flag);

// Question 3
var arr3 = [10, 25, 45, 55, 60];
for (var i = 0; i < arr3.length; i++) {
    if (arr3[i] > 50) {
        break;
    }
    alert(arr3[i]);
}


// chapter no 20


// Question 1
for (var i = 1; i <= 3; i++) {
    for (var j = 1; j <= 10; j++) {
        alert(i + " x " + j + " = " + (i * j));
    }
}

// Question 2
var arr2D = [
    [1, 2],
    [3, 4],
    [5, 6]
];
for (var i = 0; i < arr2D.length; i++) {
    for (var j = 0; j < arr2D[i].length; j++) {
        alert(arr2D[i][j]);
    }
}

// Question 3
var arr1 = [1, 2];
var arr2 = [10, 20];
for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
        alert(arr1[i] + arr2[j]);
    }
}

// Chapter no 21

var text1 = "hello world";
alert(text1.toUpperCase())


// Question no 2

var text2 ="HELLO WORLD";
alert(text2.toLowerCase())


// Question 3
var text3 = "hello";
var capitalized = text3.charAt(0).toUpperCase() + text3.slice(1).toLowerCase();
alert(capitalized);


// Chapter 22 


// Question 1
var textA = "JavaScript";
alert(textA.length);

// Question 2
alert(textA.slice(0, 3));

// Question 3
alert(textA.slice(textA.length - 3));


// Chapter 23 

// Question 1
var textB = "I love JavaScript";
alert(textB.indexOf("JavaScript"));

// Question 2
alert(textB.lastIndexOf("a"));

// Question 3
alert(textB.includes("love"));


// Chapter 24

// Question 1
var textC = "Programming";
alert(textC.charAt(2));

// Question 2
alert(textC.charAt(textC.length - 1));

// Question 3
alert(textC.charAt(Math.floor(textC.length / 2)));

// Chapter no 25

// Question 1
var textA = "I like JavaScript";
var newTextA = textA.replace("JavaScript", "HTML");
alert(newTextA);

// Question 2
var textB = "banana";
var replacedAllB = textB.replaceAll("a", "o");
alert(replacedAllB);

// Question 3
var textC = "I love JavaScript and JavaScript is fun";
var replacedFirstC = textC.replace("JavaScript", "HTML");
alert(replacedFirstC);
