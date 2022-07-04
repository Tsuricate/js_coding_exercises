const {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner,
} = require("../challenges/exercise007");

describe("sumDigits", () => {
  test("returns given number if there is only one digit", () => {
    expect(sumDigits(0)).toBe(0);
    expect(sumDigits(1)).toBe(1);
    expect(sumDigits(7)).toBe(7);
  });
  test("returns correct sum", () => {
    expect(sumDigits(1234)).toBe(10);
    expect(sumDigits(12341234)).toBe(20);
    expect(sumDigits(123123123123)).toBe(12);
    expect(sumDigits(1234567890)).toBe(45);
  });
});

describe("createRange", () => {
  test("returns correct range from 3 to 11 with step of 2", () => {
    expect(createRange(3, 11, 2)).toBe([3, 5, 7, 9, 11]);
  });
  test("returns correct range from 0 to 11 with explicit step of 1", () => {
    expect(createRange(0, 11, 1)).toBe([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  });
  test("returns correct range from 0 to 11 without explicit step", () => {
    expect(createRange(0, 11)).toBe([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  });
  test("returns correct range from 0 to 100 with step of 25", () => {
    expect(createRange(0, 100, 25)).toBe([0, 25, 50, 75, 100]);
  });
  test("returns correct range if start and end are equals", () => {
    expect(createRange(0, 0, 25)).toBe([0]);
  });
});

describe("getScreentimeAlertList", () => {
  const usage = [
    {
      username: "beth_1234",
      name: "Beth Smith",
      screenTime: [
        {
          date: "2019-05-01",
          usage: { twitter: 34, instagram: 22, facebook: 40 },
        },
        {
          date: "2019-05-02",
          usage: { twitter: 56, instagram: 40, facebook: 31 },
        },
        {
          date: "2019-05-03",
          usage: { twitter: 12, instagram: 15, facebook: 19 },
        },
        {
          date: "2019-05-04",
          usage: { twitter: 10, instagram: 56, facebook: 61 },
        },
      ],
    },
    {
      username: "sam_j_1989",
      name: "Sam Jones",
      screenTime: [
        {
          date: "2019-06-11",
          usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 },
        },
        {
          date: "2019-06-13",
          usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 },
        },
        {
          date: "2019-06-14",
          usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 },
        },
      ],
    },
  ];
  test("returns username of user who used more than 100 minutes of screentime", () => {
    expect(getScreentimeAlertList(usage, "2019-05-04")).toBe(["beth_1234"]);
  });
  test("returns empty array if no user has used more than 100 minutes of screentime on given date", () => {
    expect(getScreentimeAlertList(usage, "2019-06-11")).toBe([]);
  });
});

describe("hexToRGB", () => {
  test("returns correct value for black", () => {
    expect(hexToRGB("000000")).toBe("rgb(0,0,0)");
  });
  test("returns correct value for white", () => {
    expect(hexToRGB("FFFFFF")).toBe("rgb(255,255,255)");
  });
  test("returns correct value for tomato", () => {
    expect(hexToRGB("FF6347")).toBe("rgb(255,99,71)");
  });
  test("returns correct value for teal", () => {
    expect(hexToRGB("008080")).toBe("rgb(0,128,128)");
  });
});

describe("findWinner", () => {
  test("returns 'X' if winner is X (vertical)", () => {
    expect(
      findWinner([
        ["X", "0", null],
        ["X", null, "0"],
        ["X", null, "0"],
      ])
    ).toBe("X");
  });
  test("returns 'X' if winner is X (horizontal)", () => {
    expect(
      findWinner([
        ["X", "X", "X"],
        [null, null, "0"],
        ["0", null, "0"],
      ])
    ).toBe("X");
  });
  test("returns 'X' if winner is X (diagonal)", () => {
    expect(
      findWinner([
        ["X", null, "0"],
        [null, "X", "0"],
        ["0", null, "X"],
      ])
    ).toBe("X");
  });

  test("returns '0' if winner is 0 (vertical)", () => {
    expect(
      findWinner([
        ["0", "X", null],
        ["0", null, "X"],
        ["0", null, "X"],
      ])
    ).toBe("0");
  });
  test("returns '0' if winner is 0 (horizontal)", () => {
    expect(
      findWinner([
        ["0", "0", "0"],
        [null, null, "X"],
        ["X", null, "X"],
      ])
    ).toBe("0");
  });
  test("returns '0' if winner is 0 (diagonal)", () => {
    expect(
      findWinner([
        ["0", null, "X"],
        [null, "0", "X"],
        ["X", null, "0"],
      ])
    ).toBe("0");
  });

  test("returns null if there is currently no winner", () => {
    expect(
      findWinner([
        ["X", "0", "0"],
        ["X", null, "0"],
        ["0", "X", "X"],
      ])
    ).toBe(null);
  });
});
