const { checkSeatStatus, getRowNumber,book } = require('../homework');

describe('checkSeatStatus',()=>{
    //TEST ONE
    it('checkSeatStatus is a function', ()=>{
        expect(typeof checkSeatStatus).toBe('function');
    });
    //TEST TWO: La función checkSeatStatus debe recibir como primer parámetro un string,
    //de lo contrario debería arrojar un error del tipo TypeError con el texto First parameter is not a string
    it('Should throw a TypeError if first parameter is not a string', ()=>{
        expect(()=> checkSeatStatus(5)).toThrow(new TypeError('First parameter is not a string'));
    });
    //TEST THREE: Ahora queremos que el segundo parámetro de la función sea un número, 
    //de lo contrario debería arrojar un error del tipo TypeError con el texto Second parameter is not a number.
    it('Should throw a TypeError if second parameter is not a number',()=>{
        expect(()=> checkSeatStatus('A','2')).toThrow(new TypeError('Second parameter is not a number'));
    });
    //crear un test que, a partir de una letra que va a representar el número de fila y un número que va a ser la columna, 
    //deberá indicar si el asiento está libre o no (true o false). Mirando la data de arriba sabemos que por ejemplo en la fila 'A' 
    //la segunda columna está reservada pero la cuarta columna de la última fila no, podríamos crear dos tests uno para cada uno 
    //de estos casos. Ojo, recuerden que la cuarta columna en cuanto a índices de array sería el número 3 por ejemplo.
    it('should return true if the given seat defined by row and column is booked', ()=>{
        expect(checkSeatStatus('A',1)).toBe(true);
    });

    it('should return false if the given seat defined by row and column is not booked', ()=>{
        expect(checkSeatStatus('E',3)).toBe(false);
    });
});


//TEST FOUR: getRowNumber que nos va a permitir a partir de una letra devolver el número de fila asociado. 
//Por ejemplo la fila 'A' sería la posición 0, la fila 'C' sería la 2.

describe('getRowNumber', ()=>{
    it('should return 1 if the letter given is an A', ()=>{
        expect(getRowNumber('A')).toBe(0);
    });
    
    it('should return 2 if the letter given is an C', ()=>{
        expect(getRowNumber('C')).toBe(2);
     });
});

describe('book', ()=>{
    it('should return Seat in XX successfully booked if the seat is free',()=>{
        expect(checkSeatStatus('E',3)).toBe(false);
        expect(book('E',3)).toBe('Seat in E3 successfully booked');
        expect(checkSeatStatus('E',3)).toBe(true);
    });

    it('should return Seat in XX is already booked if the seat is booked',()=>{
        expect(book('A',1)).toBe('Seat in A1 is already booked');
    });
});
