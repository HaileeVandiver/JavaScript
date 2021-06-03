function Ride_Function() { // Ternanry operators 
    var Height, Can_ride;
    Height = document.getElementById("Height").nodeValue; 
    Can_ride = (Height < 52) ? "You're too short" : "You are tall enough"; 
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {
    var Age, Can_vote; 
    Age = document.getElementById("Age").nodeValue; 
    Can_vote = (Age < 18) ? "You're old enough" : "You're not old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Book(Title, Author, Genre) { // function using the 'this' keyword
    this.Book_Title = Title; 
    this.Book_Author = Author; 
    this.Book_Genre = Genre; 
}
//created variables using the 'var' keyword and 'new' keyword
var Inkheart = new Book("Inkheart", "Cornelia Funke", "Fantasy");
var Thunderstruck = new Book("Thunderstruck", "Erik Larson", "History");
var Paper = new Book("The Paper Menagerie", "Kevin Liu", "Short Stories");

function bookFunction() {
    document.getElementById("New_and_This").innerHTML = "Hailee's favorite book is " +Inkheart.Book_Title + " by " + Inkheart.Book_Author + " , but right now she is reading a collection of " + Paper.Book_Genre;

}
//nested function
function count_Function() {//parent
    document.getElementById("Counting").innerHTML = Count(); 
    function Count() {//nest nest 
        var Starting_point = 9; 
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}

