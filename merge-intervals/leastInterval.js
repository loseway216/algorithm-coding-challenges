// https://leetcode.com/problems/task-scheduler/
export default function leastInterval(tasks, n) {
  const frequencies = {};
  let maxFrequency = 0;
  let maxFrequencyCount = 0;

  for (const task of tasks) {
    frequencies[task] = (frequencies[task] || 0) + 1;

    if (frequencies[task] > maxFrequency) {
      maxFrequency = frequencies[task];
      maxFrequencyCount = 1;
    } else if (frequencies[task] === maxFrequency) {
      maxFrequencyCount++;
    }
  }

  const intervals = maxFrequency - 1;
  const emptySlots = intervals * (n - (maxFrequencyCount - 1));
  const availableTasks = tasks.length - maxFrequency * maxFrequencyCount;
  const idleSlots = Math.max(0, emptySlots - availableTasks);

  return tasks.length + idleSlots;
}
