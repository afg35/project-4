//jshint esversion: 6

let controller = function() {

//If there is a toDoList in local storage, grab it and put on web page
  if (localStorage.getItem("toDoList")) {
    $(".comments").html(localStorage.getItem("toDoList"));
  }

  let addCommentFromInputBox = function() {
    //Semmy uses "$" to name variables that will contain jQuery objects
    let $new_comment;

    if ($(".comment-input input").val() !== "") {
      $new_comment = $("<p>").text($(".comment-input input").val());
      //$new_comment.hide();
      $(".comments").append($new_comment);
      //$new_comment.fadeIn();
      $(".comment-input input").val("");

      localStorage.setItem("toDoList", $(".comments").html());

      // log list of paragraph elements
      console.log($(".comments").html());
    }
  };

  let deleteComm = function() {
    $(".comments").empty();
    localStorage.removeItem("toDoList");
  };

  $(".comment-delete").on("click", function(event) {
  deleteComm();
});

  $(".comment-input button").on("click", function(event) {
    addCommentFromInputBox();
  });


  $(".comment-input input").on("keypress", function(event) {
    if (event.keyCode === 13) {
      addCommentFromInputBox();
    }
  });
};

$(document).ready(controller);
