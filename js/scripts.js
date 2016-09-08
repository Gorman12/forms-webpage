$(function() {
  $("#blanks form").submit(function(event){
    $(".person1").append("stuff");
    $(".person2").append("stuff");
    $(".dance").append("stuff");
    $(".week").append("stuff");
    $(".describe").append("stuff");

    $("#story").show();

    event.preventDefault();

  });
});
