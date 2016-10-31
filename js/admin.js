(function(){
////
var main = function() {
	var page = {
		lastId : 0,

		getMessages: function(id) {
			var i, res,
					messages = [],
					url = 'modules/get-messages.php';
					if(id) url+=('?id='+id);

			var ajax = new XMLHttpRequest();
			ajax.open("GET", url);
			ajax.send();

			ajax.onload = function() {
				res = JSON.parse(ajax.responseText);

				messages = res['messages'];

				page.lastId = messages[messages.length-1]['id'];

				//render
				for(i=0;i<messages.length;i++) {
					document.getElementById('message-board').appendChild(
						function(){
							var div = document.createElement('div');
							div.classList.add('message-block');
							div.innerHTML =	messages[i]['id'] + ':<br /><br />' +
															messages[i]['user'] + ':<br /><br />' +
															messages[i]['message'] + '<br /><br />' +
															messages[i]['date'];
							return div;
					}());
				}
			};
		}
	};

	page.getMessages();

	//scroll-top button
	(function(){
		var button = document.getElementById('scroll-top');
		var scrollTop = function(){
		  if(window.scrollY >= 5) {
		    window.scroll(0,window.scrollY-(scrollY/10));
		    setTimeout(scrollTop,10);
		  } else window.scroll(0,0);
		};
		button.onclick = scrollTop;

		window.onscroll = function(){
			if(window.scrollY > window.innerHeight*2/3) {
				button.style.display = 'block';
			} else {
				button.style.display = 'none';
			}

			//show more messages
			if(document.body.clientHeight < window.scrollY + window.innerHeight) {
				console.log(document.body.innerHeight,window.scrollY,window.innerHeight);
				page.getMessages(page.lastId);
			}
		};
	}());

};


window.onload = main;
/////
}());
