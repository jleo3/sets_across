$(document).ready(function() {

  $('.button').click(function() {
    $('#twitter-share-button-div').empty()

    // create a clone of the twitter share button template
    var clone = $('.twitter-share-button-template').clone()

    // fix up our clone
    clone.removeAttr("style"); // unhide the clone
    clone.attr("data-text", "some new text"); 
    clone.attr("class", "twitter-share-button"); 

    // copy cloned button into div that we can clear later
    $('.twitter-share-button-div').append(clone);

    // reload twitter scripts to force them to run, converting a to iframe
    $.getScript("http://platform.twitter.com/widgets.js");
  });
});
