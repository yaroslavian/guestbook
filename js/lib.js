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
          div.innerHTML =	'<div>'+messages[i]['id']+'</div>' +
                          messages[i]['user'] + ':<br /><br />' +
                          messages[i]['message'] + '<br /><br />' +
                          messages[i]['date'];
          if(that.additions && that.additions.renderMessages) {
            that.additions.renderMessages.call(that, div);
          }
          
          parent.appendChild(div);
      }());
    }
  },

  sendMessage: function(user, message) {
    message = message.replace(/[,-_.!~*'()]/g, '\\$&');
    user = encodeURIComponent(user);
    message = encodeURIComponent(message);
    var url = 'modules/send-message.php?user='+user+'&message='+message;
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
      if(window.scrollY > window.innerHeight*2/3) button.style.display = 'block';
      else button.style.display = 'none';
    };
  }

};

return page;

////
}());