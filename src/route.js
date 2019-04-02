
import {templateLoginGmail} from './assets/view/templateLogin.js';
import {templateCreate} from './assets/view/templateCreate.js';
/*
  crear una función que reciba el hash (#) y según el match retorne otra función que va a imprimir el template en el html
*/

const changeRouter = (hash) => {
  if (hash === '#/login') {
    return showTemplate(hash);
  }
    if(hash==='#/loginSession'){
        return showTemplate(hash);
    }
    if(hash==='#/create'){
        return showTemplate(hash);
    }


  }


//Imprimirá el template en el html
const showTemplate =(hash)=>{
    const router = hash.substring(2);
    let containerRoot=document.getElementById('login');
    containerRoot.innerHTML="";
    //hacemos el match del hash utilizado y el template que quiero mostrar

    switch(router){
        case 'login':
        containerRoot.appendChild(templateLogin());
        break;
        case 'create':
        containerRoot.appendChild(templateCreate());
        break;
        default:
        containerRoot.innerHTML= `<p>Página no encontrada</p>`
    }
   
}

// inicializar las rutas para que se ejecute changeRouter() y en su defecto showTemplate()

export const initRouter = () => {
  window.addEventListener('load', changeRouter(window.location.hash));

  // reconoce un cambio en el hash y le pasa ese nuevo hash a changeRouter
  if ('onhashchange' in window) {
    window.onhashchange = () => {
      changeRouter(window.location.hash);
    }
  }
}


