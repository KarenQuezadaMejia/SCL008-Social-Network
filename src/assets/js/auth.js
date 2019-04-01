
//autentificación firebase
//Initializd firebase
export const config ={
    apiKey: "AIzaSyD0i2UCeP2yUbDjNQhXyp7rXROjgwqaZd0",
    authDomain: "social-network-booklover.firebaseapp.com",
    databaseURL: "https://social-network-booklover.firebaseio.com",
    projectId: "social-network-booklover",
    storageBucket: "social-network-booklover.appspot.com",
    messagingSenderId: "189372927325"
  };

/* 1.Crearemos dos funciones que simularán el login con google y
con la creación de cuenta. */

export const  loginGoogle=()=> {
    return 'Login con Google Ok';

}

export const createAccount = ()=>{
    return 'Cuenta creada OK';
}


export const loginSession=()=>{
    return 'Iniciar sesión'
}

