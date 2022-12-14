import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('test for 09-promesas', () => { 
    test('getHeroByIdAsyc debe retornar un héroe ',(done)=>{
        const id = 1;
        getHeroeByIdAsync(id).then(hero=>{
            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });
            done();
        })
    });

    test('getHeroByIdAsyc debe retornar error si el id no existe ',(done)=>{
        const id = 100;
        getHeroeByIdAsync(id).catch(error=>{
           expect(error).toBe(`No se pudo encontrar el héroe`);
            done();
        })
    });
})