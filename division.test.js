const division = require("./division.js");

test("divides 10 by 2 to be 5", () => {
    expect(division(10, 2)).toBe(5);
});