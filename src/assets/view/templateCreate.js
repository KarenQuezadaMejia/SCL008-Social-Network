
/*
2. Crear plantilla estructural de html que representa al login.
Tenemos que importar la función que creamos en el auth.j(createAccount)
*/



import{createAccount} from '../js/auth.js';

export const templateCreate =() =>{
    const containerCreate=document.createElement('div')          //esta despues se le pasa al html
    const contentCreate= `<p>Crear cuenta </p>
                          <button id='create'>Crear cuenta </button>`   //contenido del login


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
