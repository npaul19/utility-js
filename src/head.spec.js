const head = require("./head");

describe("head", () => {
    it(("should return undefined for an empty array"), () => {
        expect(head([])).toBe(undefined);
    });
});