const sum = require("./sum.js");

test("adds 3 plus 7 to equal 10", () => {
    expect(sum(3, 7)).toBe(10);
});