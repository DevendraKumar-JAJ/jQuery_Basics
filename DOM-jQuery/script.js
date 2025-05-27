$(document).ready(function () {
  // Creating and inserting elements
  $("#add-btn").click(function () {
    $("<p id='para2'>This is a new paragraph.</p>").appendTo("#container");
  });

  // Removing elements
  $("#remove-btn").click(function () {
    $("#para2").remove();
  });

  // Modifying element attributes
  $("#header").attr("style", "color: blue");

  // Modifying element properties
  $("#header").prop("title", "DOM Manipulation Example");

  // Modifying element value
  $("<input type='text' id='input-field' value='Hello World'>").appendTo(
    "body"
  );
  $("#input-field").val("New Value");

  // Prepend and append
  $("<span> Prepended text </span>").prependTo("#para1");
  $("<span> Appended text </span>").appendTo("#para1");

  // Before and after
  $("<p>Before paragraph</p>").insertBefore("#para1");
  $("<p>After paragraph</p>").insertAfter("#para1");

  // Empty
  $("<div id='empty-div'><p>This will be removed.</p></div>").appendTo("body");
  $("#empty-div").empty();
  $('span').css("color","red")
  $('span').attr('class',"span")
  $('.span').text(' Changed :Span Id ')
});
