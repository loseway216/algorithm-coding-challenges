// https://leetcode.com/problems/employee-free-time/
// Given a list containing the schedules of multiple employees.
// Each person’s schedule is a list of non - overlapping intervals in sorted order.
// An interval is specified with the start and end time, both being positive integers.
// Find the list of intervals representing the free time for all the employees.
export default function employeeFreeTime(schedule) {
  const result = [];
  const intervals = [];

  for (const person of schedule) {
    for (const interval of person) {
      intervals.push(interval);
    }
  }

  intervals.sort((a, b) => a[0] - b[0]);

  let [start, end] = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const [nextStart, nextEnd] = intervals[i];

    if (nextStart <= end) {
      end = Math.max(end, nextEnd);
    } else {
      result.push([end, nextStart]);
      [start, end] = [nextStart, nextEnd];
    }
  }

  return result;
}
