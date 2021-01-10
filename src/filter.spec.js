const filter = require('./filter');

describe('filter', () => {

    it('should work on empty array', () => {
        expect(filter([], x => true)).toEqual([]);
    });

    it('should return back the original array', () => {
        expect(filter([1, 2, 3], x => true)).toEqual([1, 2, 3]);
    });

    it('should return empty array', () => {
        expect(filter([1, 2, 3], x => false)).toEqual([]);
    });

    it('should return numbers greater than 1', () => {
        expect(filter([1, 2, 3], x => x > 1)).toEqual([2, 3]);
    });

    it('should return only upper case characters', () => {
        const filterUpperCase = ch => ch == ch.toUpperCase();
        expect(filter(['a', 'B', 'c', 'D'], filterUpperCase)).toEqual(['B', 'D']);
    });

})
