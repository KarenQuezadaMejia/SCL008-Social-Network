/*
2. Crear plantilla estructural de html que representa al login.
Tenemos que importar la función que creamos en el auth.j(createAccount)
*/



import{newAccount} from '../js/auth.js';

export const templateCreate =() =>{
    const containerCreate=document.createElement('div')          //esta despues se le pasa al html
    const contentCreate= `<h2>Si no tienes cuenta regístrate aquí</h2>
                          <input type="email" placeholder="Ingresa tu email" id="newuser-email">
                          <input type="password" placeholder="Ingresa tu contraseña" id="newuser-password">
                          <button id="create">crear cuenta</button>`  

//pasar el contenido al div
containerCreate.innerHTML = contentCreate;
const btn = containerCreate.querySelector('#create');   //querySelector busca donde yo le indique, puede buscar en hijos
btn.addEventListener('click',()=>{
    console.log(createAccount);
})

return containerCreate;
}

//exportar se utiliza en otro archivo
//importar lo estoy utilizando de otro archivo