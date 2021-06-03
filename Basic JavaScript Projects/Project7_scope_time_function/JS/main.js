// global variable 

var x = 10; 
function Add_numbers_1() {
    document.write(20 + x + "<br>"); 
}

function Add_numbers_2() {
    document.write(x+ 100); 
}

Add_numbers_1();
Add_numbers_2(); 

// local variable 

function Add_numbers_3() {
    var y = 10 
    document.write(20 + y + "<br>"); 
}
function Add_numbers_4() {
    document,write(y + 100);
}

Add_numbers_3();
Add_numbers_4();

//if Statement 
function get_Date() {
    if (new Date().getHours()< 18) {
    document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

// else statement 
function Hailee_Function() {
    Name = document.getElementById("Name").value;
    if (Name == "Hailee") {
        Name= "You are Hailee!";  
    }
    else { 
        Name = "You are not Hailee";
    }
    document.getElementById("Are_You_Hailee?").innerHTML= Name;
}

// else if 
function Time_function() {
    var Time = new Date().getHours(); 
    var Reply; 
    if (Time < 12 == Time >0) {
        Reply = "it is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "it is afternoon"; 
    }
    else {
        Reply = "it is evening time";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

// intentional mistake and console log fix 
function sub_Function() {
    document.getElementById("minus").innerHTML = "50 minus 20 is " +console.log(o - p);
}
sub_Function()