const map = require('./map');

describe('map', () => {

    it('should apply identity function on all elements of non-empty array', () => {
        const identity = num => num;
        expect(map([1, 2, 3], identity)).toEqual([1, 2, 3]);
    });

    it('should apply cube function on all elements of non-empty array', () => {
        const cube = num => num*num*num;
        expect(map([1, 2, 3], cube)).toEqual([1, 8, 27]);
    });

    it('should apply cube function on an empty array', () => {
        const cube = num => num^3;
        expect(map([], cube)).toEqual([]);
    });

    it('should apply increment function', () => {
        expect(map([{x : 10}],someObject => someObject.x + 1)).toEqual([11]);
    });

})
