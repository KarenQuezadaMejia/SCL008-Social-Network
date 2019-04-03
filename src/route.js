
import {templateCreate} from './assets/view/templateCreate.js';
import {templateLoginSession} from './assets/view/templateLoginSession.js';

//  crear una función que reciba el hash (#) y según el match retorne otra función que va a imprimir el template en el html

const changeRouter = (hash) => {
  if (hash === '#/sign-in') {
    return showTemplate(hash);
  }
    if(hash==='#/new-user-registration'){
        return showTemplate(hash);
    }
    if(hash==='#/create'){
        return showTemplate(hash);
    }


  }


//Imprimirá el template en el html
const showTemplate =(hash)=>{
    const router = hash.substring(2);
    let containerRoot=document.getElementById('root');
    containerRoot.innerHTML="";
    //hacemos el match del hash utilizado y el template que quiero mostrar

    switch(router){
        case 'sign-in':
        containerRoot.appendChild(templateLogin());
        break;
        case 'new-user-registration':
        containerRoot.appendChild(templateCreate());
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
  let containerRoot=document.getElementById('root');
  containerRoot.appendChild(templateLoginSession());

  // reconoce un cambio en el hash y le pasa ese nuevo hash a changeRouter
  if ('onhashchange' in window) {
    window.onhashchange = () => {
      changeRouter(window.location.hash);
    }
  }
}


