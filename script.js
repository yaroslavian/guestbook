window.onload = function(){
	var form = {
					name: document.getElementById('name-field'),
					message: document.getElementById('message'),
					submit: document.getElementById('submit-button')

	}

	form.name.oninput = function(){

		if(/^[a-zA-Zа-яА-Я0-9 _\.]+$/.test(this.value) && this.value.length < 30) {
			this.style.borderColor = "#09F";
			form.submit.disabled = false;
		} else {
			this.style.borderColor = "red";
			form.submit.disabled = true;
		}
	};

	form.message.oninput = function(){
		var text = this.value;
		if(text.length > 100) this.value = text.slice(0, -1);
	};

};
