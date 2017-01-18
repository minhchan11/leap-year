//Business Logic
var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }

};

//User Interface
$("document").ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $(".year").text(year);
    $("#result").show();
    if (result === false) {
      $(".not").text("not");
    } else {
      $(".not").hide();
    }
  });
});
