var todaysDate = moment().format("MMM Do, YYYY, hh:mm:ss");
$("#currentDay").text(todaysDate);

function setTime() {
    var timerInterval = setInterval(function() {
        todaysDate = moment().format("MMM Do, YYYY, hh:mm:ss");
        $("#currentDay").text(todaysDate);
    }, 1000);
  }

setTime();

var save = document.getElementById("save1");
var entry = document.getElementById("colorCoded");

save.addEventListener("submit", (event) => {
  event.preventDefault();
  storeEntry();
});

function storeEntry() {
  var new_data = document.getElementById("colorCoded").textContent;

  if (localStorage.getItem("event") == null) {
    localStorage.setItem("event", "[]");
  }

  localStorage.setItem("event", new_data);
};

function pullEvent() {
  var getEntry = localStorage.getItem("event");
  entry.textContent = getEntry;
};
pullEvent();
