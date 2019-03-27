
//Manejo del DOM
/*
2.Crear la plantilla estructural del html que representa al login.
Tenemos importar la función que creamos en en auth.js (logInGoogle)
*/

//. entrar a una carpeta, .. retroceder en una carpeta
import {loginGoogle} from '../js/auth.js';
//porque el archivo runInContext.js luego lo va a TransformStream
export const templateLogin =() =>{
    const containerLogin=document.createElement('div')          //esta despues se le pasa al html
    const contentLogin= `<p>Login con Google </p>
                         <button id='login'>Loguealo </button>`   //contenido del login


//pasar el contenido al div
containerLogin.innerHTML = contentLogin;

const btn = containerLogin.querySelector('#login');  //querySelector busca donde yo le indique, puede buscar en hijos
btn.addEventListener('click',()=>{
    console.log(loginGoogle);
})

return containerLogin;
}
