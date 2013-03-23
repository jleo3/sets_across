function ComposeTweet() {
  var lift_log_table = $('#lift_log');
  var rows = lift_log_table.find('tr');
  var message = "My Weightd Workout: ";
  $.each(rows, function(index, value) {
    if (index == 0) return true;
    var exercise = $('#log_exercise').text();
    var weight = $('#log_weight').text();
    var reps = $('#log_reps').text();
    var sets = $('#log_sets').text();
    message = message + exercise + " " + weight + "X" + reps + "X" + sets
  });
  message = message + " using @_weightd! Check it out: weightd.com #Weightd";
  return message;
}

function ClearInput() {
  $('#exercise').val('');
  $('#weight').val('');
  $('#reps').val('');
  $('#sets').val('');
}

function AppendRow() {
  var lift_log_table = $('#lift_log');
  var row = "<tr><td id='log_exercise'>" + $('#exercise').val() + "</td>"
  row = row + "<td id='log_weight'>" + $('#weight').val() + "</td>"
  row = row + "<td id='log_reps'>" + $('#reps').val() + "</td>"
  row = row + "<td id='log_sets'>" + $('#sets').val() + "</td></tr>"
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
