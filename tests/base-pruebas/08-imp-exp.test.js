import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";


describe('test for 08-imp-exp', () => { 
    test('debe retornar un heroe ',()=>{
        const id =1;
        const heroe = getHeroeById(id);
        expect(heroe).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
    });

    test('debe retornar undefined si el id no existe ',()=>{
        const id =100;
        const heroe = getHeroeById(id);
        expect(heroe).toBeFalsy();
    });

    test('debe evaluar la cantidad de elementos del arreglo',()=>{
        const owner ='DC';
        const heroes = getHeroesByOwner(owner);
        expect(heroes.length).toBe(3);
    });
    
})