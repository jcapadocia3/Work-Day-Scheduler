var todaysDate = moment().format("MMM Do, YYYY, hh:mm:ss");
$("#currentDay").text(todaysDate);

function setTime() {
    var timerInterval = setInterval(function() {
        todaysDate = moment().format("MMM Do, YYYY, hh:mm:ss");
        $("#currentDay").text(todaysDate);
    }, 1000);
  }

setTime();




// 9AM event
var save1 = document.getElementById("save1");
var entry1 = document.getElementById("colorCoded1");

save1.addEventListener("submit", (event) => {
  event.preventDefault();
  storeEntry1();
});

function storeEntry1() {
  var new_data1 = document.getElementById("colorCoded1").textContent;
  localStorage.setItem("event1", new_data1);
};

function pullEvent1() {
  var getEntry1 = localStorage.getItem("event1");
  entry1.textContent = getEntry1;
};
pullEvent1();

// 10AM event
var save2 = document.getElementById("save2");
var entry2 = document.getElementById("colorCoded2");

save2.addEventListener("submit", (event) => {
  event.preventDefault();
  storeEntry2();
});

function storeEntry2() {
  var new_data2 = document.getElementById("colorCoded2").textContent;
  localStorage.setItem("event2", new_data2);
};

function pullEvent2() {
  var getEntry2 = localStorage.getItem("event2");
  entry2.textContent = getEntry2;
};
pullEvent2();

// 11AM event
var save3 = document.getElementById("save3");
var entry3 = document.getElementById("colorCoded3");

save3.addEventListener("submit", (event) => {
  event.preventDefault();
  storeEntry3();
});

function storeEntry3() {
  var new_data3 = document.getElementById("colorCoded3").textContent;
  localStorage.setItem("event3", new_data3);
};

function pullEvent3() {
  var getEntry3 = localStorage.getItem("event3");
  entry3.textContent = getEntry3;
};
pullEvent3();

// 12PM event
var save4 = document.getElementById("save4");
var entry4 = document.getElementById("colorCoded4");

save4.addEventListener("submit", (event) => {
  event.preventDefault();
  storeEntry4();
});

function storeEntry4() {
  var new_data4 = document.getElementById("colorCoded4").textContent;
  localStorage.setItem("event4", new_data4);
};

function pullEvent4() {
  var getEntry4 = localStorage.getItem("event4");
  entry4.textContent = getEntry4;
};
pullEvent4();

// 1PM event
var save5 = document.getElementById("save5");
var entry5 = document.getElementById("colorCoded5");

save5.addEventListener("submit", (event) => {
  event.preventDefault();
  storeEntry5();
});

function storeEntry5() {
  var new_data5 = document.getElementById("colorCoded5").textContent;
  localStorage.setItem("event5", new_data5);
};

function pullEvent5() {
  var getEntry5 = localStorage.getItem("event5");
  entry5.textContent = getEntry5;
};
pullEvent5();

// 2PM event
var save6 = document.getElementById("save6");
var entry6 = document.getElementById("colorCoded6");

save6.addEventListener("submit", (event) => {
  event.preventDefault();
  storeEntry6();
});

function storeEntry6() {
  var new_data6 = document.getElementById("colorCoded6").textContent;
  localStorage.setItem("event6", new_data6);
};

function pullEvent6() {
  var getEntry6 = localStorage.getItem("event6");
  entry6.textContent = getEntry6;
};
pullEvent6();

// 3PM event
var save7 = document.getElementById("save7");
var entry7 = document.getElementById("colorCoded7");

save7.addEventListener("submit", (event) => {
  event.preventDefault();
  storeEntry7();
});

function storeEntry7() {
  var new_data7 = document.getElementById("colorCoded7").textContent;
  localStorage.setItem("event7", new_data7);
};

function pullEvent7() {
  var getEntry7 = localStorage.getItem("event7");
  entry7.textContent = getEntry7;
};
pullEvent7();

// 4PM event
var save8 = document.getElementById("save8");
var entry8 = document.getElementById("colorCoded8");

save8.addEventListener("submit", (event) => {
  event.preventDefault();
  storeEntry8();
});

function storeEntry8() {
  var new_data8 = document.getElementById("colorCoded8").textContent;
  localStorage.setItem("event8", new_data8);
};

function pullEvent8() {
  var getEntry8 = localStorage.getItem("event8");
  entry8.textContent = getEntry8;
};
pullEvent8();

// 5PM event
var save9 = document.getElementById("save9");
var entry9 = document.getElementById("colorCoded9");

save9.addEventListener("submit", (event) => {
  event.preventDefault();
  storeEntry9();
});

function storeEntry9() {
  var new_data9 = document.getElementById("colorCoded9").textContent;
  localStorage.setItem("event9", new_data9);
};

function pullEvent9() {
  var getEntry9 = localStorage.getItem("event9");
  entry9.textContent = getEntry9;
};
pullEvent9();