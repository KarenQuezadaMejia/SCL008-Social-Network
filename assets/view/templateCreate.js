/*
2. Crear plantilla estructural de html que representa al login.
Tenemos que importar la función que creamos, en el auth.j(createAccount)
*/

import{newUser} from '../js/auth.js';
import { checkEmail } from '../js/validation.js';


export const templateCreate =() =>{
    const registrationContainer = document.createElement('div');
    const registrationTemplate = `<div class="signup-container" id="sign-up-box">
                                    <a href='#/sign-in'><img src='./assets/img/logoSN.png' alt='logo' class='logo-img'></a>
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
                                    <button id='sign-up' class="sign-up-btn" type="button" >Crear Cuenta</button>
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

      if(name ===""){
        document.getElementById('alert-name').innerHTML = '*Porfavor ingresa tu nombre'
      } else{
        document.getElementById('alert-name').innerHTML = ''
      }
     
      if(lastname ===""){
        document.getElementById('alert-lastname').innerHTML = '*Porfavor ingresa tu apellido'
      } else{
        document.getElementById('alert-lastname').innerHTML = ''
      }
     
      if(email ===""|| !checkEmail(email)){
        document.getElementById('alert-email').innerHTML = '*Porfavor ingresa un correo válido'
      } else{
        document.getElementById('alert-email').innerHTML = ''
      }
     
      if(password ==="" || password.length<6){
        document.getElementById('alert-password').innerHTML = '*Porfavor ingresa una contraseña con un mínimo de 6 caracteres'
      } else{
        document.getElementById('alert-password').innerHTML = ''
      }
     
      if(confirmPassword ==="" ){
        document.getElementById('alert-confirmpass').innerHTML = '*Porfavor confirma tu contraseña'
      } else{
        document.getElementById('alert-confirmpass').innerHTML = ''
      }
     
      if(confirmPassword !== password){
        document.getElementById('alert-confirmpass').innerHTML = '*Tus contraseñas no coinciden'
      } else{
        document.getElementById('alert-confirmpass').innerHTML = ''
      }

   
    //esta variable llama a una función que se encuentra en auth para después conectarla con firebase
    newUser(name, lastname, email, password, confirmPassword);

 

 
})
 return registrationContainer;
 
 };

 


//exportar se utiliza en otro archivo
//importar lo estoy utilizando de otro archivo
