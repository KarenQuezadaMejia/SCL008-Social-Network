

export const checkNewUser = (name, lastname, email, password, confirmPassword) => {
	if (name === "" || lastname === "" || email === "" || password === "" || confirmPassword === ""){
		return false;
	} 
	
	return true;

}




