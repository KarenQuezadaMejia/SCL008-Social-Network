<<<<<<< HEAD
//Manejo del DOM
/*
2.Crear la plantilla estructural del html que representa al login.
Tenemos importar la función que creamos en en auth.js
*/
//. entrar a una carpeta, .. retroceder en una carpeta

import {loginSession} from '../js/auth.js';
//porque el archivo runInContext.js luego lo va a TransformStream
export const templateLoginSession =() =>{
    const containerLoginSession=document.createElement('div')          //esta despues se le pasa al html
    const contentLoginSession= `<form>
                                <input id="email" class="email" type="email" placeholder="Ingresa tu correo">
                                <input id="password" class="password" type="password" placeholder="Ingresa tu contraseña">
                                <button id="sign-in" class="login-btn" type="button">INICIAR SESIÓN</button>
                                </form>`   //contenido del login
=======
/*  En este archivo creamos todas las funciones referentes a la autentificación del usuario */

//Función para iniciar sesión con gmail
export const  loginGmail=()=> {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        let token = result.credential.accessToken;
        // The signed-in user info.
        let user = result.user;
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        // The email of the user's account used.
        let email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        let credential = error.credential;
        // ...
      }); 
>>>>>>> 33cde55eff302e12671f824abb9392d71dc579e0

}

//Función para registro de nuevo usuario
export const newAccount = (email, password)=>{
    let newEmail = document.getElementById('newuser-email').value;
    let newPassword = document.getElementById('newuser-password').value;
    console.log(email);
    console.log(password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
    // Handle Errors here.
        let errorCode =alert (error.code);
        let errorMessage = alert(error.message);
    // ...
  });
Contraer