import { sumar, multiplicar, restar, dividir } from '../maths.js';

describe('Calculos matematicos', () =>{
    test('Prueba de sumas', ()=> {
        expect(sumar(1,1)).toBe(3);
    });
    test('Multiplicar ', () => {
        expect(multiplicar(2,2)).toBe(4);
    });
    describe('Restar', () => {
        test('Prueba de restar', () => {
          expect(restar(2,1)).toBe(1);
        });
      });
    describe('Dividir', () => {
        test('Prueba de dividir', () => {
            expect(dividir(10,2)).toBe(5);
        });
    });
});