$(document).ready(function () {
  // Universal selector (*)
  $("*").css("font-family", "Arial");

  // ID selector (#id)
  $("#header").css("color", "red");

  // Class selector (.class)
  $(".para").addClass("highlight");

  // Element selector (element)
  $("li").css("list-style", "none");

  // Attribute selector ([attribute])
  $("[type='text']").css("width", "200px");

  // Attribute selector ([attribute="value"])
  $("[value='Hello World']").css("background-color", "lightblue");

  // Hierarchy selector (ancestor descendant)
  $("#container p").css("font-size", "18px");

  // Hierarchy selector (parent > child)
  $("ul > li").css("padding", "10px");

  // Filter selector (:first)
  $("li:first").css("background-color", "green");

  // Filter selector (:last)
  $("li:last").css("background-color", "orange");

  // Filter selector (:even)
  $("li:even").css("color", "blue");

  // Filter selector (:odd)
  $("li:odd").css("color", "purple");

  // Visibility selector (:hidden)
  // Since there are no hidden elements, we'll hide one first
  $("#btn").hide();
  $(":hidden").css("background-color", "gray");
  $("#btn").show();

  // Visibility selector (:visible)
  $(":visible").css("border", "1px solid black");
});

// Basic Selectors
// 1. ***: Universal selector, selects all elements.
// 2. *#id*: ID selector, selects an element with the specified ID.
// 3. *.class*: Class selector, selects elements with the specified class.
// 4. *element*: Element selector, selects all elements of the specified type (e.g., p, div, span).

// Attribute Selectors
// 1. *[attribute]*: Selects elements with the specified attribute.
// 2. *[attribute="value"]*: Selects elements with the specified attribute and value.
// 3. *[attribute^="value"]*: Selects elements with the specified attribute and value that starts with the specified string.
// 4. *[attribute$="value"]*: Selects elements with the specified attribute and value that ends with the specified string.
// 5. *[attribute*="value"]*: Selects elements with the specified attribute and value that contains the specified string.

// Hierarchy Selectors
// 1. *ancestor descendant*: Selects elements that are descendants of the specified ancestor.
// 2. *parent > child*: Selects elements that are direct children of the specified parent.
// 3. *prev + next*: Selects elements that are next to the specified previous element.
// 4. *prev ~ siblings*: Selects elements that are siblings of the specified previous element.

// Filter Selectors
// 1. *:first*: Selects the first element in the set.
// 2. *:last*: Selects the last element in the set.
// 3. *:even*: Selects elements with an even index.
// 4. *:odd*: Selects elements with an odd index.
// 5. *:eq(index)*: Selects the element at the specified index.

// Visibility Selectors
// 1. *:hidden*: Selects elements that are hidden.
// 2. *:visible*: Selects elements that are visible.

// These are some of the most commonly used selectors in jQuery. By combining these selectors, you can target specific elements in your HTML document and perform various actions on them.
