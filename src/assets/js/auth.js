/*  En este archivo creamos todas las funciones referentes a la autentificación del usuario */

import {checkNewUser} from '../js/validation.js'


//Función para iniciar sesión, usuario ya registrado

export const signInSession=(userEmail,userPassword)=>{
    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        
      });
     console.log(userEmail);
     console.log(userPassword);
    }

//Función para iniciar sesión con gmail
export const  signInGmail=()=> {
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
      return 'login con Google';
    }



//Función para registro de nuevo usuario
export const newUser = (name, lastname, email, password, confirmPassword) => {
    console.log(checkNewUser())
    if (checkNewUser (name, lastname, email, password, confirmPassword)){
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(){
            db.collection("users").add({
            name: user-name,
            lastname: user-lastname,
            email: email,
            password: password,

        })
            .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
        })

        
        .catch(function(error) {
            // Handle Errors here.
            let errorCode =alert (error.code);
            let errorMessage = alert(error.message);
            // ...
        }); 
    }
} 









