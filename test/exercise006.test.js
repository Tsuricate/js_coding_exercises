const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
} = require("../challenges/exercise006");

describe("sumMultiples", () => {
  test("returns 0 if there is no multiple of 3 or 5", () => {
    expect(sumMultiples([0])).toBe(0);
    expect(sumMultiples([1])).toBe(0);
    expect(sumMultiples([2, 8])).toBe(0);
  });
  test("returns the sum of a list of multiples of 3 and 5", () => {
    expect(sumMultiples([3])).toBe(3);
    expect(sumMultiples([3, 5])).toBe(8);
  });
  test("returns the sum of numbers which are multiples of 3 or 5", () => {
    expect(sumMultiples([1, 2, 3, 5, 8])).toBe(8);
  });
});

describe("isValidDNA", () => {
  test("returns false for empty string", () => {
    expect(isValidDNA("")).toBe(false);
  });
  test("returns false for incorrect DNA", () => {
    expect(isValidDNA("AZERTY")).toBe(false);
  });
  test("returns true for correct DNA", () => {
    expect(isValidDNA("GATTACA")).toBe(true);
  });
  test("should be case sensitive", () => {
    expect(isValidDNA("gattaca")).toBe(false);
    expect(isValidDNA("GatTaca")).toBe(false);
  });
});

describe("getComplementaryDNA", () => {
  test("T is paired with A", () => {
    expect(getComplementaryDNA("T")).toBe("A");
    expect(getComplementaryDNA("A")).toBe("T");
  });
  test("C is paired with G", () => {
    expect(getComplementaryDNA("C")).toBe("G");
    expect(getComplementaryDNA("G")).toBe("C");
  });
  test("gives correct complementary DNA", () => {
    expect(getComplementaryDNA("ACTG")).toBe("TGAC");
    expect(getComplementaryDNA("TGAC")).toBe("ACTG");
    expect(getComplementaryDNA("AATT")).toBe("TTAA");
    expect(getComplementaryDNA("GGTG")).toBe("CCAC");
  });
});

describe("isItPrime", () => {
  test("returns false for non-prime numbers", () => {
    expect(isItPrime(0)).toBe(false);
    expect(isItPrime(1)).toBe(false);
    expect(isItPrime(4)).toBe(false);
    expect(isItPrime(90)).toBe(false);
  });
  test("returns true for prime numbers", () => {
    expect(isItPrime(2)).toBe(true);
    expect(isItPrime(3)).toBe(true);
    expect(isItPrime(5)).toBe(true);
    expect(isItPrime(23)).toBe(true);
    expect(isItPrime(37)).toBe(true);
    expect(isItPrime(67)).toBe(true);
  });
});

describe("createMatrix", () => {
  test("returns empty matrix for 0 and 'foo'", () => {
    expect(createMatrix(0, "foo")).toEqual([]);
  });
  test("returns correct matrix for 3 and 'foo'", () => {
    expect(createMatrix(3, "foo")).toEqual([
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
    ]);
  });
  test("returns correct matrix for 7 and 'bar'", () => {
    expect(createMatrix(7, "bar")).toEqual([
      ["bar", "bar", "bar", "bar", "bar", "bar", "bar"],
      ["bar", "bar", "bar", "bar", "bar", "bar", "bar"],
      ["bar", "bar", "bar", "bar", "bar", "bar", "bar"],
      ["bar", "bar", "bar", "bar", "bar", "bar", "bar"],
      ["bar", "bar", "bar", "bar", "bar", "bar", "bar"],
      ["bar", "bar", "bar", "bar", "bar", "bar", "bar"],
      ["bar", "bar", "bar", "bar", "bar", "bar", "bar"],
    ]);
  });
});

describe("areWeCovered", () => {
  test("returns false if there are less than 3 workers on given day", () => {
    expect(
      areWeCovered(
        [
          { name: "Jake", rota: ["Monday", "Tuesday", "Friday"] },
          {
            name: "Finn",
            rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"],
          },
        ],
        "Tuesday"
      )
    ).toBe(false);
  });
  test("returns true if there are at least 3 workers on given day", () => {
    expect(
      areWeCovered(
        [
          { name: "Jake", rota: ["Monday", "Tuesday", "Friday"] },
          { name: "Finn", rota: ["Monday", "Tuesday", "Friday"] },
          {
            name: "Lemongrab",
            rota: ["Monday"],
          },
        ],
        "Monday"
      )
    ).toBe(true);
  });
});
