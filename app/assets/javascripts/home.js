function Tweet() {
  return "@_weightd";
}

function ClearInput() {
  $('#exercise').val('');
  $('#weight').val('');
  $('#reps').val('');
  $('#sets').val('');
}

function PopulateLiftTable() {
  var exercise = $('#exercise').val();
  var weight = $('#weight').val();
  var reps = $('#reps').val();
  var sets = $('#sets').val();
  $('#lift_exercise').text(exercise);
  $('#lift_weight').text(weight);
  $('#lift_reps').text(reps);
  $('#lift_sets').text(sets);
}

$(document).ready(function() {
  $('.add').click(function() {
    $('.lift').removeAttr("style");
    var exercise = $('#exercise').val();
    var weight = $('#weight').val();
    var reps = $('#reps').val();
    var sets = $('#sets').val();
    var tweet = "I just finished " + exercise + ": " + weight + "X" + reps + "X" + sets + " using @_weightd! Check it out: weightd.com #Weightd";

    PopulateLiftTable();
    ClearInput();

    $('#twitter-share-button-div').empty()
    var clone = $('.twitter-share-button-template').clone()
    clone.removeAttr("style"); // unhide the clone
    clone.attr("data-text", tweet); 
    clone.attr("class", "twitter-share-button"); 

    $('.twitter-share-button-div').append(clone);

    $.getScript("http://platform.twitter.com/widgets.js");
  });
});
