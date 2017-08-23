var $catImageOne = $('#cat-img-1');
var $valueOne = $('#value-1');
var $nameOne = $('#name-1')
var nClicksOne = 0;

var $catImageTwo = $('#cat-img-2');
var $valueTwo = $('#value-2');
var $nameTwo = $('#name-2')
var nClicksTwo = 0;

var catNameOne = "Latte";
var catNameTwo = "Mocha";

$(document).ready(function(){
  $nameOne.text(catNameOne);
  $nameTwo.text(catNameTwo);
  
  $catImageOne.click(function(){
    nClicksOne += 1;
    $valueOne.text("")
    $valueOne.append(nClicksOne);
  });

  $catImageTwo.click(function(){
    nClicksTwo += 1;
    $valueTwo.text("")
    $valueTwo.append(nClicksTwo);
  });
})
