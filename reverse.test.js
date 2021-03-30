const reverse = require("./reverse.js");

test("to see if function reverses string", () => {
  expect(reverse("cold")).toBe("dloc");
});
