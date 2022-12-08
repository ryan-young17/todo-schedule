var container = $(".container-lg");
var saveButton = $(".saveBtn");
var userInput = $("textarea");

$(function () {
  saveButton.on("click", function () {
    var text = $(this).siblings().eq(1).val();
    var hour = $(this).parent().attr("id");
    localStorage.setItem(hour, text);
    
  });
});

var currentHour = dayjs().hour();

for (var i = 9; i <= 17; i++) {
  var timeId = $("#hour-" + i);
  console.log(currentHour);
  if (i === currentHour) {
    timeId.addClass("present");
  } 
  else if (i < currentHour) {
    timeId.addClass("past");
  } 
  else {
    timeId.addClass("future");
  }
};

var currDay = dayjs();
$("#currentDay").text(currDay.format("dddd, MMMM D"));

for (var i = 9; i <= 17; i++) {
    var todo = localStorage.getItem("hour-" + i);
    var textEl = $("#hour-" + i).children().eq(1);
    textEl.val(todo);
}

