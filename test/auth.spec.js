//import { loginGoogle } from "../src/assets/js/auth";
//import { AssertionError } from "assert";
import { checkNewUser } from './../src/assets/js/validation.js';
//Función para iniciar sesión con google

describe('checkNewUser', () => {

    it('', () => {
        expect(checkNewUser()).toBe(false);
    });

    it('', () => {
        expect(checkNewUser()).toBe(false);
    });

describe('confirmPassword', () => {

        it('confirmPassword===password', () => {
            expect(confirmPassword(123456, 123456)).toBe(true);
        });
    
        it('confirmPassword !== password', () => {
            expect(confirmPassword(123456, 12345678)).toEqual(false);
        });
    
    });
});


   

 
