// https://leetcode.com/problems/merge-k-sorted-lists/
export default function mergeKList(lists) {
  if (!lists || !lists.length) return null;
  if (lists.length === 1) return lists[0];

  let result = lists[0];
  for (let i = 1; i < lists.length; i++) {
    result = merge(result, lists[i]);
  }
  return result;
}

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let k = 0;
  let result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) result[k++] = arr1[i++];
    else result[k++] = arr2[j++];
  }

  while (i < arr1.length) result[k++] = arr1[i++];
  while (j < arr2.length) result[k++] = arr2[j++];

  return result;
}
