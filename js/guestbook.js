(function(){
////
var main = function(){
	var form = {
					// name: document.getElementById('name-field'),
					message: document.getElementById('message-field'),
					send: document.getElementById('send-button'),
					validate: function(){
						//validate name
						// var nameIsValid = this.name.value && this.name.value.length > 1 && this.name.value.length < 30 &&
						// /^[a-zA-Zа-яА-Я0-9 _\.]+$/.test(this.name.value);

						//validate message
						(function(){
							var text = this.message.value;
							if(text.length > 100) {
								this.message.value = text.slice(0, 100);
							}
						}.call(this));

						var messageIsValid = !!this.message.value;

						//highlighting
						this.message.style.borderColor = !messageIsValid ? "red" : "#09F";

						if(messageIsValid) {
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

					clearMessage: function (){
						this.message.value = '';
						this.setPassive();
					}
	}

	// form.name.oninput = function(){ form.validate(); };
	form.message.oninput = function(){ form.validate(); };

	form.send.onclick = function(){
		if(form.validate()) {
			// document.cookie="name:"+form.name.value;
			page.sendMessage(form.message.value);
			form.clearMessage();
			page.reloadMessageBoard();
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
				// document.cookie="name:"+form.name.value;
				page.sendMessage(form.message.value);
				form.clearMessage();
				page.reloadMessageBoard();
			}
		};
	}());

	//focus
	form.message.focus();

	//login form
	(function(){
		var loginLink = document.getElementById('login-link');
		// var wrapper = document.getElementById('popup-form-wrapper');
		var container = document.getElementById('login-form-container');
		var form = document.querySelector('#login-form-container > form');
		var submit = document.getElementById('login-submit');

		submit.onclick = function() {

			//render loading screen
			// var loadingScreen;
			var loadingInteraval;

			(function(){
				container.style.display = 'none';
				// page.popupWrapper.style.backgroundColor = '#00F';
				//show loading
				loading = (function(){
					var loading = document.createElement('div');
						loading.style.width = loading.style.height = "100px";
						loading.style.backgroundColor = "red";
						loading.style.margin = "auto";
						loading.style.borderRadius = "50px";
						loadingInteraval = setInterval(function(){
								// console.log(loading);
							loading;
							var i, color='#';
							for(i=0;i<6;i++) {
								color += Math.floor(Math.random()*10);
							}
							loading.style.backgroundColor = color;
							console.log(color, loading);
						},250);
					return loading;
				}())

				page.popupWrapper.appendChild(loading);

			}());

			var url = 'modules/login.php';
			var postData = "username=" +
				document.querySelector('input[name="username"]').value +
				"&userpass=" +
				document.querySelector('input[name="userpass"]').value;

			var ajax = new XMLHttpRequest();
			ajax.open('POST', url);

			ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			ajax.send(postData);

			ajax.onload = function(e) {
				try{
					var res = JSON.parse(ajax.responseText);
				} catch (e) {
					document.body.innerHTML = '<h2>Service is temporary unavailable. Try again later.</h2>';
	        console.log(e);
				}

				if(res && res.status) location.reload();
				else {
					loading.style.display = "none";
					page.popupWrapper.style.display = "none";
					//here should be also an error message for user
				}
			};

		};

		loginLink && (loginLink.onclick = function(){
			page.renderPopup(container);
		});

	}());

	//registration form
	(function(){

		var registerLink = document.getElementById('register-link');
		// var wrapper = document.getElementById('popup-form-wrapper');
		var container = document.getElementById('reg-form-container');
		var form = document.querySelector('#reg-form-container > form');
		var submit = document.getElementById('reg-submit');

		var login = document.querySelector('input[name="regname"]');
		var pass = document.querySelector('input[name="regpass"]');
		var passConfirm = document.querySelector('input[name="regpass1"]');

		//verify
		login.oninput = function(){
		 	if(this.value.match(/^[a-zA-Z0-9\_\.\@\$\']{3,20}$/)) {
				this.style.borderColor = "#0F0";
			} else {
				this.style.borderColor = "#F00";
			}
		};

		pass.oninput = passConfirm.oninput = function(){
			console.log(this.value);
			if(this.value.match(/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*/)) {
				this.style.borderColor = "#0F0";
			} else {
				this.style.borderColor = "#F00";
			}
		};

		submit.onclick = function() {
			if(pass.value === passConfirm.value) {
				container.style.display = 'none';
				page.popupWrapper.style.display = 'none';
				var url = 'modules/registrator.php';
				var postData = "username=" + login.value +	"&password=" + pass.value;

				var ajax = new XMLHttpRequest();
				ajax.open('POST', url);

				ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				ajax.send(postData);

			} else {
				alert('Passwords are not the same!');
			}
		};

		registerLink && (registerLink.onclick = function(){
			page.renderPopup(container);
		});

	}());

	//logout
	(function(){
	    var logout = document.getElementById('logout');
	  	logout && (logout.onclick = page.closeSession);
	  }());

};


window.onload = main;
/////
}());
