
export const templateProfile = () =>{
	//var user = firebase.auth().currentUser;
	//var name, email, photoUrl, uid, emailVerified;
	//document.getElementById('root').innerHTML=''
	const containerProfile=document.createElement('div')
	const contentProfile = `<div id= 'wall'>
  		                       <nav id="header">
  			                    <a href="">Logo</a>
  			                    <a href="">Perfil</a>
  			                    <a href="">Muro</a>
  			                    <a href="">Cerrar sesion</a>
     	                       </nav>
		                       <div id="content-user">
     	                         <div id="user-img">
     		                      <img src=""><p>foto</p>
     	                         </div>
		                         <div id="user-profile-name">
			                     <h3>Usuario</h3>
		                         </div>
		                       </div>
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

    containerProfile.innerHTML= contentProfile;
  
    return containerProfile;
}

