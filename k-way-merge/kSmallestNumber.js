// https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/
export default function kSmallestNumber(matrix, k) {
  // edge case
  if (matrix.length === 0 || k === 0) return null;

  let n = matrix.length;
  let start = matrix[0][0];
  let end = matrix[n - 1][n - 1];

  while (start < end) {
    let mid = Math.floor(start + (end - start) / 2);
    let count = countLessEqual(matrix, mid);
    if (count < k) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  return start;
}

function countLessEqual(matrix, mid) {
  let count = 0;
  let n = matrix.length;
  let row = n - 1;
  let col = 0;

  while (row >= 0 && col < n) {
    if (matrix[row][col] <= mid) {
      count += row + 1;
      col++;
    } else {
      row--;
    }
  }

  return count;
}
