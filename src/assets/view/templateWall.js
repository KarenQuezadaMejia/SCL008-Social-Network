import {newPost} from '../js/posts.js';

export const templateWall = () =>{

	const user = firebase.auth().currentUser;

	if(user == null){
		alert('Para crear el post debes iniciar sesión')
		return
	}

	const containerWall=document.createElement('div')
	const contentWall = `
	                  <header id='header-container'>
	                   <figure class='header-avatar'>
		                   <img id='avatar' src='./assets/img/avatar.png' alt='avatar'>
	                   </figure>  
                     <div id='menu-container'>
		                    <nav>
		                     <div class='menu-bar'>
			                     <a href='#/profile'>Pefil</a>
			                     <a href='#/wall'>Muro</a>
													 <a href='#/'>Cerrar sesión</a>
												 </div>
		                    </nav>			
										</div>
		                </header>
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
		 let rate = 5; /*Pendiente conectar el sistema de estrellas*/
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
return containerWall;
};