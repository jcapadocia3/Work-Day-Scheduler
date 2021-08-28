// Begin code and function to display a live, running, date/time on the web page
var todaysDate = moment().format("MMM Do, YYYY, hh:mm:ss");
$("#currentDay").text(todaysDate);

function setTime() {
    var timerInterval = setInterval(function() {
        todaysDate = moment().format("MMM Do, YYYY, hh:mm:ss");
        $("#currentDay").text(todaysDate);
    }, 1000);
  }

setTime();


// Begin conditional statements to change the background color of the
// timeblocks based on current, live, time of day (specifically based on hour of day)
// Time block background color will be determined by past, present, or future timeframes
var timeNow = new Date().getHours();

function colorTime() {
  if (timeNow < 9) {
    $("#colorCoded1").addClass("future");
 } else if (timeNow == 9) {
    $("#colorCoded1").addClass("present");
 } else {
    $("#colorCoded1").addClass("past");
 } 
 
 if (timeNow < 10) {
    $("#colorCoded2").addClass("future");
 } else if (timeNow == 10) {
    $("#colorCoded2").addClass("present");
 } else {
    $("#colorCoded2").addClass("past");
 }

 if (timeNow < 11) {
    $("#colorCoded3").addClass("future");
 } else if (timeNow == 11) {
    $("#colorCoded3").addClass("present");
 } else {
    $("#colorCoded3").addClass("past");
 }

 if (timeNow < 12) {
    $("#colorCoded4").addClass("future");
 } else if (timeNow == 12) {
    $("#colorCoded4").addClass("present");
 } else {
    $("#colorCoded4").addClass("past");
 }

 if (timeNow < 13) {
    $("#colorCoded5").addClass("future");
 } else if (timeNow == 13) {
    $("#colorCoded5").addClass("present");
 } else {
    $("#colorCoded5").addClass("past");
 }

 if (timeNow < 14) {
    $("#colorCoded6").addClass("future");
 } else if (timeNow == 14) {
    $("#colorCoded6").addClass("present");
 } else {
    $("#colorCoded6").addClass("past");
 }

 if (timeNow < 15) {
    $("#colorCoded7").addClass("future");
 } else if (timeNow == 15) {
    $("#colorCoded7").addClass("present");
 } else {
    $("#colorCoded7").addClass("past");
 }

 if (timeNow < 16) {
    $("#colorCoded8").addClass("future");
 } else if (timeNow == 16) {
    $("#colorCoded8").addClass("present");
 } else {
    $("#colorCoded8").addClass("past");
 }

 if (timeNow < 17) {
    $("#colorCoded9").addClass("future");
 } else if (timeNow == 17) {
    $("#colorCoded9").addClass("present");
 } else {
    $("#colorCoded9").addClass("past");
 }
};
colorTime()

// Begin code to set EventListeners
// for each form submission to save user entries

// 9AM event
$("#save1").submit(function(event) {
  event.preventDefault();
  storeEntry();
});

// 10AM event
$("#save2").submit(function(event) {
  event.preventDefault();
  storeEntry();
});

// // 11AM event
$("#save3").submit(function(event) {
   event.preventDefault();
   storeEntry();
 });

// // 12PM event
$("#save4").submit(function(event) {
   event.preventDefault();
   storeEntry();
 });

// // 1PM event
$("#save5").submit(function(event) {
   event.preventDefault();
   storeEntry();
 });

// // 2PM event
$("#save6").submit(function(event) {
   event.preventDefault();
   storeEntry();
 });

// // 3PM event
$("#save7").submit(function(event) {
   event.preventDefault();
   storeEntry();
 });

// // 4PM event
$("#save8").submit(function(event) {
   event.preventDefault();
   storeEntry();
 });

// // 5PM event
$("#save9").submit(function(event) {
   event.preventDefault();
   storeEntry();
 });


// Begin code to store user entries on local storage
// after Event Listeners are triggered
var entry1 = $("#colorCoded1");
var entry2 = $("#colorCoded2");
var entry3 = $("#colorCoded3");
var entry4 = $("#colorCoded4");
var entry5 = $("#colorCoded5");
var entry6 = $("#colorCoded6");
var entry7 = $("#colorCoded7");
var entry8 = $("#colorCoded8");
var entry9 = $("#colorCoded9");

function storeEntry() {
  localStorage.setItem("event1", entry1.text());
  localStorage.setItem("event2", entry2.text());
  localStorage.setItem("event3", entry3.text());
  localStorage.setItem("event4", entry4.text());
  localStorage.setItem("event5", entry5.text());
  localStorage.setItem("event6", entry6.text());
  localStorage.setItem("event7", entry7.text());
  localStorage.setItem("event8", entry8.text());
  localStorage.setItem("event9", entry9.text());
};

// Begin code to pull information from local storage
// for user entries to persist
var getEntry1 = localStorage.getItem("event1");
var getEntry2 = localStorage.getItem("event2");
var getEntry3 = localStorage.getItem("event3");
var getEntry4 = localStorage.getItem("event4");
var getEntry5 = localStorage.getItem("event5");
var getEntry6 = localStorage.getItem("event6");
var getEntry7 = localStorage.getItem("event7");
var getEntry8 = localStorage.getItem("event8");
var getEntry9 = localStorage.getItem("event9");

var pullEvents = [getEntry1, getEntry2, getEntry3, getEntry4, getEntry5, getEntry6, getEntry7, getEntry8, getEntry9];

for(i = 0; i < pullEvents.length; i++) {
   entry1.text(getEntry1);
   entry2.text(getEntry2);
   entry3.text(getEntry3);
   entry4.text(getEntry4);
   entry5.text(getEntry5);
   entry6.text(getEntry6);
   entry7.text(getEntry7);
   entry8.text(getEntry8);
   entry9.text(getEntry9);
};
