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

	var manageScrollTopAppearance = page.addScrollTopButton();

	//scroll event
	window.onscroll = function(){
		manageScrollTopAppearance();
		page.onScrollLoadMessages();
	};

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



	//login form
	(function(){
		var loginLink = document.getElementById('login-link');
		// var wrapper = document.getElementById('popup-form-wrapper');
		var container = document.getElementById('login-form-container');
		var form = document.querySelector('#login-form-container > form');
		var submit = document.getElementById('login-submit');

		loginLink.onclick = function(){
			page.renderPopup(container);
		};

		submit.onclick = function() {
			page.popupWrapper.style.display = 'none';
			var url = 'modules/login.php';
			var postData = "username=" +
				document.querySelector('input[name="username"]').value +
				"&userpass=" +
				document.querySelector('input[name="userpass"]').value;

			var ajax = new XMLHttpRequest();
			ajax.open('POST', url);

			ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			ajax.send(postData);

			ajax.onload = function(){
				var res = JSON.parse(ajax.responseText);
				if(res && res.status) {
					console.log(res);
					location.reload();
				}
			};

		};



	}());

	//registration form
	(function(){

		var registerLink = document.getElementById('register-link');
		// var wrapper = document.getElementById('popup-form-wrapper');
		var container = document.getElementById('reg-form-container');
		var form = document.querySelector('#reg-form-container > form');
		var submit = document.getElementById('reg-submit');

		registerLink.onclick = function(){
			page.renderPopup(container);
		};
		//
		// submit.onclick = function() {
		// 	page.popupWrapper.style.display = 'none';
		// 	var url = 'modules/registrator.php';
		// 	var postData = "username=" +
		// 		document.querySelector('input[name="regname"]').value +
		// 		"&password=" +
		// 		document.querySelector('input[name="regpass"]').value;
		//
		// 	var ajax = new XMLHttpRequest();
		// 	ajax.open('POST', url);
		//
		// 	ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		// 	ajax.send(postData);
		//
		// };

	}());

};


window.onload = main;
/////
}());
