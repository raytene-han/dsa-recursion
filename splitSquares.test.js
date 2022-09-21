const {dump, validate, simplify} = require("./splitSquares");

describe("dump", function() {
  it("returns the strings of squares in a split square", function() {
    expect(dump(0)).toBe("0");
    expect(dump([0, 1, 0, 1])).toBe("0 1 0 1");
    expect(dump([0, 0, 0, [1, 1, 1, 1]])).toBe("0 0 0 1 1 1 1");
    expect(dump([0, 0, 0, [1, 1, 1, [0, 0, 0, [1, 1, 1, 1]]]])).toBe(
      "0 0 0 1 1 1 0 0 0 1 1 1 1"
    );
  });
});

describe("validate", function() {
  it("returns true for valid squares", function() {
    expect(validate(0)).toBe(true);
    expect(validate([0, 1, 0, 1])).toBe(true);
    expect(validate([0, 0, 0, [1, 1, 1, 1]])).toBe(true);
    expect(validate([0, 0, 0, [1, 1, 1, [0, 0, 0, [1, 1, 1, 1]]]])).toBe(true);
  });

  it("returns false for invalid squares", function() {
    expect(validate(2)).toBe(false);
    expect(validate([1, 1, 1, 1, 1])).toBe(false);
    expect(validate([1, 0, [1, [0, 0, 0, 0, 1], 1, [1, 1, 1, 1]], 1]))
      .toBe(false);
    expect(validate([1, [1, 0, 1, [0, [0, 0, 0], 1, 1]], [1, 0, 1, 0], 1]))
      .toBe(false);
  });
});

describe("simplify", function() {
  it("returns the simplified version of the square", function() {
    expect(simplify(0)).toBe(0);
    expect(simplify([1, 1, 1, 1])).toBe(1);
    expect(simplify([1, 1, 1, [1, 1, 1, 1]])).toBe(1);
    expect(simplify([[1, 1, 1, 1], [1, 1, 1, 1], 1, 1])).toBe(1);
    expect(simplify([1, 0, [1, [0, 0, 0, 0], 1, [1, 1, 1, 1]], 1]))
      .toEqual([1, 0, [1, 0, 1, 1], 1]);

  });
});