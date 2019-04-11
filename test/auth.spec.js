import { checkEmail,checkNewUser,checkInitSession,checkPost}
from './../src/assets/js/validation.js'


//Testeo de las funciones que chequean crear cuenta()
describe('checkNewUser',()=>{
    it('deberia retornar false, si el usuario no ingresa correo y contraseña',()=>{
        expect(checkNewUser ('Betsi','Salas','','')).toBe(false);        
    })
    it('deberia retornar true, si el usuario ingresa todos los campos',()=>{
        expect(checkNewUser ('Betsi','Salas','betsi.salas12@gmail.com','mypassword','mypassword'))
        .toBe(true);
    })
    it('deberia retornar false, si el usuario no completa el formulario',()=>{
        expect(checkNewUser ('','','','')).toBe(false);
    })
    it('debería retornar falso si las contraseñas son diferentes',()=>{
        expect(checkNewUser('Betsi','Salas','betsi.salas12@gmail.com','mypassword','mypassword1')).toBe(false);
    })
    it('debería retornar verdadero si la contraseña tiene 6 o más caracteres',()=>{
       expect(checkNewUser('Betsi','Salas','betsi.salas12@gmail.com','mypassword','mypassword')).toBe(true);
    })
})



describe('checkEmail',()=>{
    it('deberia retornar false, si el correo es invalido',()=>{
        expect( checkEmail('Correoincorrecto')).toBe(false);
    })
    it('deberia retornar true, si el correo es valido',()=>{
        expect( checkEmail('CorreoValido@gmail.com')).toBe(true);
    })
})

describe('checkInitSession',()=>{
    it('deberia retornar true, si el usuario ingresa correo y contraseña validos',()=>{
        expect(checkInitSession ('taffymayen@gmail.com','mypassword')).toBe(true);        
    })
    it('deberia retornar false, si el usuario no ingresa todos los campos',()=>{
        expect(checkInitSession ('taffymayen@gmail.com',''))
        .toBe(false);
    })
    it('deberia retornar false, si el usuario no completa ningún campo',()=>{
        expect(checkInitSession ('','')).toBe(false);
    })
    
    it('debería retornar verdadero si la contraseña tiene 6 o más caracteres',()=>{
       expect(checkInitSession('betsi.salas12@gmail.com','mypassword')).toBe(true);
    })
})

describe('checkPost',()=>{
    it('deberia retornar true, si el usuario ingresa su opinion',()=>{
        expect(checkPost ('Muy buen libro','mycoment')).toBe(true);
    })
    it('deberia retornar false, si el usuario no ingresa todos los campos',()=>{
        expect(checkPost ('La Divina Comedia',''))
        .toBe(false);
    })
    it('deberia retornar false, si el usuario no completa ningún campo',()=>{
        expect(checkPost ('','')).toBe(false);
    })
 })
 


 
