
import {logout} from './../js/auth.js';

export const templateNav = `
<header id='header-container'>
     <figure class='header-avatar'>
       <img id='avatar' src='./assets/img/avatar.png' alt='avatar'>
     </figure>  
    <div id='menu-container'>
       <nav>
        <div class='menu-bar'>
          <a href='#/profile'>Pefil</a>
          <a href='#/wall'>Muro</a>
          <button onclick="window.location.href='#/sign-in" id='logOut'>Salir</button>
        </nav>
    </div>
        
</header>`
