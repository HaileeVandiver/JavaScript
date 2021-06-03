function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make; 
    this.Vehicle_Model = Model; 
    this.Vehicle_Year = Year; 
    this.Vehicle_Color = Color; 
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Hailee = new Vehicle("Nissan", "Altima", 2015, "Gray");

function bookFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Hailee drives a " + Hailee.Vehicle_Color + "-colored " + Hailee.Vehicle_Model + " manufactured in " + Hailee.Vehicle_Year;
}