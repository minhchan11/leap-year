//Business Logic
var leapYear = function(year) {
  return false;
}

//User Interface
$("document").ready(function() {
  $("form").submit(event(){
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("#result").text(result);
  });
});
