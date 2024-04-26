// https://leetcode.com/problems/compare-version-numbers/description/
export default function compareVersion(version1, version2) {
  const v1 = version1.split(".");
  const v2 = version2.split(".");

  for (let i = 0; i < Math.max(v1.length, v2.length); i++) {
    const num1 = i < v1.length ? parseInt(v1[i]) : 0;
    const num2 = i < v2.length ? parseInt(v2[i]) : 0;

    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    }
  }

  return 0;
}
