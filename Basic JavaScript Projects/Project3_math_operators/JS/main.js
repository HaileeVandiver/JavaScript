function mySubtraction() { // I'm a function that subtracts
var subtraction = 2 - 2;  // these are the things I'm subtracting 
document.getElementById("Math").innerHTML= "2 - 2 = " + subtraction;// this is what displays plus the actual answer 
}

function multiplication() { 
    var simple_Math = 6 * 8; 
    document.getElementById("MathM").innerHTML = "6 x 8 = " + simple_Math;
}

function division() {
    var simple_Division = 48 / 6 ;
    document.getElementById("MathD").innerHTML = "48 / 6 = "+ simple_Division;
}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5; 
    document.getElementById("allTheMath").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals" + simple_Math;
}

function modulus_Operator() { 
    var ednaMode = 2500 % 6; 
    document.getElementById("EdnaMode").innerHTML = "When Edna Mode makes super hero capes she has " + ednaMode + " feet of a bolt of fabric left over" ;
}

function negation_Operator() {
    var x = 10; 
    document.getElementById("negativeMath").innerHTML= "negative hehehe " + -x; 
}

function increment_Operator() { 
    var y = 5; 
    y++; 
    document.write(y);
}

function decrement_Operator() { 
    var z = 5; 
    z--; 
    document.write(z); 
}
window.alert(Math.random()); 
window.alert(Math.random()*100);

