/* creación template profile
import{newUser} from '../js/auth.js';
import {
  signInGmail,
  signInSession,
  } from '../js/auth.js';
import { templateCreate } from './templateCreate.js';*/
	//var user = firebase.auth().currentUser;
	//var name, email, photoUrl, uid, emailVerified;
	//document.getElementById('root').innerHTML=''

import {logout} from './../js/auth.js';


export const templateProfile=() =>{
	const containerProfile=document.createElement('div')
	const contentProfile = `<header id='header-container'>
		<div id='menu-container'>
		<nav>
			<div class='menu-bar'>
				<a href='#/profile'>Pefil</a>
				<a href='#/wall'>Muro</a>
				<button onclick="window.location.href='#/sign-in'" id='logOut'>Salir</button>
			</div>
		</nav>
		</div>
 		</header>
		<img id='avatar' src='./assets/img/avatar.png' alt='avatar'>


				<div id="content-publish">
					<h4>Realiza publicaciones de los libros que tienes disponibles
para prestamo</h4>
				<p>Titulo: </p>
<input type="text" name="title" placeholder="Ingresa el Titulo 
del Libro">
				<p>Autor: </p>
				<span><input type="text" name="title" placeholder="Ingresa el autor"></span>
				<p>Calificación</p>
				<p>Opinión Personal</p>
<textarea id="opinion" placeholder="Ingresa tu opinión del 
Libro"></textarea>
				</div>

				<button>Publicar</button>
				 </div>`

    containerProfile.innerHTML= contentProfile;
  
    return containerProfile;
}
