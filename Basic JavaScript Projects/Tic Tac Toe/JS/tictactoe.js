//this variable keeps track of whose turn it is 
let activePlayer = 'X'; 
//this array stores an array of moves. we use this to determine win conditions. 
let selectedSquares = []; 

//this function is for placing an x or o in a square. 
function placeXorO(squareNumber) {
    //this condition ensures a square hasn't been selected already.
    //the .some() method is used to check each element of selectedSquare array 
    //to see if it contains the square number clicked on. 

    if(!selectedSquares.some(element => element.includes(squareNumber))) {
        //this variable retrieves the html element is that was clicked 
        let select = document.getElementById(squareNumber); 
        //this condition checks who's turn it is
        if (activePlayer === 'X') {
        //if active player is equal to 'x' the x.png is palced in HTMl 
            select.style.backgroundImage = 'url("images/o.png")';
        //Active player may only be 'x' or 'o' so if not 'x' it must be 'o'

        } else {
            //if activePlayer is equal to 'o' the o.png is placed in HTML
            select.style.backgroundImage = 'url("images/x.png")'
        }
        //squareNumber and activePlayer are concatenated together and added to array 
        selectedSquares.push(squareNumber + activePlayer);
        //this calls a function to check for any win conditions
        checkWinConditions(); 
        //this condition is for changing the active player
        if(activePlayer === 'X') {
            //if active palyer is 'x' change it to 'o'
            activePlayer ='O';
            //if active player is anything other than 'X'

        } else {
            //change the activepalyer to 'X'
            activePlayer = 'X';
        }

        // this function plays placement sound 
        audio('./media/place.mp3');
        //this condition checks to see if it is computers turn 
        if(activePlayer === 'O') {
            //this function disables clicking for computer choice
            disableClick(); 
            //this function waits 1 second before computer places image and enables click
            setTimeout(function() { computersTurn(); }, 1000)
        }
        //return true is needed for our computersTurn() functions to work
        return true;
    }
    //This function results in a random square being selected
    function computersTurn() {
        //This boolean is needed for our while loop
        let success = false; 
        //this variable stores a random number 0-8
        let pickASquare; 
        //this condition allows our while loop to keep trying if a square is selected already 
        while(!success) {
            //a random number between 0 and 8 us selected
            pickASquare = String(Math.floor(Math.random()*9));
            //if the random number evaulated returns true, the square hasn't been selected yet
            if(placeXorO(pickASquare)) {
                //this line calls the function 
                placeXorO(pickASquare);
                //this changes our boolean and ends the loop
                success = true;
            };
        }
    }

    function checkWinConditions(){
        //X 0,1,2 condition
        if      (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100)}
        else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304)}
        else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508)}
        else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558)}
        else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558)}
        else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558)}
        else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90)}
        else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520)}
        else if (arrayIncludes('00', '10', '20')) { drawWinLine(50, 100, 558, 100)}
        else if (arrayIncludes('30', '40', '50')) { drawWinLine(50, 304, 558, 304)}
        else if (arrayIncludes('60', '70', '80')) { drawWinLine(50, 508, 558, 508)}
        else if (arrayIncludes('00', '30', '60')) { drawWinLine(100, 50, 100, 558)}
        else if (arrayIncludes('10', '40', '70')) { drawWinLine(304, 50, 304, 558)}
        else if (arrayIncludes('20', '50', '80')) { drawWinLine(508, 50, 508, 558)}
        else if (arrayIncludes('60', '40', '20')) { drawWinLine(100, 508, 510, 90)}
        else if (arrayIncludes('00', '40', '80')) { drawWinLine(100, 100, 520, 520)}

        else if(selectedSquares.length >= 9) {
            audio('./media/tie.mp3');
            //this function sets a .3 timer before the resetGame is called
            setTimeout(function () {resetGame(); }, 1000);
        }

        //this function checks if an array includes 3 strings. it is used to check for 
        //each win condition 
        function arrayIncludes(squareA, squareB, squareC) {
            //these 3 variables will be used to check for 3 in a row 
            const a = selectedSquares.includes(squareA)
            const b = selectedSquares.includes(squareB)
            const c = selectedSquares.includes(squareC)
            //if the 3 variables we pass are all included in our array true us returned and our else if condition executes the drawwinline cunction 
            if(a === true && b === true && c === true) { return true }
        }


    }

    //function makes our body element temporarily unclickable 
    function disableClick() {
        //this makes our body cunclickable
        body.style.pointerEvents = 'none'; 
        //this makes our body clickable again after 1 second 
        setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);

    }
    //this function takes a string paramenter of the path you set earlier for placement sound 
    function audio(audioURL) {
        //we create a new audio object and we pass the path as a parameter 
        let audio = new Audio(audioURL);
        //play method plays our audio sound 
        audio.play(); 
    }

    //this function utilizes html canvas to draw win lines 
    function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
        //this line accesses our html canvas element 
        const canvas = document.getElementById('win-lines')
        //this line gives us access to methods and properties to use on canvas 
        const c = canvas.getContext('2d'); 
        //this line indicates where the start of a lines x axis is 
        let x1 = coordX1
        //this line indicates where the start of a lines y axis is 
            y1 = coordY1 ,
            x2 = coordX2 ,
            y2 = coordY2,
            x = x1,
            y = y1 ;
        
        //this function interacts with the canvas 
        function animateLineDrawing() {
            //this variable creates a loop
            const animationLoop = requestAnimationFrame(animateLineDrawing);
            //this method clears content from last loop iteration 
            c.clearRect(0,0,608,608)
            //this method starts a new path
            c.beginPath(); 
            //this method moves us to a starting point for our line 
            c.moveTo(x1, y1)
            //this method indicates the end point in out line 
            c.lineTo(x, y)
            //this method sets the width of our line 
            c.lineWidth = 10; 
            //this method sets the color of our line 
            c.strokeStyle = 'rgba(70,255,33,.8)';
            //this method draws everything we laid out above 
            c.stroke();
            //this condition checks if we've reached the endpoint 
            if (x1 <= x2 && y1 <= y2) {
                //this condition adds 10 to the previous end x point

                if(x < x2) { x += 10; }
                if(y < y2) { y += 10; }
                if(x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop);}
            }

            if (x1 <= x2 && y1 >= y2) {
                if (x < x2) { x += 10; }
                if (y > y2) { y -= 10; }
                if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
            }
        }

        //this function clears our canvas after our win line is drawn 
        function clear() {
            //this line starts our animation loop 
            const animationLoop = requestAnimationFrame(clear);
            //this line clears our canvas 
            c.clearRect(0,0,608,608); 
            //This line stops our animation loop 
            cancelAnimationFrame(animationLoop);
        }
    //this line disallows clicing while the win sound is playing 
    disableClick(); 
    //this line plays the win sounds 
    audio('./media/winGame.mp3');
    //this line calls our main animation loop 
    animateLineDrawing();
    //this line waits 1 second. then, clears canvas, resets game, and allows clicking again
    setTimeout(function () { clear(); resetGame(); }, 1000);


    }

    // this function resets the game in the event of a tie or win 
    function resetGame() {
        //this for loop iterates through each html square element 
        for(let i=0; i < 9; i++) {
            //this variable gets the html element of i 
            let square = document.getElementById(String(i))
            //this removes our elements backgroundimage 
            square.style.backgroundImage=''
        }
        // this resets our array so it is empty and we can start over 
        selectedSquares = [];
    }
}