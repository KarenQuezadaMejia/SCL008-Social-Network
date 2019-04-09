import {loginUser, login, eyes } from './../js/auth.js';
export const templatePostWall = (user) => {
    console.log(user);
    console.log(firebase.auth().currentUser);
    const containerPostWall = document.createElement('div');// se crea div para mostar la información 
    const contentPost = ` 
    <h3></h3>
    <textarea cols="60" rows="30"></textarea>
    <button id="muro">Publicar</button>
    `
    containerPostWall.innerHTML = contentPost;
    const btn = containerPostWall.querySelector('#muro');
    btn.addEventListener('click', () => {
        console.log(acount());
    })
    eyes();
    return containerPostWall;