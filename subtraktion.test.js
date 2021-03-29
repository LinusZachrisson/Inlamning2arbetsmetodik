const subtraktion = require("./subtraktion.js");

test("subtracts 9 by 3 to be 6", () => {
    expect(subtraktion(9, 3)).toBe(6);
});