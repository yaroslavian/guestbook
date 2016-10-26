(function(){
////
var main = function(){
	var form = {
					name: document.getElementById('name-field'),
					message: document.getElementById('message-field'),
					send: document.getElementById('send-button'),
					validationStatus: false,
					setActive : function(){
						this.validationStatus = true;
						this.send.classList.contains('passive') && this.send.classList.remove('passive');

					},
					setPassive : function(){
						this.validationStatus = false;
						!this.send.classList.contains('passive') && this.send.classList.add('passive');
					}

	}

	form.name.oninput = function(){

		if(/^[a-zA-Zа-яА-Я0-9 _\.]+$/.test(this.value) && this.value.length < 30) {
			this.style.borderColor = "#09F";
			form.setActive();
		} else {
			this.style.borderColor = "red";
			form.setPassive();
		}
		console.log(form.validationStatus);
	};

	form.message.oninput = function(){
		var text = this.value;
		if(text.length > 100) this.value = text.slice(0, -1);
	};


	//AJAX PART

	var page = {
		lastId : 0,

		getMessages: function(id) {
			var i, res,
					messages = [],
					url = 'get-messages.php';
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
		},

		sendMessage: function(user, message) {
			var url = 'send-message.php?user='+user+'&message='+message;
			var ajax = new XMLHttpRequest();
			ajax.open("GET", url);
			ajax.send();
		}

	};

	document.getElementById('send-button').onclick = function(){
		console.log(form.validationStatus);
		if(form.validationStatus) {
			page.sendMessage(form.name.value, form.message.value);
			document.getElementById('message-board').innerHTML = '';
			page.getMessages();

		}

	};

	page.getMessages();


//show more messages
	(function(){
		var showMore = document.getElementById('show-more');
		showMore.onclick = function(){
			page.getMessages(page.lastId);
		};
	}());

//scroll-top
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
		};
	}());



};




window.onload = main;
/////
}());
