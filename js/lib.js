;var page = (function(){
////
var page = {
  lastId : 0,
  requestedId: 0,

  getMessages: function(id) {
    var i, res,
        messages = [],
        url = 'modules/get-messages.php';
        if(id) url+=('?id='+id);

    var ajax = new XMLHttpRequest();
    ajax.open("GET", url);
    ajax.send();

    var that = this;
    ajax.onload = function() {
      res = JSON.parse(ajax.responseText);

      messages = res['messages'];

      that.lastId = messages[messages.length-1]['id'];

      //render
      that.renderMessages(messages);
    };
  },

  renderMessages: function(messages, parent){
    parent = parent || document.getElementById('message-board');
    var that = this;
    for(i=0;i<messages.length;i++) {
      (function(){
          var div = document.createElement('div');
          div.classList.add('message-block');
          div.innerHTML =	'<div class="message-id">'+messages[i]['id']+'</div>'+
                          messages[i]['user'] + ':<br /><br />' +
                          messages[i]['message'] + '<br /><br />' +
                          messages[i]['date'];
          that.setRemoveButton && that.setRemoveButton(div);

          parent.appendChild(div);
      }());
    }
  },

  sendMessage: function(message) {
    message = message.replace(/[,-_.!~*'()]/g, '\\$&');
    message = encodeURIComponent(message);
    var url = 'modules/send-message.php?message='+message;
    var ajax = new XMLHttpRequest();
    ajax.open("GET", url);
    ajax.send();
  },

  onScrollLoadMessages: function(){
    if(document.body.clientHeight < window.scrollY + window.innerHeight) {
      if(this.requestedId !== this.lastId) {
        this.getMessages(this.lastId);
        this.requestedId = this.lastId;
      }
    }
  },

  addScrollTopButton: function(){
    var button = document.createElement('div');
    button.id = 'scroll-top';
    button.innerHTML= 'Scroll top';

    var scrollTop = function(){
		  if(window.scrollY >= 5) {
		    window.scroll(0,window.scrollY-(scrollY/10));
		    setTimeout(scrollTop,10);
		  } else window.scroll(0,0);
		};

    button.onclick = scrollTop;

    document.body.appendChild(button);

    return function(){
      button.style.display = (window.scrollY > window.innerHeight*2/3) ? 'block' : 'none';
    };
  },

  popupWrapper : document.getElementById('popup-form-wrapper'),

  renderPopup: function(container) {
    this.popupWrapper.style.display='block';
    container.style.display='block';

    this.popupWrapper.onclick = function(e){
      if(e.target ===  this) {
        container.style.display = 'none';
        this.style.display = 'none';
      }
    };
  },

  closeSession: function(){
    var ajax = new XMLHttpRequest();
    ajax.open("GET",'modules/logout.php');
    ajax.send();
    ajax.onload = function(){
      location.reload();
    };
  },

  reloadMessageBoard: function(){
    document.getElementById('message-board').innerHTML = '';
    this.getMessages();
  },

};

return page;

////
}());
