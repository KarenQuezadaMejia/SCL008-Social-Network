//Manejo del DOM
/*
2.Crear la plantilla estructural del html que representa al login.
Tenemos importar la función que creamos en en auth.js
*/
//. entrar a una carpeta, .. retroceder en una carpeta

import {
  signInGmail,
  signInSession,
  signUp} from '../js/auth.js';

export const templateLoginSession =() =>{
   const containerLoginSession=document.createElement('div')
   const contentLoginSession= `<element id='signin-container' class='signin-container'>
                                  <img src='./assets/img/logoSN.png' alt='logo' class='logo-img'>
                                  <element id='sign-in-box' class='container-login'>
                                     <form>
                                       <input id='email-user' class='email' type='email' placeholder='Ingresa tu correo'>
                                       <input id='password-user'class='password' type='password' placeholder='Ingresa tu contraseña'>
                                        <button id='sign-in' class='login-btn' type='button'>INICIAR SESIÓN</button>
                                     </form>
                                  </element>
                                  <element id='sign-in-boxgmail' class='container-gmail'>
                                  <h4>Ingresa directamente con:</h4>
                                  <button id='sign-in-gmail' class='fab fa-google' type='button'></button>
                                  </element>
                                  <element  class='container-new-user'>
                                  <h4 id='new-user-registration'>Si no tienes cuenta, registrate aquí</h4>
                                  </element>
                               </element>`
                                 
    containerLoginSession.innerHTML = contentLoginSession;
    const btn = containerLoginSession.querySelector('#sign-in');  //querySelector busca donde yo le indique, puede buscar en hijos
     btn.addEventListener('click',()=>{
      let email=containerLoginSession.querySelector('#email-user').value;
      let password=containerLoginSession.querySelector('#password-user').value;
    signInSession(email,password);
});

const btnGmail = containerLoginSession.querySelector('#sign-in-gmail');
btnGmail.addEventListener('click',signInGmail);

const btnRegister = containerLoginSession.querySelector('#new-user-registration');
  btnRegister.addEventListener('click', () => {
   changeHash('#/registration');
  });

return containerLoginSession;
};



                                
        