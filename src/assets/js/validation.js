
export const checkUser = (email,password) => {
	if (email === '' || password === ''){
		return false;
	} 
	    return true;

}
export const checkNewUser = (name, lastname, email, password, confirmPassword) => {
	if (name === '' || lastname === '' || email === '' || password === '' || confirmPassword === ''){

/* función que valida que los campos del formulario de registros de  nuevo usuario no esten vacios, que la clave no sea menor a 6 caracteres, y ambas claves sean iguales*/
export const checkNewUser = (name, lastname, email, password, confirmPassword) => {
	if (name === "" || lastname === "" || email === "" || password === "" || confirmPassword === ""
		|| password.lengt < 6 || confirmPassword != password) {

		return false;
	}

	return true;

}

/* función que valida que el correo tenga un '@' */
export const checkEmail = (email) => {
	let newModel = /\S+@\S+\.\S+/;
	return newModel.test(email);
}



/* validacion de funcion iniciar sesión de usuario ya registrado*/
export const checkInitSession = (userEmail,userPassword) => {
	if (userEmail === "" || userPassword === "" || userPassword.lengt < 6 || !checkEmail(userEmail)) {
		return false;
	} else {
		return true;
	}
}

/* validación de correo electronico de iniciar sesión*/
export const checkEmailInitSesion = (userEmail) => {
	let newModel = /\S+@\S+\.\S+/;
	return newModel.test(userEmail);
}


