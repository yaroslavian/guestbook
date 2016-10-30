(function(){
////
var main = function(){
	var form = {
					name: document.getElementById('name-field'),
					message: document.getElementById('message-field'),
					send: document.getElementById('send-button'),
					validate: function(){
						//validate name
						var nameIsValid = this.name.value && this.name.value.length > 1 && this.name.value.length < 30 &&
						/^[a-zA-Zа-яА-Я0-9 _\.]+$/.test(this.name.value);

						//validate message
						(function(){
							var text = this.message.value;
							if(text.length > 100) {
								this.message.value = text.slice(0, 100);
							}
						}.call(this));
						var messageIsValid = !!this.message.value;

						//highlighting
						if(!nameIsValid) this.name.style.borderColor = "red";
						else this.name.style.borderColor = "#09F";

						if(!messageIsValid) this.message.style.borderColor = "red";
						else this.message.style.borderColor = "#09F";

						if( nameIsValid && messageIsValid) {
							this.setActive();
							return true;
						} else {
							this.setPassive();
							return false;
						}
					},
					setActive : function(){
						this.send.classList.contains('passive') && this.send.classList.remove('passive');

					},
					setPassive : function(){
						!this.send.classList.contains('passive') && this.send.classList.add('passive');
					},
					clear: function (){
						this.name.value = this.message.value = '';
						this.setPassive();
					},
					clearMessage: function (){
						this.message.value = '';
						this.setPassive();
					},

	}

	form.name.oninput = function(){ form.validate(); };
	form.message.oninput = function(){ form.validate(); };


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
			message = message.replace(/[,-_.!~*'()]/g, '\\$&');
			user = encodeURIComponent(user);
			message = encodeURIComponent(message);
			var url = 'send-message.php?user='+user+'&message='+message;
			var ajax = new XMLHttpRequest();
			ajax.open("GET", url);
			ajax.send();
		}

	};

	form.send.onclick = function(){
		if(form.validate()) {
			document.cookie="name:"+form.name.value;
			page.sendMessage(form.name.value, form.message.value);
			form.clearMessage();
			document.getElementById('message-board').innerHTML = '';
			page.getMessages();
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

	//key binding
	(function(){
		var formDOM = document.getElementsByTagName('form')[0];
		//disable submit functionality
		formDOM.onsubmit = function(e){ e.preventDefault(); };
		formDOM.onkeypress = function(e){
			// Send data on press Ctrl+Enter if the form is valid
			if(e.keyCode===10 && e.ctrlKey && form.validate()) {
				document.cookie="name:"+form.name.value;
				page.sendMessage(form.name.value, form.message.value);
				form.clearMessage();
				document.getElementById('message-board').innerHTML = '';
				page.getMessages();
			}
		};
	}());

	//cookies and focus
	(function(){
		// form.name.value = document.cookie
		console.log(document.cookie);
		if(document.cookie){
			var name = document.cookie.split(':')[1];
			form.name.value = name;
			form.message.focus();
		} else { form.name.focus(); };

	}());


	//registration form
	(function(){

		var registerLink = document.getElementById('register-link');
		var wrapper = document.getElementById('reg-form-wrapper');
		var container = document.getElementById('reg-form-container');
		var form = document.querySelector('#reg-form-container > form');
		var submit = document.getElementById('reg-submit');

		registerLink.onclick = function(){
			wrapper.style.display='block';
		};

		wrapper.onclick = function(e){
			if(e.target ===  this)	this.style.display = 'none';
		};

		submit.onclick = function() {
			wrapper.style.display = 'none';
			var url = 'registrator.php';
			var postData = "username=" +
				document.querySelector('input[name="regname"]').value +
				"&password=" +
				document.querySelector('input[name="regpass"]').value;

			var ajax = new XMLHttpRequest();
			ajax.open('POST', url);

			ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			ajax.send(postData);

		};

	}());

};


window.onload = main;
/////
}());
