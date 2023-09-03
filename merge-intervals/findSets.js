// https://leetcode.com/problems/meeting-rooms-ii/
// Given an input array of meeting time intervals, intervals,
// where each interval has a start time and an end time.
// Find the minimum number of meeting rooms required to hold these meetings.
export default function findSets(intervals) {
  let sets = [];
  let currentSet = [];
  let currentInterval = intervals[0];

  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i];
    if (currentInterval[1] >= interval[0]) {
      currentSet.push(interval);
    } else {
      sets.push(currentSet);
      currentSet = [interval];
    }
    currentInterval = interval;
  }
  sets.push(currentSet);

  return sets;
}
