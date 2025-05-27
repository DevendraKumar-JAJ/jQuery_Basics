$(document).ready(function () {
  $("h1").click(()=> {
    $("p").fadeToggle("slow");
  });
  $("p").click(function () {
    $("h1").fadeToggle("slow");
  });
});
