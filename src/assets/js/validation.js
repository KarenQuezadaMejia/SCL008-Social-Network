

export checkNewUser = (name, lastname, email, password, confirmPassword) => {
	If (name === "" || lastname === "" || email === "" || password === "" || confirmPassword === ""){
		return false
	} else {
		return true
	}
}