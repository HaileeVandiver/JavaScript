var stringName = "Hailee"; 
var h = stringName.length; 

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = ""; 
var Y; 
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
// array creation
function an_array() {
    var Chrono_traits = [];
    Chrono_traits[0] = "frito paws";
    Chrono_traits[1] = "butt mustache";
    Chrono_traits[2] = "big ol' cheeks";
    document.getElementById("Chrono").innerHTML = "Did you know Chrono has " + Chrono_traits[0]
}
//function using the const keyword
function constant_function() {
    const Scott_traits = {eyes: "hazel", hair:"brown", status:"single"};
    Scott_traits.status="boyfriend";
    Scott_traits.personality="the best";
    document.getElementById("Constant").innerHTML = "Scott is my " + Scott_traits.status + " and he is " + Scott_traits.personality;
}

// let keyword 
var first = "Brent"; 
document.write(first);
{
    let first = "Drew"; 
    document.write("<br>" + first); 
}
document.write("<br>" + first);

//return statement

function myFunction() {
    return "Hailee rules";
  }
  document.getElementById("return").innerHTML = myFunction();


  //making an object
  let pokemon = { 
    species: "Bulbasaur ", 
    type: "bug type ",
    sound: "bulba bulba ", 
    description : function() {
        return "The pokemon is a " + this.species;

    }
};

document.getElementById("pokemon").innerHTML = pokemon.description();

// loop with break statement 
var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 2) { break; }
  text += "The number is " + i + "<br>";
}
document.getElementById("demo").innerHTML = text;

// loop with continue statement

var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 2) { continue; }
  text += "The number is " + i + "<br>";
}
document.getElementById("cont").innerHTML = text;