var todaysDate = moment().format("MMM Do, YYYY, hh:mm:ss");
$("#currentDay").text(todaysDate);

function setTime() {
    var timerInterval = setInterval(function() {
        todaysDate = moment().format("MMM Do, YYYY, hh:mm:ss");
        $("#currentDay").text(todaysDate);
    }, 1000);
  }

setTime();





var timeNow = new Date().getHours();

function colorTime() {
  if (timeNow < 9) {
    $("#colorCoded1").addClass("future");
    console.log("past");
 } else if (timeNow == 9) {
    $("#colorCoded1").addClass("present");
    console.log("present");
 } else if (timeNow > 9) {
    $("#colorCoded1").addClass("past");
    console.log("future");
 } 
 
 if (timeNow < 10) {
    $("#colorCoded2").addClass("future");
    console.log("past");
 } else if (timeNow == 10) {
    $("#colorCoded2").addClass("present");
    console.log("present");
 } else if (timeNow > 10) {
    $("#colorCoded2").addClass("past");
    console.log("future");
 }

 if (timeNow < 11) {
    $("#colorCoded3").addClass("future");
    console.log("past");
 } else if (timeNow == 11) {
    $("#colorCoded3").addClass("present");
    console.log("present");
 } else if (timeNow > 11) {
    $("#colorCoded3").addClass("past");
    console.log("future");
 }

 if (timeNow < 12) {
    $("#colorCoded4").addClass("future");
    console.log("past");
 } else if (timeNow == 12) {
    $("#colorCoded4").addClass("present");
    console.log("present");
 } else if (timeNow > 12) {
    $("#colorCoded4").addClass("past");
    console.log("future");
 }

 if (timeNow < 13) {
    $("#colorCoded5").addClass("future");
    console.log("past");
 } else if (timeNow == 13) {
    $("#colorCoded5").addClass("present");
    console.log("present");
 } else if (timeNow > 13) {
    $("#colorCoded5").addClass("past");
    console.log("future");
 }

 if (timeNow < 14) {
    $("#colorCoded6").addClass("future");
    console.log("past");
 } else if (timeNow == 14) {
    $("#colorCoded6").addClass("present");
    console.log("present");
 } else if (timeNow > 14) {
    $("#colorCoded6").addClass("past");
    console.log("future");
 }

 if (timeNow < 15) {
    $("#colorCoded7").addClass("future");
    console.log("past");
 } else if (timeNow == 15) {
    $("#colorCoded7").addClass("present");
    console.log("present");
 } else if (timeNow > 15) {
    $("#colorCoded7").addClass("past");
    console.log("future");
 }

 if (timeNow < 16) {
    $("#colorCoded8").addClass("future");
    console.log("past");
 } else if (timeNow == 16) {
    $("#colorCoded8").addClass("present");
    console.log("present");
 } else if (timeNow > 16) {
    $("#colorCoded8").addClass("past");
    console.log("future");
 }

 if (timeNow < 17) {
    $("#colorCoded9").addClass("future");
    console.log("past");
 } else if (timeNow == 17) {
    $("#colorCoded9").addClass("present");
    console.log("present");
 } else if (timeNow > 17) {
    $("#colorCoded9").addClass("past");
    console.log("future");
 }
};
colorTime()




// 9AM event
var save1 = document.getElementById("save1");
var entry1 = document.getElementById("colorCoded1");

save1.addEventListener("submit", (event) => {
  event.preventDefault();
  storeEntry();
});

// 10AM event
var save2 = document.getElementById("save2");
var entry2 = document.getElementById("colorCoded2");

save2.addEventListener("submit", (event) => {
  event.preventDefault();
  storeEntry();
});

// 11AM event
var save3 = document.getElementById("save3");
var entry3 = document.getElementById("colorCoded3");

save3.addEventListener("submit", (event) => {
  event.preventDefault();
  storeEntry();
});

// 12PM event
var save4 = document.getElementById("save4");
var entry4 = document.getElementById("colorCoded4");

save4.addEventListener("submit", (event) => {
  event.preventDefault();
  storeEntry();
});

// 1PM event
var save5 = document.getElementById("save5");
var entry5 = document.getElementById("colorCoded5");

save5.addEventListener("submit", (event) => {
  event.preventDefault();
  storeEntry();
});

// 2PM event
var save6 = document.getElementById("save6");
var entry6 = document.getElementById("colorCoded6");

