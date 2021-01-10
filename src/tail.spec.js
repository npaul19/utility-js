const tail = require("./tail");

describe("tail", () => {
    it(("should return everything except first element of a non-empty array"), () => {
        expect(tail([1, 2, 3, 4])).toEqual([2, 3, 4]);
    });
    
    it(("should return empty array for an empty array"), () => {
        expect(tail([])).toEqual([]);
    });
});