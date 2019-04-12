import {newPost} from '../js/posts.js';
import {logout,observer} from './../js/auth.js';



export const templateWall = () =>{

	const user = firebase.auth().currentUser;
	if(user == null){
		alert('Para crear el post debes iniciar sesión')
		return
	}
	
	observer();
	let profileName=firebase.auth().currentUser.name;
	if(firebase.auth().currentUser.displayName){	
		console.log("Está pasando por el if indefinido")
		profileName=firebase.auth().currentUser.displayName;
	}
	


	const containerWall=document.createElement('div')
	const contentWall = `
										<header id='header-container'>
										  <div id='menu-container'>
		                    <nav class='menu-bar'>
			                     <a href='#/profile'>Pefil</a>
			                     <a href='#/wall'>Muro</a>
								           <button onclick="window.location.href='#/sign-in'" id='logOut'>Salir</button>
										    </nav>	    
		                  </div>  
										</header>

										<figure class='avatar'>
											 <img src=''id='avatar' alt='avatar'> 
											 <p id='profile-name'>${profileName}</p>
	                   </figure>
		                <element id='content-publish'>
			                  <p>Titulo</p>
								        <input id='title' type='text' name='title' placeholder='Ingresa el Titulo 
												 del Libro'>
												 <p id="alert-title"></p>
			                  <p>Autor</p>
												<input id='author'type='text' name='title' placeholder='Ingresa el autor'>
												<p id="alert-author"></p>
												<p>Calificación</p>
												<div id='rate'class="ec-stars-wrapper">
	                          <a href="#" data-value="1" title="Vote 1 star">&#9733;</a>
	                          <a href="#" data-value="2" title="Vote 2 stars">&#9733;</a>
	                          <a href="#" data-value="3" title="Vote 3 stars">&#9733;</a>
	                          <a href="#" data-value="4" title="Vote 4 stars">&#9733;</a>
                          	<a href="#" data-value="5" title="Vote 5 stars">&#9733;</a>
                        </div>
			                  <p>Opinión Personal</p>
								        <textarea id='opinion' placeholder='Ingresa tu opinión del 
												 Libro'></textarea>
												 <button type='button' class='publish' id='btn-post'>Publicar</button>
										</element>
										<element id='interaction-box'>
										   <div class='interact-box'>
										    <label class='click-counter-likes' id='click-counter-likes'></label>
										    <img src='./assets/img/like.svg' alt='' id='like-btn' class='img-icon-post'>
									    </div> 
										<p>Comentarios:</p>
												<textarea id='comment' placeholder='Ingresa tu comentario'></textarea>
												<button type='button' class='publish' id='btn-comment'>Publicar</button>
										</element>
  	                     
  	                        `


		containerWall.innerHTML= contentWall;
		const btnPublish= containerWall.querySelector('#btn-post');  //querySelector busca donde yo le indique, puede buscar en hijos
    btnPublish.addEventListener('click',()=>{
     let title = containerWall.querySelector('#title').value
	   let author = containerWall.querySelector('#author').value
		 //let rate = containerWall.querySelector('#rate').value
		 let rate = 5;
		 let opinion = containerWall.querySelector('#opinion').value
		 let userid = firebase.auth().currentUser.displayName;
		 
		 if(title ===''){
			document.getElementById('alert-title').innerHTML = '*Olvidaste colocar el titulo'
		} else{
			document.getElementById('alert-title').innerHTML = ''
		}
	 
		if(author ===''){
			document.getElementById('alert-author').innerHTML = '*Olvidaste colocar el autor'
		} else{
			document.getElementById('alert-author').innerHTML = ''
		}

		newPost(userid,title,author,rate,opinion);

    
})
    const escape = containerWall.querySelector('#logOut');
    escape.addEventListener('click',() => {
    	logout()
    })

return containerWall;
};

export const Printpost=()=>{
	
}