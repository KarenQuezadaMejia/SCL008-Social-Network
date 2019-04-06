/*
2. Crear plantilla estructural de html que representa al login.
Tenemos que importar la función que creamos, en el auth.j(createAccount)
*/



import{newUser} from '../js/auth.js';

export const templateCreate =() =>{
  
    const registrationContainer = document.createElement('div');
    const registrationTemplate = `<div class="signup-container" id="sign-up-box">
    								<img src='./assets/img/logoSN.png' alt='logo' class='logo-img'>
                                    <form class="create">
                                    <h2>Regístrate</h2>  
                                    <input id="user-name" class="user-name" type="text" placeholder="Nombre">
                                    <p id="alert-name"></p>
                                    <input id="user-lastname" class="user-lastname" type="text" placeholder="Apellido">
                                     <p id="alert-lastname"></p>
                                    <input id="email" class="email" type="email" placeholder="Correo electrónico">
                                     <p id="alert-email"></p>
                                    <input id="password" class="password" type="password" placeholder="Contraseña">
                                     <p id="alert-password"></p>
                                    <input id="confirm-password" class="password" type="password" placeholder="Confirma tu contraseña">
                                     <p id="alert-confirmpass"></p>
                                    <button id='sign-up' class="sign-up-btn" type="button">Crear Cuenta</button>
                                    </form>
                                   </div>`;

 registrationContainer.innerHTML = registrationTemplate;

 const btnRegister = registrationContainer.querySelector('#sign-up');
 btnRegister.addEventListener('click', () => { 
    let name=registrationContainer.querySelector('#user-name').value;
    let lastname=registrationContainer.querySelector('#user-lastname').value;
    let email=registrationContainer.querySelector('#email').value;
    let password=registrationContainer.querySelector('#password').value;
    let confirmPassword=registrationContainer.querySelector('#confirm-password').value;
    //esta variable llama a una función que se encuentra en auth para después conectarla con firebase
    newUser(name, lastname, email, password, confirmPassword);
 

 if(name ===""){
 	document.getElementById('alert-name').innerHTML = 'Debes ingresar tu nombre'
 } else{
 	document.getElementById('alert-name').innerHTML = ''
 }

 if(lastname ===""){
 	document.getElementById('alert-lastname').innerHTML = 'Debes ingresar tu apellido'
 } else{
 	document.getElementById('alert-lastname').innerHTML = ''
 }

 if(email ===""){
 	document.getElementById('alert-email').innerHTML = 'Debes ingresar tu correo'
 } else{
 	document.getElementById('alert-email').innerHTML = ''
 }

 if(password ===""){
 	document.getElementById('alert-password').innerHTML = 'Debes ingresar una contraseña con un mínimo de 6 caracteres'
 } else{
 	document.getElementById('alert-password').innerHTML = ''
 }

 if(confirmPassword ===""){
 	document.getElementById('alert-confirmpass').innerHTML = 'Debes confirmar tu contraseña'
 } else{
 	document.getElementById('alert-confirmpass').innerHTML = ''
 }

 if(confirmPassword !== password){
 	document.getElementById('alert-confirmpass').innerHTML = 'Tus contraseñas deben de ser iguales'
 } else{
 	document.getElementById('alert-confirmpass').innerHTML = ''
 }
/* if (createNewAccount== true) {
 } else {
 	console.log(createNewAccount);
}*/
})

 return registrationContainer;
 };
 



//exportar se utiliza en otro archivo
//importar lo estoy utilizando de otro archivo
