// Display today time and date
var today = dayjs().format('MMMM D YYYY, h:mm a');
$("#currentDay").text(today);

var currentHour = dayjs().hour();

if (currentHour < today) {
  $(this).removeClass("future");
  $(this).removeClass("present");
  $(this).addClass("past");
}
else if (currentHour === today) {
  $(this).removeClass("past");
  $(this).removeClass("future");
  $(this).addClass("present");
}
else {
  $(this).removeClass("present");
  $(this).removeClass("past");
  $(this).addClass("future");
}

$(document).ready(function () {

  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
  })

  // gets value of local storage
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
})