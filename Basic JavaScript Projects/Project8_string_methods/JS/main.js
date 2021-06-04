function makesSentence() { // concat() method to concatenate two things
    var a = "Hailee";
    var b = "likes";
    var c = "Scott";
    var complete =  a.concat(b, c);
    document.getElementById("Concatenate").innerHTML = complete;
}
// .slice to extract certain characters out of a string 
function sliceMethod(){
    var sentence = "Hailee likes Scott";
    var section = sentence.slice(13,18);
    document.getElementById("slice").innerHTML= section;
}
//to make a string all uppercase letters
function toUppercase(){ 
    var lower = "i'm yelling at you";
    var Upper = lower.toUpperCase();
    document.getElementById("uppercase").innerHTML = Upper;
}
//to search a string and return the position of a certain part
function searchFunction() {
    var str = "search me like one of your french girls"; 
    var n = str.search("french");
    document.getElementById("search").innerHTML = n;
  }

  //toString() method: makes number into string 
function makeString() {
    var hai = 613;
    document.getElementById("stringme").innerHTML = hai.toString();
}

//toPrecision() makes a number a certain length

function preciseFunction() {
    var z = 19384756; 
    document.getElementById("precision").innerHTML = z.toPrecision(3);
}

//toFixed() method converts a number into a string, rounding to a specified number of decimals.
function fixMe() {
    var numb = 4.135987;
    var n = numb.toFixed(3)
    document.getElementById("fixed").innerHTML = n;

}

//valueOf() method returns the primitive value of a String object.

function iHaveValue() {
    var har = "Har har har har";
    var dy = har.valueOf();
    document.getElementById("valueme").innerHTML = dy;
}
