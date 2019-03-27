/*
2. Crear plantilla estructural de html que representa al login.
Tenemos que importar la función que creamos en el auth.j(logInGoogle)
*/

//entrar a una carpetra, .. retroceder en una carpeta
import { loginGoogle } from './../js/auth.js';

export const templateLogin  = () => {
   //Creamos un div que contendrá la plantilla
   const containerLogin = document.createElement('div');
   const contentLogin = `<p>Login con Google </p>
                         <button id='login'> Loguealo </button>`
   //pasar el contenido al div
   containerLogin.innerHTML = contentLogin;

   const btn = containerLogin.querySelector('#login');

   btn.addEventListener('click', () => {
       console.log(loginGoogle());
   })
   return containerLogin;

}
