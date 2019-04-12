import {checkPost} from '../js/validation.js'

//Función que pasa la data del post a firestore  
export const newPost=(userId,title,author,rate,opinion) =>{
    if(checkPost(title,author)){  
     var db = firebase.firestore(); 
     db.collection('posts').add({     //add sirve para que generé un id automático
       userId: userId,
       title: title,
       author: author,
       rate: rate,
       opinion: opinion 
       //date: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(refDoc =>{
        console.log(`Id del post => ${refDoc.id}`)
    }).catch (error =>{
        console.error(`Error creando el post => ${error}`)
    })
}
}
