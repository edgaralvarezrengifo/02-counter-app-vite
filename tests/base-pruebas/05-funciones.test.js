import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('test for 05-funciones', () => { 
    test('getUser debe retornar un objeto',()=>{
        const testUser = {
            uid: 'ABC123',
        username: 'El_Papi1502'
        }
        const user = getUser();
        expect(testUser).toEqual(user);
    });
    test('getUsuarioActivo debe retornar un objeto', ()=>{
        const nombre = 'Edgar';
        const user = getUsuarioActivo(nombre);
        expect(user.username).toBe(nombre);
    })



})    