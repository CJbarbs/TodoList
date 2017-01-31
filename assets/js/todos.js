// check off list items by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

//deleting the todo list by clicking on X
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove;
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  if (event.which === 13){
    //taking new list items from the text input
    var todoText = $(this).val();
    $(this).val("");
    //creating the new li and adding to the parent ul
    $("ul").append("<li><span>X</span> " + todoText + "</li>");
  }
});
