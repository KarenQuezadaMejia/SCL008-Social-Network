
# Books Lovers


***

## Contexto

Este trabajo se desarrolla para el Bootcamp de Laboratoria. Desafío Social-Network.

Es un aplicación que esta dirigida principalmente a amantes de los libros y la lectura en general, para ponerse en contacto con personas con las mismas fascinación por leer, un espacio donde poder compartir opiniones de lecturas, titulos y autores con el objetivo de intercambiar ademas de opiniones libros físicos y digitales.

De esta manera les brindamos una herramienta para conocer lectores y por que no crear circulos para interactuar y amistades. Por ejemplo: Si un usuario ya leyo un libro y publica un comentario positivo del texto, y a otro usuario le interesa pueden intercambiar según sus gustos de lectura.


## Equipo
 Para este proyecto se trabajo en trio, en nuestro caso, se tomo una de las ideas propuestas por una de las integrantes que tiene en casa varios libros que ya leyó y no sabe que hacer con ellos. Entonces se le ocurrio esta idea maravillosa.


## Herramientas utilizadas:

* Javascript
* Firebase
* Git Hub


## Ideas de Diseño:


* Para definir el diseño de nuestra Red Social comenzamos a revisar la interfaz de usuario de distintas redes sociales como Facebook, Twitter Instagram, además de redes sociales con tematicas parecidas a la idea.

### Encuesta
Se realizó una encuesta por internet donde participaron muchas personas, aficionados a la lectura y otros no tanto, con el fin de indagar acerca de lo que les interesaria ver en una red social para lectores.

Se les realizaron preguntas como:
1.- ¿Qué información es relevante conocer para ti de un libro? 
2.- ¿Para qué necesitarías esta información? (cuándo, cómo, por qué).

Debido a que nos dimos cuenta que el  principal problema de los lectores es la acumulación de libros, con los que no saben luego que hacer. Nos resultó mas evidente la necesidad de crear esta red social, a la que decidimos llamar en esta fase "Books Lovers".


### Historias de usuario

Historia Nº 1
Yo como usuario quiero poder ingresar  mediante mi cuenta gmail  o  crear con otro mail una cuenta de usuario para ingresar a la red social de libros.

Criterios de  aceptación:

* El usuario puede ingresar con su cuenta gmail o crear una cuenta con un correo electrónico y clave.
* Que la aplicación envie un mensaje de error si el correo no es valido.
* Que el usuario y contraseña pueden quedar guardados para no ingresarlos cada vez que quiera ingresar a la red social.
* Que la contraseña contenga un mínimo de 6 caracteres.
* Que exista un botón para ingresar sesión con cuenta de gmail.
* Que tenga la opción de crear una cuenta con un correo y contraseña.

Definición de terminado:
* Realizamos flujo y prototipo de baja fidelidad para esta pantalla.
* Realizamos prototipo de alta definición de acuerdo al flujo de esta pantalla.
* Debería existir en la vista de login dos botones uno para iniciar sesión y otro iniciar sesión con gmail. O en su defecto un link para crear cuenta en caso de no tenerla.
* Al apretar los botones debería aparecer un formulario para ingresar mail y contraseña , ya sea de gmail u otro respectivamente.
* Utilizamos SPA y mobile first.
* Utilizamos Flexbox y mediaQuery.
* Se hace el deploy para testear que los tamaños sean acordes a los distintos dispositivos.
* El código tiene un code review de compañera de otro equipo.
* El código tiene y pasa los test unitarios .
* Realizamos pruebas de usabilidad con 3 usuarios.
* Incorporamos feedback de los usuarios.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).
* Debe estar conectado a firebase.


Historia Nº 2
Yo como usuario registrado quiero poder ingresar a mi cuenta de la red social de libros.

Criterios de  aceptación:

* El usuario puede ingresar con su cuenta gmail o crear una cuenta con un correo electrónico y clave.
* Que la aplicación envie un mensaje de error si el correo no es valido.
* Que el usuario y contraseña pueden quedar guardados para no ingresarlos cada vez que quiera ingresar a la red social.
* Que la contraseña contenga un mínimo de 6 caracteres.
* Que exista un botón para ingresar sesión con cuenta de gmail.
* Que tenga la opción de crear una cuenta con un correo y contraseña.

Definición de terminado:

* Realizamos flujo y prototipo de baja fidelidad para esta pantalla.
* Realizamos prototipo de alta definición de acuerdo al flujo de esta pantalla.
* Al apretar el botón de iniciar sesión debería desplegar un formulario donde se ingrese el usuario y contraseña.
* Al apretar los botones debería aparecer un formulario para ingresar mail y contraseña , ya sea de gmail u otro respectivamente.
* Utilizamos SPA y mobile first.
* Utilizamos Flexbox y mediaQuery.
* Se generó deploy para testear los diferentes tamaños de dispositivos.
* El código tiene un code review de compañera de otro equipo.
* El código tiene y pasa los test unitarios .
* Realizamos pruebas de usabilidad con 3 usuarios.
* Incorporamos feedback de los usuarios.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).
* Debe estar conectado a firebase.



Historia Nº 3
Yo como usuario quiero realizar publicaciones en la red social de libros.

Criterios de  aceptación:

* Que exista un botón para que al hacer click el usuario pueda publicar sus posts.
* Que el usuario pueda ver sus publicaciones en  pantalla en el sitio predeterminado para esto.
* Si el usuario presiona el botón publicar y la casilla está vacía debe de aparecer un mensaje de error.
* Las publicaciones deben de tener una cantidad máxima de caracteres (300 caracteres).

Definición de terminado:

