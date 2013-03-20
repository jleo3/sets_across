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

function AppendRow() {
  var lift_log_table = $('#lift_log');
  var row = "<tr><td>" + $('#exercise').val() + "</td>"
  row = row + "<td>" + $('#weight').val() + "</td>"
  row = row + "<td>" + $('#reps').val() + "</td>"
  row = row + "<td>" + $('#sets').val() + "</td></tr>"
  lift_log_table.append(row);
}

$(document).ready(function() {
  $('.add').click(function() {
    $('.lift').removeAttr("style");
    AppendRow();
    ClearInput();

    if ($('.twitter-share-button-div').children().size() == 0) {

      $('#twitter-share-button-div').empty()
      var clone = $('.twitter-share-button-template').clone()
      clone.removeAttr("style");
      clone.attr("data-text", ComposeTweet()); 
      clone.attr("class", "twitter-share-button"); 

      $('.twitter-share-button-div').append(clone);

      $.getScript("http://platform.twitter.com/widgets.js");
    }
  });
});
