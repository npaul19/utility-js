const reduce = require('./reduce');

describe('reduce', () => {

    it('should return undefined when array is empty and accumulator is undefined', () => {
        expect(reduce([], (x,y)=>x+y)).toEqual(undefined);
    });

    it('should return accumulator when array is empty and accumulator iss defined', () => {
        expect(reduce([], (x,y)=>x+y, 10)).toEqual(10);
    });

    it('should use the first element of array as acccumulator if the later is undefined', () => {
        expect(reduce([1, 2], (x,y)=>x+y)).toEqual(3);
    });

    it('should return sum 13', () => {
        expect(reduce([1, 2], (x,y)=>x+y, 10)).toEqual(13);
    });

    it('should return concatenated string', () => {
        expect(reduce(['a','b','c'], (x,y)=>x+y)).toEqual('abc');
    });

    it('should return concatenated string along starting with accumulator', () => {
        expect(reduce(['a','b','c'], (x,y)=>x+y, 'z')).toEqual('zabc');
    });
})
