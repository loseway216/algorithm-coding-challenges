import compareVersion from "./compareVersion";

test("compareVersion should return 0 when both versions are equal", () => {
  expect(compareVersion("1.0", "1.0")).toBe(0);
  expect(compareVersion("2.3.4", "2.3.4")).toBe(0);
  expect(compareVersion("0.1", "0.1")).toBe(0);
});

test("compareVersion should return -1 when version1 is smaller than version2", () => {
  expect(compareVersion("1.0", "1.1")).toBe(-1);
  expect(compareVersion("2.3.4", "2.3.5")).toBe(-1);
  expect(compareVersion("0.1", "0.2")).toBe(-1);
});

test("compareVersion should return 1 when version1 is greater than version2", () => {
  expect(compareVersion("1.1", "1.0")).toBe(1);
  expect(compareVersion("2.3.5", "2.3.4")).toBe(1);
  expect(compareVersion("0.2", "0.1")).toBe(1);
  expect(compareVersion("1.0.1", "1")).toBe(1);
});
