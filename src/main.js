
// llamado a la inicialización de la ruta  e inicializamos firebase

firebase.initializeApp(config);

import {initRouter} from './route.js';

const init =()=>{
    initRouter();
}

window.addEventListener('load',init);
