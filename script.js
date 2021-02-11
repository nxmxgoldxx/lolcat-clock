allow pasting

var messageText;
var noon = 12; // noon
var evening = 18; // 6PM
var wakeupTime = 6; // 6AM
var lunchTime = 13; // 3PM
var partyTime = 20; // 8PM
var napTime = lunchTime + 2; // 2PM

var noon = 12;
var evening = 18; // 6PM

var wakeuptime = 9; // 9AM
var lunchtime = 12; // 12PM
var partytime = 17; // 5PM
var naptime = lunchtime + 2; // 2PM
var time = new Date().getHours();
var isPartyTime = false;

var updateClock = function() {

// the rest of the LOLCat code you wrote up until this step

var message = document.getElementById('timeEvent');
// getting your image element
var lolcat = document.getElementById('lolcat');
// defining your default image
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

// add all the images to each if / else statement, like this:
if (time == partyTime) {
    messageText = "IZ PARTEE TIME!!";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
} else if (time == napTime) {
    messageText = "IZ NAP TIME...";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
} else if (time == lunchTime) {
    messageText = "IZ NOM NOM NOM TIME!!";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
} else if (time == wakeupTime) {
    messageText = "IZ TIME TO GETTUP.";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
} else if (time < noon) {
	messageText = "Good morning!";
} else if (time > evening) {
    messageText = "Good Evening!";
} else {
    messageText = "Good afternoon!";

}

message.innerText = messageText;
lolcat.src = image;
// this should come right after `message.innerText = messageText;`

showCurrentTime();
};
var showCurrentTime = function() {
    // display the string on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours
    if (hours >= noon)
    {
        meridian = "PM";
    }
    if (hours > noon)
    {
        hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
};

updateClock();

var oneSecond = 1000;

setInterval( updateClock, oneSecond);

var partyTimeButton = document.getElementById("partyTimeButton");

var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");
var napTimeSelector =  document.getElementById("napTimeSelector");


var isPartyTime = false;
var partyEvent = function() {
var wakeUpEvent = function()
{ wakeupTime = wakeUpTimeSelector.value;
};
var lunchEvent = function()
{ lunchTime = lunchTimeSelector.value;
};
var napEvent = function()
{ napTime = napTimeSelector.value;
};
   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
   partyTimeButton.innerText = "PARTY TIME!";
   partyTimeButton.style.backgroundColor = "#222";
  // text in the button should read "Party Over"
  // color of the button should be "#0A8DAB" (bonus!)
   } else {
      isPartyTime = false;
      time = new Date().getHours();
   partyTimeButton.innerText = "PARTY OVER";
	var changeColor = function()
{
    partyTimeButton.style.backgroundColor = "#0A8DAB";
};
      // text in the button should read "PARTY TIME!"
      // color of the button should be "#222" (bonus!)
   }
};
partyTimeButton.addEventListener('click', partyEvent);

wakeupTimeSelector.addEventListener('change', wakeupEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
napTimeSelector.addEventListener('change', napEvent);
