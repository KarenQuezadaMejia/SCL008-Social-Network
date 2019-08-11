// llamado a la inicialización de la ruta  e inicializamos firebase


import {initRouter} from './route.js';


const init =()=>{

const config ={
  apiKey: "AIzaSyBgTOpDArGZbxfm739AfzTTjD1kWyoNmWw",
  authDomain: "social-network-booklover-fe789.firebaseapp.com",
  databaseURL: "https://social-network-booklover-fe789.firebaseio.com",
  projectId: "social-network-booklover-fe789",
  storageBucket: "bookslover-6a942.appspot.com/",
  messagingSenderId:"374767223297",
};
    firebase.initializeApp(config);
      initRouter();
}
//var db = firebase.firestore();



window.addEventListener('load',init);

