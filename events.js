// Mouse Events
// 1. *click()*: Triggered when an element is clicked.
// 2. *dblclick()*: Triggered when an element is double-clicked.
// 3. *mousedown()*: Triggered when a mouse button is pressed over an element.
// 4. *mouseup()*: Triggered when a mouse button is released over an element.
// 5. *mousemove()*: Triggered when the mouse is moved over an element.
// 6. *mouseover()*: Triggered when the mouse is moved over an element or its child elements.
// 7. *mouseout()*: Triggered when the mouse is moved out of an element or its child elements.




$(document).ready(() => {
  //  alert('Document is ready ')
  $("#btn").dblclick(() => {
    alert("DBclick in btn");
  });
  $("p").mouseenter(function () {
    console.log("Mouse Enter in p block");
  });
  $("p").mouseleave(function () {
    console.log("Mouse Leaved  from p block");
  });
  $("p").mouseout(function () {
    console.log("Mouse out  from p block");
  });
  $("#btn").mousedown(function () {
    console.log("Mouse down performed");
  });
  $("#btn").mouseup(function () {
    console.log("Mouse up performed");
  });

});




//  key events

// Keyboard Events
// 1. *keydown()*: Triggered when a key is pressed.
// 2. *keyup()*: Triggered when a key is released.
// 3. *keypress()*: Triggered when a key is pressed and released.

// $(document).keyup((event) => {
//   if (event.key == "k") {
//     console.log("K is pressed");
//   } else {
//     console.log("Any key is down");
//   }
// });

// $(document).keydown((event) => {
//   if (event.key == "K") {
//     console.log("Shift + K is pressed");
//   } else if (event.ctrlKey && event.key == "c") {
//     console.log("CTRL + c");
//   } else if (event.ctrlKey && event.key == "C") {
//     console.log("CTRL+ Shift + c");
//   } else {
//     console.log("Other key " + event.code + " " + event.key);
//   }
// });




// Form Events
// 1. *submit()*: Triggered when a form is submitted.
// 2. *change()*: Triggered when the value of an element changes.
// 3. *focus()*: Triggered when an element receives focus.
// 4. *blur()*: Triggered when an element loses focus.

$(document).ready(function () {
  // Submit event
  $("#myForm").submit(function (event) {
    event.preventDefault();
    console.log("Form submitted");
    alert("Form submitted successfully!");
  });

  // Change event
  $("#options").change(function () {
    console.log("Option changed to: " + $(this).val());
    alert("You selected: " + $(this).val());
  });

  // Focus event
  $("#name").focus(function () {
    console.log("Name field is focused");
    $(this).css("background-color", "lightblue");
  });

  // Blur event
  $("#name").blur(function () {
    console.log("Name field lost focus");
    $(this).css("background-color", "red");
  });

  // Change event for input fields
  $("#name, #email").change(function (event) {
    console.log(
      $(this).attr("id") + " field value changed to: " + $(this).val()
    );
    console.log($(this).attr('type'))
  });
});


// Document/Window Events
// 1. *ready()*: Triggered when the document is ready.
// 2. *load()*: Triggered when the document and all its assets are loaded.
// 3. *resize()*: Triggered when the window is resized.
// 4. *scroll()*: Triggered when the window is scrolled.


$(document).ready(function () {
  console.log("Document is ready");

  // Load event
  $(window).on('load',()=>{
    console.log('All assests are loaded')
  })

  // Resize event
  $(window).resize(function () {
    console.log(
      "Window resized to: " + $(window).width() + "x" + $(window).height()
    );
  });

  // Scroll event
  $(window).scroll(function () {
    console.log("Window scrolled to: " + $(this).scrollTop());
  });
  $("html, body").animate({ scrollTop: 32 }, 500); //auto scroll 32 pixal top to bottom in 500 ms

  $(window).click((event)=>{
    event.preventDefault()
    console.log("hello");
    event.stopImmediatePropagation(); //this will stop next evnet on click
  }) // prevent default behaviour of window on click event 
 $(window).click(()=>{
  console.log('Hiii') //this will not perfromed 
 })
});

