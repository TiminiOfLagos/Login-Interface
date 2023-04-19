let input = document.getElementById("password");

	
	function display(form) {
		if (form.username.value == "User") {
			if (form.password.value == "User") {
				location ="index1.html"
			} else {
				alert("Invalid Password")
			}
		} else {
			alert("Invalid Username")
		}
	}