const max = require('./max');

describe('max', () => {

    it('should return max of array', () => {
        expect(max([1, -2, 7, 4, 5])).toEqual(7);
    });

    it('should return max of array', () => {
        expect(max([0, -3, -1, -100])).toEqual(0);
    });

})
