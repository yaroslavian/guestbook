;(function(){
////
var main = function() {
  page.getMessages();

  var manageScrollTopAppearance = page.addScrollTopButton();

  (function(){
    var logout = document.getElementById('logout');
    logout && (logout.onclick = page.closeSession);
  }());

  //scroll event
  window.onscroll = function(){
    manageScrollTopAppearance();
    page.onScrollLoadMessages();
  };

};

window.onload = main;
/////
}());
