//empty variables

var userName = "";
var ingredients = [];
var ingredientNumber = "";
var taco = "";
var recipes = "";

var intro = function(){
  document.getElementById('recipes').style.display = "none";
  document.getElementById('intro').style.display = "inline-block";
      $(".intro").typed({
        strings: ["Hey! I'm Taco, the recipe splitter.", "I take the everyday ingredients you have in your fridge, and tell you all the recipes that you can make with those ingredients.", "Before we begin, I'd like to get to know you better. What's your name?"],
        typeSpeed: 0
      });
  }

//gets users name
getUserName = function() {
  var userName = document.getElementById('input-1').value;
  document.getElementById('intro').style.display = "none";
  document.getElementById('confirm').style.display = "none";
  document.getElementById('ingredientask').style.display = "inline-block";
  $(".ingredientask").typed({
    strings: ["Hi, " + userName + ". Add your ingredients, each seperated by a comma."],
    typeSpeed: 0
  });
  //document.getElementById('taco-text-2').innerHTML = "Hi, " + userName + ". Add your ingredients, each seperated by a comma.";
}

ingredientSplit = function() {
  ingredients = document.getElementById('ingredients').value.split(",");
  document.getElementById('ingredientask').style.display = "none";
  document.getElementById('confirm').style.display = "inline-block";
  $(".confirm").typed({
    strings: ["Your ingredients are: " + ingredients + ", correct?"],
    typeSpeed: 0
  });
}

showRecipe = function() {
  if ($.inArray(ingredients, roastedBeefTenderloin)){
    recipes = roastedBeefTenderloin;
  }
  else {
    recipes = "nothing";
  }
  document.getElementById('confirm').style.display = "none";
  document.getElementById('recipes').style.display = "inline-block";
  $(".recipes").typed({
    strings: ["With " + ingredients + ", you can make: "],
    typeSpeed: 0
  });
  document.getElementById('result').innerHTML = recipes;
}
