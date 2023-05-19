function checkPassword(){
	const password = document.getElementById("password").value;
	const confirmPassword = document.getElementById("confirm_password").value;

	if (password !== confirmPassword){
		document.getElementById("password-mismatch-message").style.display = "block";
	}
	else{
		document.getElementById("password-mismatch-message").style.display = "none";
	}
}

document.getElementById("password").addEventListener("keyup", checkPassword);
document.getElementById("confirm_password").addEventListener("keyup", checkPassword);