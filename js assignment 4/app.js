// Question no 1

var studentNames =[];

// Question no 2

var studentNames =Array();

// Question no 3

var a =['karachi',"red","bike","car","cycle"];

// Question no 4

var b =[100,200,300,500,600];

// Question no 5

var c = [true, false, true,true,false];

// Question no 6

var d =['karachi',"red","bike","car","cycle",true, false, true,true,false,100,200,300,500,600];

// Question no 7

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h1>Qualifications</h1>")
document.write("<p>1) "+qualifications[0]+"</p>")
document.write("<p>2) "+qualifications[1]+"</p>")
document.write("<p>3) "+qualifications[2]+"</p>")
document.write("<p>4) "+qualifications[3]+"</p>")
document.write("<p>5) "+qualifications[4]+"</p>")
document.write("<p>6) "+qualifications[5]+"</p>")
document.write("<p>7) "+qualifications[6]+"</p>")
document.write("<p>8) "+qualifications[7]+"</p>")

// Queston no 8

var students = ["Micheal", "John", "Tony"];
var scores = [444, 268, 490];
var totalMarks = 500;

document.write("<h2>Student Scores & Percentages</h2>");
document.write("<p>Score of " + students[0]+" is "+scores[0]+". Percentage: "+((scores[0]/totalMarks)*100)+"%</p>");
document.write("<p>Score of " + students[1]+" is "+scores[1]+". Percentage: "+((scores[1]/totalMarks)*100)+"%</p>");
document.write("<p>Score of " + students[2]+" is "+scores[2]+". Percentage: "+((scores[2]/totalMarks)*100)+"%</p>");

// Question no 9

var colors =["red","yellow","green"];
document.write('<h1>colors</h1>');
document.write("<p>Colors : "+colors +"</p>");
var userStartAdd = prompt("Which color you want to add at the beginning?");
colors.unshift(userStartAdd);
document.write("<p>After adding  color to the start : "+colors+"</p>");
var userEndAdd=prompt("which color you to add at the end?");
colors.push(userEndAdd);
document.write("<p>After adding color to the end : "+colors+"</p>");
colors.unshift("purple","pink");
document.write("<p>After adding two more colors to the start : "+colors+"</p>");
colors.shift();
document.write("<p>After removing color from the start : "+colors+"</p>");
colors.pop();
document.write("<p>After removing color from the end : "+colors+"</p>");
var userIndex = +prompt("At which index you want to add a color?");
var userColor = prompt("Which color you want to add?");
colors.splice(userIndex,0,userColor);
document.write("<p>After adding color at your desired index : "+colors+"</p>");
var userDeleteIndex = +prompt("At which index you want to delete color?");
var userDeleteCount = +prompt("How many colors you want to delete?");
colors.splice(userDeleteIndex,userDeleteCount);
document.write("<p>After deleting color(s) at your desired index : "+colors+"</p>");


// Question no 10

var studentScores =[320,230,480,120];
document.write("<h2>Student Scores</h2>");
document.write("<p>Scores of Students : "+studentScores+"</p>");
document.write("<p>Ordered Scores of Students : "+studentScores[3]+","+studentScores[1]+","+studentScores[0]+","+studentScores[2]+"</p>");


// Question no 11
var cities =["karachi","lahore","islamabad","quetta","peshawar"];
document.write("<h2>Cities List</h2>");
document.write("<p>Cities List : "+cities+"</p>");
var selectedCities = cities.slice(0,3);
document.write("<p>Selected Cities List : "+selectedCities+"</p>");


// Question no 12

document.write("<h2>Array :</h2>");
var para = ["This", "is", "my", "cat"];
document.write("<p>Array : "+para+"</p>");
document.write("<h2>String :</h2>");
document.write(para[0]+" " +para[1]+" "+para[2]+" "+para[3])

// Question no 13

var devices =[];
devices.unshift("keyboard");
devices.unshift("mouse");
devices.unshift("printer");
devices.unshift("monitor");
document.write("<h2>Devices :</h2>");
document.write("<p>"+devices+"</p>");
document.write("<h2>Out :</h2>"+devices.shift());
document.write("<h2>Out :</h2>"+devices.shift());
document.write("<h2>Out :</h2>"+devices.shift());
document.write("<h2>Out :</h2>"+devices.shift());

// Question no 14

var devices =[];
devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");
document.write("<h2>Devices :</h2>");
document.write("<p>"+devices+"</p>");
document.write("<h2>Out :</h2>"+devices.pop());
document.write("<h2>Out :</h2>"+devices.pop());
document.write("<h2>Out :</h2>"+devices.pop());
document.write("<h2>Out :</h2>"+devices.pop());

// Question no 15

var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<h2>Select Phone Manufacturer</h2>");
document.write("<select>");
document.write("<option>" + phoneManufacturers[0] + "</option>");
document.write("<option>" + phoneManufacturers[1] + "</option>");
document.write("<option>" + phoneManufacturers[2] + "</option>");
document.write("<option>" + phoneManufacturers[3] + "</option>");
document.write("<option>" + phoneManufacturers[4] + "</option>");
document.write("<option>" + phoneManufacturers[5] + "</option>");
document.write("</select>");










