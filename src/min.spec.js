const min = require('./min');

describe('min', () => {

    it('should return min of array', () => {
        expect(min([1, -2, 7, 4, 5])).toEqual(-2);
    });

    it('should return min of array', () => {
        expect(min([0, -3, -1, -100])).toEqual(-100);
    });

})
