function ComposeTweet() {
  var exercise = $('#lift_exercise').text();
  var weight = $('#lift_weight').text();
  var reps = $('#lift_reps').text();
  var sets = $('#lift_sets').text();
  return "My Workout: " + exercise + " " + weight + "X" + reps + "X" + sets + " using @_weightd! Check it out: weightd.com #Weightd";
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
    PopulateLiftTable();
    ClearInput();

    if ($('.twitter-share-button-div').children().size() == 0) {

      $('#twitter-share-button-div').empty()
      var clone = $('.twitter-share-button-template').clone()
      clone.removeAttr("style"); // unhide the clone
      clone.attr("data-text", ComposeTweet()); 
      clone.attr("class", "twitter-share-button"); 

      $('.twitter-share-button-div').append(clone);

      $.getScript("http://platform.twitter.com/widgets.js");
    }
  });
});
