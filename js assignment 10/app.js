// // Question no 1

// function power(a,b){

//     let result=1;
//     let i=1
//     while(i<=b){
//         result=result*a;
//         i++;
//     }
//     return result;
// }

// let base = 4;
// let exponent = 7;
// console.log("Result:", power(base, exponent));


// // Question no 2

// function func2(year){
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//             alert(year + " is a leap year.");
//     }
//     else {
//     alert(year + " is not a leap year.");
// }
// }
// func2(+prompt(`enter random year : `))

// // Question no 3

// function func3(a,b,c){
//      let S = (a+b+c) /2;
//     return Math.sqrt(S *(S-a) *(S -b) *(S - c));
// }
// let a = +prompt("Enter side a:");
// let b = +prompt("Enter side b:");
// let c = +prompt("Enter side c:");

// alert(`Area of the triangle: ${func3(a,b,c)}`);

// // Question no 4

// function Average(m1, m2, m3){
//     return (m1+m2+m3)/3;
// }
// function Percentage(m1, m2, m3){
//     return ((m1+m2+m3)/300)*100;
// }
// function Func4(m1, m2, m3){
//     let avg = Average(m1,m2,m3);
//     let perc = Percentage(m1,m2,m3);
//     alert(`Average marks: ${avg.toFixed()}`);
//     alert(`Percentage: ${perc.toFixed()}%`);
// }
// let marks1 = +prompt("Enter marks for subject 1:");
// let marks2 = +prompt("Enter marks for subject 2:");
// let marks3 = +prompt("Enter marks for subject 3:");
// Func4(marks1, marks2, marks3);

// // Queston no 5

// function func5(a,b){
//     let i=0;
//     while(i<a.length){
//         if(a[i]===b) return i;
//         i++;

            
//     }
//     return -1;
// }
// let text ='pakistan';
// let char='s';
// console.log(func5(text,char));


// // Question no 6

// function func6(str){
//     let result="";
//     let i=0;
//     while(i<str.length){
//         if(str[i]!=="a" && str[i]!=="e" && str[i]!=="i" && str[i]!=="o" && str[i]!=="u"){
//             result+=str[i];
//         }
//         i++;
//     }
//     return result;
// }
// let sentence=prompt("Enter sentence:").toLowerCase();
// console.log(func6(sentence));

// // Question no 7

// function countVowelPairs(str){
//     let count=0,i=0;
//     while(i<str.length-1){
//         switch(str[i]){
//             case 'a':
//              case 'e':
//               case 'i':
//                case 'o':
//                 case 'u':
//                 switch(str[i+1]){
//                     case 'a':
//                      case 'e':
//                       case 'i':
//                        case 'o':
//                         case 'u':
//                         count++;
//                 }
//         }
//         i++;
//     }
//     return count;
// }
// let line = prompt("Enter text:").toLowerCase();
// console.log(countVowelPairs(line));

// // Question no 8

// function Meters(km){ return km*1000; }
// function Feet(km){ return km*3280.84; }
// function Inches(km){ return km*39370.1; }
// function Centimeters(km){ return km*100000; }

// let km = +prompt("Enter distance in km:");
// console.log(`Meters:${Meters(km)}`);
// console.log(`Feet: ${Feet(km)}`);
// console.log(`Inches: ${Inches(km)}`);
// console.log(`Centimeters: ${Centimeters(km)}`);

// // Question no 9

// function overtime(hours){
//     if(hours>40){
//         return (hours-40)*12;
//     }
//     return 0;
// }
// let hours = +prompt("Enter working hours:");
// console.log(`Overtime Pay: Rs. ${overtime(hours)}`);

// // Question no 10

// function func10(amount){
//     let hundreds=Math.floor(amount/100);
//     amount = amount%100;

//     let fifties=Math.floor(amount /50);
//     amount=amount%50;

//     let tens =Math.floor(amount/10);

//     console.log(`100 notes: ${hundreds}`);
//     console.log(`50 notes: ${fifties}`);
//     console.log(`10 notes: ${tens}`);
// }
// let amt =+prompt("Enter amount:");
// func10(amt);


// PDF no 2

// Question no 1

function func11(){
    alert("hello welcome to my website");
}

// Question no 2

function showMsg(model){
    alert("You clicked " + model);
}

// Question no 3

let buttons = document.getElementsByClassName("deleteBtn");

for(let i=0; i<buttons.length; i++){
    buttons[i].onclick = function(){
        let row = this.parentNode.parentNode; // td → tr
        row.remove();
    }
}

// Question no 4

function changeImage(newSrc){
    document.getElementById("myImage").src = newSrc;
}


// Question no 5

let count = 0;

let counterDisplay = document.getElementById("counter");
let incBtn = document.getElementById("increase");
let decBtn = document.getElementById("decrease");

incBtn.onclick = function(){
    count++;
    counterDisplay.textContent = count;
};

decBtn.onclick = function(){
    count--;
    counterDisplay.textContent = count;
};
