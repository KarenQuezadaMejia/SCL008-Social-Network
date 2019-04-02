//Manejo del DOM
/*
2.Crear la plantilla estructural del html que representa al login con Gmail.
Tenemos importar la función que creamos en en auth.js 
*/

//. entrar a una carpeta, .. retroceder en una carpeta
import {loginGmail} from '../js/auth.js';
export const templateLoginGmail =() =>{
    const containerLogin=document.createElement('div')          //esta despues se le pasa al html
    const contentLogin= ` <h2>Ingresa directamente con:</h2>
                          <button id="google-login" class="fa fa-google"></button>`   //contenido del login
    //pasar el contenido al div
    containerLogin.innerHTML = contentLogin;

    const btn = containerLogin.querySelector('#google-login');  //querySelector busca donde yo le indique, puede buscar en hijos
    btn.addEventListener('click',()=>{
    console.log(loginGoogle);
})

return containerLogin;
}