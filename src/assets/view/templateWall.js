

export const templateWall = () =>{
	//const user = firebase.auth().currentUser;
	//const name, email, photoUrl, uid, emailVerified;
	//document.getElementById('root').innerHTML=''
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
		                    </nav>
                     </div>
		                </header>
							   <h4>Realiza publicaciones de los libros que tienes disponibles
							    para prestamo</h4>
		                       <div id="content-publish">
			                     <p>Titulo</p>
								 <input type="text" name="title" placeholder="Ingresa el Titulo 
								 del Libro">
			                     <p>Autor</p>
			                     <input type="text" name="title" placeholder="Ingresa el autor">
			                     <p>Calificación</p>
			                     <p>Opinión Personal</p>
								<textarea id="opinion" placeholder="Ingresa tu opinión del 
								Libro"></textarea>
		                       </div>

		                       <button>Publicar</button>
  	                        </div>`

    containerWall.innerHTML= contentWall;
  
    return containerWall;
}
