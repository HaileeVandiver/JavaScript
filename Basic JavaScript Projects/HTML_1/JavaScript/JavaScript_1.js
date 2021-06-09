function Food_Function() {
    var Food_Output; 
    var Food = document.getElementById("Food_Input").value;
    var Food_String = "is my favorite food!";
    switch(Food) {
        case "dumplings":
            Food_Output = "dumplings " + Food_String;
        break;
        case "french fries":
            Food_Output = "french fries " + Food_String;
        break;
        case "chocolate":
            Food_Output = "chocolate " + Food_String;
        break;
        default: 
        Food_Output = "Please enter a food exactly as written on the above list";
    }
    document.getElementById("Output").innerHTML = Food_Output;
}

function text_Change() { 
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML= "The text changed? hopefully.";
}
//make a circle
var c = document.getElementById("ID_Name");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

// make a gradient 
var c = document.getElementById("ID_Name");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);