document.write(typeof 5); // shows data type
document.write("10" + 5); // combines a string and a number 


// boolean logic 
document.write(10>5);
document.write( 5 > 10); 
document.write( 5 > 2 && 10 > 4);
document.write( 5 > 10 && 10 > 4); 
document.write( 5 > 10 || 10 >4); 
document.write( 5 > 10 || 10 > 20); 

//equality 

document.write (10 == 10);
document.write (10 == 3); 

// === equal in both value and data type
var x = 10 ;
var z = 10;
var y = 9;
document.write( x === z);

var hai = "Hailee";
var sco = "Scott";

document.write(z === sco);
document.write (z === y); 
document.write (hai == sco);

// console log 
console.log(2 + 2);
console.log(5 > 10);
console.log(10 > 5);

//ternary operator
document.write(Bigger = (5 >1) ? "Left number is bigger": "Right number is bigger");

function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").nodeValue; 
    Can_ride = (Height < 52) ? "You're too short" : "You are tall enough"; 
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}