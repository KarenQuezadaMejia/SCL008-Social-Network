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
