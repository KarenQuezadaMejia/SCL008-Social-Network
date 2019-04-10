
/* función que valida que los campos del formulario de  iniciar sesión de usuario ya registrado*/
export const checkInitSession = (userEmail,userPassword) => {
	if (userEmail === "" || userPassword === "" || userPassword.length < 6 || !checkEmail(userEmail)) {
		return false;
	} else {
		return true;
	}
}
/* función que valida que el correo tenga un '@' en cualquier inicio de sesión*/
export const checkEmail = (email) => {
	let newModel = /\S+@\S+\.\S+/;
	return newModel.test(email);
}
	

/* función que valida que los campos del formulario de registros de  nuevo usuario no esten vacios, que la clave no sea menor a 6 caracteres, y ambas claves sean iguales*/
export const checkNewUser = (name, lastname, email, password, confirmPassword) => {
	if (name === "" || lastname === "" || email === "" || password === "" || confirmPassword === ""
<<<<<<< HEAD
		|| password.length < 6 || password != confirmPassword ||!checkEmail(email)) {
=======
		|| password.length< 6 || password != confirmPassword ||!checkEmail(email)) {
>>>>>>> 0ad013f61e9ca3f81ded0fd6065c39300a04cf7b

		return false;
	}

	return true;

}

export const checkPost = (title,author) => {
	if (title === '' || author === ''){
		return false;
	} 
	    return true;

}



