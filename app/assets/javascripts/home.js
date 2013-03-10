$(document).ready(function() {

  $('.button').click(function() {
    var exercise = $('#exercise').val();
    var weight = $('#weight').val();
    var reps = $('#reps').val();
    var sets = $('#sets').val();
    var tweet = "I just finished the " + exercise + ": " + weight + "X" + reps + "X" + sets + " using @weightd_! Check it out: weightd.com";

    $('#twitter-share-button-div').empty()
    var clone = $('.twitter-share-button-template').clone()
    clone.removeAttr("style"); // unhide the clone
    clone.attr("data-text", tweet); 
    clone.attr("class", "twitter-share-button"); 

    $('.twitter-share-button-div').append(clone);

    $.getScript("http://platform.twitter.com/widgets.js");
  });
});
