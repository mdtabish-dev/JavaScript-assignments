// Question no 1

function func1(){
    var timeDate = new Date()
    document.write(timeDate)
}
func1()

// Question no 2

function func2(){
    var firstName = prompt('Enter your first name :')
    var lastName = prompt('Enter your last name :')
    var fullName = `${firstName} ${lastName}`
    alert(`Hello ${fullName}`)
}
func2()

// Question no 3

function func3(){
     var firstNum = +prompt('Enter your first number :')
     var lastNum = +prompt('Enter your last number :')
     var sumOfNum = firstNum+lastNum
     alert(`Sum of ${firstNum} and ${lastNum} :${sumOfNum}`)
    
}
func3()

// Question no 4

function func4(){
    var num1st = +prompt('Enter first number :')
    var num2nd = +prompt('Enter second number :')
    var opt = prompt('Enter opretor (+,/,-,*) :')
if (opt==="+"){
    alert("Result :"+num1st+num2nd)
}
else if (opt==="*"){
    alert("Result :"+num1st*num2nd)
}
else if (opt==="-"){
    alert("Result :"+num1st-num2nd)
}
else if (opt==="/"){
    alert("Result :"+num1st/num2nd)
}
else{
    alert("Invalid operator")
}

}
func4()

// Question no 5

function func5(num){
    return num*num;
}
var ans = func5(7)
alert(`Square : ${ans}`)

// Question no 6

function func6(){
    var num = +prompt("Enter a number:");
    var result = 1;
    for (var i = 1; i <= num; i++) {
        result = result * i;
    }
    alert("Factorial: " + result);
}
func6();


// Question no 7

function func7(){
    var startNum = +prompt('Enter a start number')
    var endNum = +prompt('Enter a end number')
    for(i=startNum;i<=endNum;i++){
        console.log(i);
        
    }
}
func7()

// Question no 8

function func8(){
    var base = +prompt("Enter base value");
    var perpendicular = +prompt("Enter perpendicular value");    
        function childfunc(value){
            return value*value;
            }

            var result = childfunc(base)+childfunc(perpendicular);
            document.write("Hypotenuse square is: " + result);
        
}
func8()

// Question no 9

function func9(width, height) {
    return width * height;
}
var area1 = func9(5, 10);
document.write("Area (arguments as value): " + area1 + "<br>");


// Question no 10

function func10(a) {
    var reversed = a.split("").reverse().join("");

    if (a === reversed) {
        document.write("This is a palindrome");
    } else {
        document.write("This is not a palindrome");
    }
}
var word = prompt("Enter a word");
func10(word);


// Question no 11

function func11(str) {
    var words = str.split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    var result = words.join(" ");
    document.write(result);
}
var text = 'the quick brown fox';
func11(text);

// Question no 12

function func12(str) {
    var words = str.split(" ");
    var longest = "";
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    document.write("Longest word: " + longest);
}
var text = 'Web Development Tutorial';
func12(text);

// Question no 13

function func13(str, letter) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    document.write("Letter '" + letter + "' occurs " + count + " times");
}
var text = 'JSResourceS.com';
var char = 'o';
func13(text, char);


function func14(radius) {
    var circumference = 2 * Math.PI * radius;
    document.write("The circumference is " + circumference + "<br>");
}
function funcChild(radius) {
    var area = Math.PI * radius * radius;
    document.write("The area is " + area);
}
var r = prompt("Enter the radius of the circle:");
func14(r);
funcChild(r);







