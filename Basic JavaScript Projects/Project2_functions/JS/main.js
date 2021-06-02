function My_First_Function() { // name the function
    var str = "This text is blue!"; //var str
    var result = str.fontcolor("blue");// make the font blue
    document.getElementById("Blue_Text").innerHTML = result; 

}

function myFunction() { //name the function
    var sentence = "I am learning"; // sentence
    sentence += " a lot from this book"; // concatenation
    document.getElementById("Concatenate").innerHTML=sentence;// call the element 
}

function addition(p1, p2) {
    return p1 + p2;
}