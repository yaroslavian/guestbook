window.onload = function(){
	var form = {
					name: document.getElementById('name-field'),
					comment: document.getElementById('comment-field'),
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

	form.comment.oninput = function(){
		var text = this.value;

		if(text.length > 100) {
			console.log(text.length);

			this.value = text.slice(0, -1);
		}
	};

};
