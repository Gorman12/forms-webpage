$(function() {
  $("#blanks form").submit(function(event){
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var danceInput = $("input#dance").val();
    var weekInput = $("input#week").val();
    var describeInput = $("input#describe").val();



    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".dance").text(danceInput);
    $(".week").text(weekInput);
    $(".describe").text(describeInput);

    $("#story").show();

    event.preventDefault();

  });
});
