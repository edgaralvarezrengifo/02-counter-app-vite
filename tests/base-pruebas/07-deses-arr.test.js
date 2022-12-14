import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('test for 07-deses-obj', () => { 
    test('debe retornar un string y un número ',()=>{
        const[letters,numbers] = retornaArreglo()
        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');

        expect(letters).toEqual(expect.any(String));
    });
})