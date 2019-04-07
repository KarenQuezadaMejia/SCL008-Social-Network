
export const checkUser = (email,password) => {
	if (email === '' || password === ''){
		return false;
	} 
	    return true;

}
export const checkNewUser = (name, lastname, email, password, confirmPassword) => {
	if (name === '' || lastname === '' || email === '' || password === '' || confirmPassword === ''){
		return false;
	} 
	
	return true;

}
