/*
2. Crear plantilla estructural de html que representa al login.
Tenemos que importar la función que creamos en el auth.j(createAccount)
*/

import { createAccount } from './../js/auth.js';

export const templateCreate  = () => {
   //Creamos un div que contendrá la plantilla
   const containerCreate = document.createElement('div');
   const contentCreate = `<p>Crear Cuenta</p>
                         <button id='create'>Crear Cuenta </button>`
   //pasar el contenido al div
   containerCreate.innerHTML = contentCreate;

   const btn = containerCreate.querySelector('#create');

   btn.addEventListener('click', () => {
       console.log(createAccount());
   })
   return containerCreate;

}