save6.addEventListener("submit", (event) => {
  event.preventDefault();
  storeEntry();
});

// 3PM event
var save7 = document.getElementById("save7");
var entry7 = document.getElementById("colorCoded7");

save7.addEventListener("submit", (event) => {
  event.preventDefault();
  storeEntry();
});

// 4PM event
var save8 = document.getElementById("save8");
var entry8 = document.getElementById("colorCoded8");

save8.addEventListener("submit", (event) => {
  event.preventDefault();
  storeEntry();
});

// 5PM event
var save9 = document.getElementById("save9");
var entry9 = document.getElementById("colorCoded9");

save9.addEventListener("submit", (event) => {
  event.preventDefault();
  storeEntry();
});

function storeEntry() {
  var new_data1 = document.getElementById("colorCoded1").textContent;
  localStorage.setItem("event1", new_data1);
  var new_data2 = document.getElementById("colorCoded2").textContent;
  localStorage.setItem("event2", new_data2);
  var new_data3 = document.getElementById("colorCoded3").textContent;
  localStorage.setItem("event3", new_data3);
  var new_data4 = document.getElementById("colorCoded4").textContent;
  localStorage.setItem("event4", new_data4);
  var new_data5 = document.getElementById("colorCoded5").textContent;
  localStorage.setItem("event5", new_data5);
  var new_data6 = document.getElementById("colorCoded6").textContent;
  localStorage.setItem("event6", new_data6);
  var new_data7 = document.getElementById("colorCoded7").textContent;
  localStorage.setItem("event7", new_data7);
  var new_data8 = document.getElementById("colorCoded8").textContent;
  localStorage.setItem("event8", new_data8);
  var new_data9 = document.getElementById("colorCoded9").textContent;
  localStorage.setItem("event9", new_data9);
};

// var new_data1 = document.getElementById("colorCoded1").textContent;
// var new_data2 = document.getElementById("colorCoded2").textContent;
// var new_data3 = document.getElementById("colorCoded3").textContent;
// var new_data4 = document.getElementById("colorCoded4").textContent;
// var new_data5 = document.getElementById("colorCoded5").textContent;
// var new_data6 = document.getElementById("colorCoded6").textContent;
// var new_data7 = document.getElementById("colorCoded7").textContent;
// var new_data8 = document.getElementById("colorCoded8").textContent;
// var new_data9 = document.getElementById("colorCoded9").textContent;

// function storeEntry() {
//   var storeEvents = [new_data1, new_data2, new_data3, new_data4, new_data5, new_data6, new_data7, new_data8, new_data9];
//   for(i = 0; i < storeEvents.length; i++) {
//     localStorage.setItem("event1", new_data1);
//     localStorage.setItem("event2", new_data2);
//     localStorage.setItem("event3", new_data3);
//     localStorage.setItem("event4", new_data4);
//     localStorage.setItem("event5", new_data5);
//     localStorage.setItem("event6", new_data6);
//     localStorage.setItem("event7", new_data7);
//     localStorage.setItem("event8", new_data8);
//     localStorage.setItem("event9", new_data9);
//   }
// };

// function pullEvent() {
//   var getEntry1 = localStorage.getItem("event1");
//   entry1.textContent = getEntry1;
//   var getEntry2 = localStorage.getItem("event2");
//   entry2.textContent = getEntry2;
//   var getEntry3 = localStorage.getItem("event3");
//   entry3.textContent = getEntry3;
//   var getEntry4 = localStorage.getItem("event4");
//   entry4.textContent = getEntry4;
//   var getEntry5 = localStorage.getItem("event5");
//   entry5.textContent = getEntry5;
//   var getEntry6 = localStorage.getItem("event6");
//   entry6.textContent = getEntry6;
//   var getEntry7 = localStorage.getItem("event7");
//   entry7.textContent = getEntry7;
//   var getEntry8 = localStorage.getItem("event8");
//   entry8.textContent = getEntry8;
//   var getEntry9 = localStorage.getItem("event9");
//   entry9.textContent = getEntry9;
// }
// pullEvent();



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
  entry1.textContent = getEntry1;
  entry2.textContent = getEntry2;
  entry3.textContent = getEntry3;
  entry4.textContent = getEntry4;
  entry5.textContent = getEntry5;
  entry6.textContent = getEntry6;
  entry7.textContent = getEntry7;
  entry8.textContent = getEntry8;
  entry9.textContent = getEntry9;
};
