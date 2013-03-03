// the twitter share button does not natively support being dynamically
// updated after the page loads. We want to give it a unique (social_id)
// link whenver this modal is shown. We engage in some jQuery fun here to 
// clone a 'hidden' twitter share button and then force the Twitter
// Javascript to load.

/*
*/
!function(d,s,id) {
  var js,fjs=d.getElementsByTagName(s)[0];
  if(!d.getElementById(id)) {
    js=d.createElement(s);
    js.id=id;
    js.src="//platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js,fjs);
  }
}(document,"script","twitter-wjs");

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

// remove any previous clone
/*
$('#tweetSubmit').on('click', function(ev) {
  ev.preventDefault();
  // Remove existing iframe
  $('#tweetBtn iframe').remove();
  // Generate new markup
  var tweetBtn = $('<a></a>')
    .addClass('twitter-share-button')
    .attr('href', 'http://twitter.com/share')
    .attr('data-url', 'http://test.com')
    .attr('data-text', $('#tweetText').val());
  $('#tweetBtn').append(tweetBtn);
  twttr.widgets.load();
});
*/
