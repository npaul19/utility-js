const add = require('./add');

describe('Add', () => {

    it('Sum of 0 and 0 is 0', () => {
        expect(add(0, 0)).toEqual(0);
    });

    it('Sum of 1 and 0 is 1', () => {
        expect(add(1, 0)).toEqual(1);
    });

    it('Sum of any number of arguments', () => {
        expect(add(1, 2, 3, 4, 5)).toEqual(15);
    });

})
