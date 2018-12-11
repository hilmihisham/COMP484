const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var runTimer; // instance of running the timer (setInterval)
var startTime = null; // get start time here (Date() function)

var testText = 'the quick brown fox jumped over the lazy dog'
var userTyping = '';
var errorMade = 0;

// Add leading zero to numbers 9 or below (purely for aesthetics):
function formatNumber(num) {
    return ("0"+num)
}

// Run a standard minute/second/hundredths timer:
function updateTimer() {
    var currentTime = new Date(); // get current time

    // count up timer in milliseconds
    var timeDiff = currentTime.getTime() - startTime.getTime();

    timeDiff = timeDiff/1000; // change timediff to sec.millisec format
    
    if (timeDiff / 60 > 1) { // if we past 1 minute
        var minute = Math.floor(timeDiff / 60);
        var seconds = timeDiff - (minute * 60);
        
        document.querySelector('div.timer').innerHTML = 
            ((minute < 10)? formatNumber(minute) : minute) + ":" + ((seconds < 10)? formatNumber(seconds.toFixed(3)) : seconds.toFixed(3));
    }
    else {
        document.querySelector('div.timer').innerHTML = "00:" + ((timeDiff < 10)? formatNumber(timeDiff.toFixed(3)) : timeDiff.toFixed(3));
    }
}

// Start the timer:
function startTimer() {
    startTime = new Date();
    runTimer = window.setInterval(updateTimer, 1);
    //document.querySelector('div.timer').innerHTML = new Date();
}

// Match the text entered with the provided text on the page:
function matchingText() {

    // start timer (only once) once user start typing
    if (startTime == null) {
        startTimer();
        console.log("start timer running");
    }

    userTyping = document.getElementById('test-area').value;
    // console.log(userTyping);

    // change textarea color to red when user misstyped
    if (userTyping.charAt(userTyping.length-1) !== testText.charAt(userTyping.length-1)) {
        document.querySelector('.test-wrapper textarea').setAttribute('style', 'background-color: #ff000099');
        errorMade++;
    }
    else {
        document.querySelector('.test-wrapper textarea').setAttribute('style', 'background-color: #ffffff');
    }

    // user completed the typing (all correct)
    if (userTyping == testText) {
        clearInterval(runTimer); // stop timer
        document.querySelector('.test-wrapper textarea').setAttribute('style', 'background-color: #429890bb'); // textarea turns green
        document.getElementById('type-complete').innerHTML = 'Test done! You\'ve made ' + errorMade + ' mistake(s)'; // report # of mistakes made
        // console.log('error made = ' + errorMade);
    }
}

// Reset everything:
function resetAll() {
    console.log('reset all!');
    clearInterval(runTimer); // this only stops the timer, didn't reset
    startTime = null; // reset start time

    document.getElementById('test-area').value = ''; // erase textarea input
    document.querySelector('.test-wrapper textarea').setAttribute('style', 'background-color: #ffffff'); // set textarea color back to white
    document.querySelector('div.timer').innerHTML = "00:00.000" // reset timer visual
}

// Event listeners for keyboard input and the reset button:
