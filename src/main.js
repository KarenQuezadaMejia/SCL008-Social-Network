// llamado a la inicialización de la ruta  e inicializamos firebase


import {initRouter} from './route.js';

const config ={
  apiKey: "AIzaSyD0i2UCeP2yUbDjNQhXyp7rXROjgwqaZd0",
  authDomain: "social-network-booklover.firebaseapp.com",
  databaseURL: "https://social-network-booklover.firebaseio.com",
  projectId: "social-network-booklover",
  storageBucket: "social-network-booklover.appspot.com",
  messagingSenderId: "189372927325"
};

firebase.initializeApp(config);

const init =()=>{
    
      initRouter();
}
window.addEventListener('load',init);