* Que exista la opción donde el usuario haga click y se suban los posts que desee.
* Utilizamos SPA y mobile first.
* Existe un input en la pantalla que permite al usuario escribir una publicación, así como un botón 'publicar' que al darle click, publica el post.
* Se generó deploy para testear los diferentes tamaños de dispositivos.
* El código tiene un code review de compañera de otro equipo.
* El código tiene y pasa los test unitarios .
* Realizamos pruebas de usabilidad con 3 usuarios.
* Incorporamos feedback de los usuarios.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).
* Debe estar conectado a firebase.


Historia Nº 4
Yo como usuario quiero poder modificar una publicación que realicé.

Criterios de  aceptación:

* El usuario puede ver sus publicaciones realizadas.
* Las publicaciones realizadas por el usuario deben de tener la opción de editar.
* El usuario presionando el boton editar, puede modificar cualquier publicación realizada.
* En el momento de presionar el botón guardar se debe mostrar el post actualizado.

Definición de terminado:

* Realizamos flujo y prototipo de baja fidelidad para esta pantalla.
* Realizamos prototipo de alta definición de acuerdo al flujo de esta pantalla.
* Debería existir la opción de 'editar' que al presionarse muestre la publicación en un input para poder modificarse. También debería existir un botón de 'Guardar' para que la publicación modificada se guarde.
* Utilizamos SPA y mobile first.
* Utilizamos flexBox y mediaQuery
* Se generó deploy para testear los diferentes tamaños de dispositivos.
* El código tiene un code review de compañera de otro equipo.
* El código tiene y pasa los test unitarios .
* Realizamos pruebas de usabilidad con 3 usuarios.
* Incorporamos feedback de los usuarios.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

 Historia Nº 5
Yo como usuario quiero poder eliminar publicaciones que realicé.

Criterios de  aceptación:

* En el momento que el usuario apriete el botón eliminar, se debe mostrar una alerta de confirmación.
* Si el usuario da aceptar a la alerta de confirmación, el post se debe eliminar.
* En el momento de la confirmación en la página no debe de aparecer la publicación que se elimino.
* El usuario solo puede eliminar sus publicaciones.

Definición de terminado:

* Que exista una opción que pueda eliminar la publicación que el usuario desee.
* Realizamos flujo y prototipo de baja fidelidad para esta pantalla
* Utilizamos SPA y mobile first.
* Utilizamos flexBox y mediaQuery
* Se generó deploy para testear los diferentes tamaños de dispositivos.
* El código tiene un code review de compañera de otro equipo.
* El código tiene y pasa los test unitarios .
* Realizamos pruebas de usabilidad con 3 usuarios.
* Incorporamos feedback de los usuarios.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).
 
Historia Nº 6
Yo como usuario quiero dar y recibir likes en publicaciones y ver cuantos recibo.

Criterios de  aceptación:

* El usuario puede dar me gusta a un libro que ve publicado por otro usuario.
* El usuario puede recibir likes de otros usuarios en sus publicaciones.
* El usuario puede visualizar cuántos likes tiene su publicación.
* El usuario puede quitar el like de una publicación.

Definición de terminado:

* Debe existir la opción 'me gusta' o agregar un corazón en la parte de abajo de las publicaciones y poder visualizar cuantos likes tienen las publicaciones.
* Realizamos flujo y prototipo de baja fidelidad para esta pantalla
* Utilizamos SPA y mobile first.
* Utilizamos flexBox y mediaQuery
* Se generó deploy para testear los diferentes tamaños de dispositivos.
* El código tiene un code review de compañera de otro equipo.
* El código tiene y pasa los test unitarios .
* Realizamos pruebas de usabilidad con 3 usuarios.
* Incorporamos feedback de los usuarios.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).


 ### FASE 1: - Prototipado baja fidelidad

 El paso siguiente corresponde al prototipado de baja definición, es decir la idea iniacial de como queremos que se vea nuestra aplicación. Aquí comenzamos iterando sobre cómo debería ser, y qué elementos debería contener para llegar al producto final.

Concretando ideas llegamos a un prototipo inicial de 4 pantallas.La primera es donde el usuario debe iniciar sesión, que puede ser con una cuenta creada desde la aplicación o mediante su cuenta de Gmail, en caso que no este registrado, hay un link que dice "registrate aquí" y se abre otra pantalla donde puede ingresar sus datos y crear su cuenta con clave.
Una vez registrado o iniciado sesión se abre otra pantalla que es la página principal o muro de nuestra red social, donde se pueden ver las publicaciones de otros usuarios. Los post se pueden comentar y dar "likes" y el lector que subió su post puede eliminar y editarlo, lo mismo para los comentarios.

En esta imagen se muestra el inicio de nuestra aplicación.

![Sketch](img\.jpg)
  
## Planificación
Realizamos una planificación al comienzo del proyecto con tableros en la pizarra. Utilizamos Trello para digitalizar nuestra planificación. 

[Selecciona aqui](https://trello.com/b/TcVVuZ6t/red-social-book-lovers)


#### FASE 3 Prototipo de alta fidelidad
Prototipo en Figma
[Selecciona aqui](https://www.figma.com/file/NgitjUhqvmZXmFgL9oQgtrkX/Social-Network?node-id=2%3A7)


#### Testeos de usabilidad

En esta sección estan incluidas algunas de las entrevistas realizadas durante el testeo de nuestra aplicación.


[Entrevista a ](https://www.useloom.com/share/

 Según .... debiamos ...

 


#### FASE 5 El Diseño final
La meta de la aplicación web es un producto que...

La versión final esta disponible en versión demo.
[Ver aqui](https://link del demo)

Aspectos a mejorar:
1. ...