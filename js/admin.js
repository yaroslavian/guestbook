;(function(){
////
var main = function() {
  page.getMessages();

  var manageScrollTopAppearance = page.addScrollTopButton();

  //scroll event
  window.onscroll = function(){
    manageScrollTopAppearance();
    page.onScrollLoadMessages();
  };

};

window.onload = main;
/////
}());
