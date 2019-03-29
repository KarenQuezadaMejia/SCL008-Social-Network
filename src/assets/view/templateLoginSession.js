//Manejo del DOM
/*
2.Crear la plantilla estructural del html que representa al login.
Tenemos importar la función que creamos en en auth.js (logInGoogle)
*/

//. entrar a una carpeta, .. retroceder en una carpeta
import {loginSession} from '../js/auth.js';
//porque el archivo runInContext.js luego lo va a TransformStream
export const templateLoginSession =() =>{
    const containerLoginSession=document.createElement('div')          //esta despues se le pasa al html
    const contentLoginSession= `<button id='login'>Iniciar sesión </button>`   //contenido del login


//pasar el contenido al div
containerLoginSession.innerHTML = contentLoginSession;

const btn = containerLoginSession.querySelector('#loginSession');  //querySelector busca donde yo le indique, puede buscar en hijos
btn.addEventListener('click',()=>{
    console.log(loginSession);
})

return containerLoginSession;
}
