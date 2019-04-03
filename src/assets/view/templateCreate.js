/*
2. Crear plantilla estructural de html que representa al login.
Tenemos que importar la función que creamos, en el auth.j(createAccount)
*/



import{signUp} from '../js/auth.js';

export const templateCreate =() =>{
  
    const registrationContainer = document.createElement('div');
    const registrationTemplate = `<div class="signup-container" id="sign-up-box">
                                    <form>
                                    <h2>Regístrate</h2>  
                                    <input id="user-name" class="user-name" type="text" placeholder="Nombre">
                                    <input id="user-lastname" class="user-lastname" type="text" placeholder="Apellido">
                                    <input id="email" class="email" type="email" placeholder="Correo electrónico">
                                    <input id="password" class="password" type="password" placeholder="Contraseña">
                                    <button id="sign-up" class="sign-up-btn" type="button">Crear Cuenta</button>
                                    </form>
                                   </div>`;

 registrationContainer.innerHTML = registrationTemplate;

 const btnRegister = registrationContainer.querySelector('#sign-up');
 btnRegister.addEventListener('click', () => { 
    let name=registrationContainer.querySelector('#user-name').value;
    let lastname=registrationContainer.querySelector('#user-lastname').value;
    let email=registrationContainer.querySelector('#email').value;
    let password=registrationContainer.querySelector('#password').value;
  signUp(email,password);
 });
 
 return registrationContainer;
 };
 



//exportar se utiliza en otro archivo
//importar lo estoy utilizando de otro archivo