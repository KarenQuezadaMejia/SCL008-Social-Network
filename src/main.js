// llamado a la inicialización de la ruta  e inicializamos firebase

firebase.initializeApp(config);

import {initRouter} from './route.js';

const init =()=>{
    const config ={
        apiKey: "AIzaSyD0i2UCeP2yUbDjNQhXyp7rXROjgwqaZd0",
        authDomain: "social-network-booklover.firebaseapp.com",
        databaseURL: "https://social-network-booklover.firebaseio.com",
        projectId: "social-network-booklover",
        storageBucket: "social-network-booklover.appspot.com",
        messagingSenderId: "189372927325"
      };

      firebase.initializeApp(config);
    
      initRouter();
}

window.onload=init();