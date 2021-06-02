function my_Dictionary() { //name the dictionary function
    var Pokemon = { // variables
        Species: "Squirtle",
        Type: "Water Type",
        Health: 100,
        Power: 85, 
        Sound: "squirtle squirt"
    };
    delete Pokemon.Sound// deleted the KVP pokemon sound
    document.getElementById("Dictionary").innerHTML= Pokemon.Sound;// call that and see it's undefined
}