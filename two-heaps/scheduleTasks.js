import Heap from "../utils/Heap";

export default function scheduleTasks(tasksList) {
  let optimalMachines = 0;
  let machineInUse;
  const machinesAvailable = new Heap(Heap.minComparator);
  const tasksHeap = new Heap((a, b) => a && b && a[0] - b[0]);

  for (let i = 0; i < tasksList.length; i++) {
    tasksHeap.push(tasksList[i]);
  }

  while (tasksHeap.size > 0) {
    let task = tasksHeap.pop();

    if (machinesAvailable.size > 0 && task[0] >= machinesAvailable.peek()[0]) {
      machineInUse = machinesAvailable.pop();

      machineInUse = [task[1], machineInUse[1]];
    } else {
      optimalMachines += 1;
      machineInUse = [task[1], optimalMachines];
    }
    machinesAvailable.push(machineInUse);
  }

  return optimalMachines;
}
