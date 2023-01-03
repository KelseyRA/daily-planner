
currentDate = dayjs().format('ddd, MMMM DD, YYYY');
$('#currentDay').text(currentDate);

var description = $('.description');
var hourBlock = $(this).parent('id');
var appointmentArray = JSON.parse(localStorage.getItem("appointment"))||[];
var appointment = [];
  
  $(".saveBtn").on("click", function () {

      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");

      // Save text in local storage
      localStorage.setItem(time, text);
  })


// Retain values when page is refreshed
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

// Change color based off of current time. Past is in gray, present is red, and future is green.

var currentTime = parseInt(dayjs().format('H'));


  $(".time-block").each(function() {
  var timeBlock = parseInt($(this).attr("id").split("hour")[1])

    if (timeBlock === currentTime) {
      $(this).addClass("present");
      $(this).removeClass("past");
      $(this).removeClass("future");
    } 
  
    else if (timeBlock > currentTime) {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    } 
  
    else {
      $(this).removeClass("present");
      $(this).addClass("past");
      $(this).removeClass("future");
  
    }
  })


