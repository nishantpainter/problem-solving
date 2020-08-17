const NumberUtils = require("./number-utils");

describe("NumberUtils", () => {
  describe("getIntegers", () => {
    const { getIntegers } = NumberUtils;

    it("should be defined", () => {
      expect(getIntegers).toBeDefined();
    });

    it("should return array of integer", () => {
      expect(getIntegers(3)).toEqual([1, 2, 3]);
    });

    it("should return undefined on empty argument", () => {
      expect(getIntegers()).toBeUndefined();
    });
  });

  describe("getMultiplesOf", () => {
    const { getMultiplesOf } = NumberUtils;

    it("should be defined", () => {
      expect(getMultiplesOf).toBeDefined();
    });

    it("should return multiples of given n and number", () => {
      expect(getMultiplesOf(3, 10)).toEqual([3, 6, 9]);
      expect(getMultiplesOf(5, 10)).toEqual([5, 10]);
    });

    it("should return undefined on empty argument", () => {
      expect(getMultiplesOf()).toBeUndefined();
      expect(getMultiplesOf(3)).toBeUndefined();
      expect(getMultiplesOf(undefined, 10)).toBeUndefined();
    });
  });

  describe("getSumOf", () => {
    const { getSumOf } = NumberUtils;

    it("should be defined", () => {
      expect(getSumOf).toBeDefined();
    });

    it("should return sum of given list", () => {
      expect(getSumOf([1, 2, 3])).toBe(6);
    });

    it("should return 0 on empty array", () => {
      expect(getSumOf([])).toBe(0);
    });

    it("should return undefined on empty or non array argument", () => {
      expect(getSumOf()).toBeUndefined();
      expect(getSumOf(3)).toBeUndefined();
    });
  });

  describe("getUnique", () => {
    const { getUnique } = NumberUtils;

    it("should be defined", () => {
      expect(getUnique).toBeDefined();
    });

    it("should return unique value list", () => {
      expect(getUnique([1, 2, 3, 4, 2, 1])).toEqual([1, 2, 3, 4]);
    });

    it("should return undefined on empty or non array argument", () => {
      expect(getUnique()).toBeUndefined();
      expect(getUnique(3)).toBeUndefined();
    });
  });
});
