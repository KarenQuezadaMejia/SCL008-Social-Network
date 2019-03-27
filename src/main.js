// llamado a la inicialización de la ruta  e inicializamos firebase

import {initRouter} from './route.js';

const init =()=>{
    initRouter();
}

window.addEventListener('load',init);