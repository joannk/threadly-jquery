var main = function() {
  $('form').submit(function() {

var comment = $("#comment").val();
var new_text = comment;


  if(comment !== "") {
    var html = $('<li>').text(comment);

    $('<li>').text(comment).prependTo('.comments');

    $('#comment').val("");
  }
    return false;
  });
};

$(document).ready(main);
