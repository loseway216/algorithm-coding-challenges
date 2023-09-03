// https://leetcode.com/problems/interval-list-intersections/
export default function intervalIntersection(A, B) {
  let i = 0;
  let j = 0;
  const result = [];

  while (i < A.length && j < B.length) {
    const [aStart, aEnd] = A[i];
    const [bStart, bEnd] = B[j];

    if (aStart <= bEnd && bStart <= aEnd) {
      result.push([Math.max(aStart, bStart), Math.min(aEnd, bEnd)]);
    }

    if (aEnd < bEnd) {
      i++;
    } else {
      j++;
    }
  }

  return result;
}
