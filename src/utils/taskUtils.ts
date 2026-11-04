import type { Task, TaskFormData } from "../types";

//adds an id and createdAt timestamp to the form data and returns a full Task
export function createTask(taskData: TaskFormData): Task{
  const newTask = {
    id: crypto.randomUUID(),
    ...taskData,
    createdAt: new Date().toISOString()
  }
  return newTask
}


// builds and returns the Date 2026-10-20T07:00:00.000Z
export function parseDate(dueDate: string): Date {
  const [year, month, day] = dueDate.split("-").map(Number);
  const indexedMonth = month - 1;
  const parsedDate = new Date(year, indexedMonth, day); //2026-10-20T07:00:00.000Z
  return parsedDate;
}

//format the date to 'Oct 20, 2026'
export function formatDate(dueDate: string): string {
  return parseDate(dueDate).toLocaleDateString("en-US", {
    dateStyle: "medium",
  }); //'Oct 20, 2026'
}

//check if due date is before today and that the status is not complete
export function isOverdue(task: Task): boolean {
  const currentDay = new Date();
  currentDay.setHours(0, 0, 0, 0); //remove time
  const overDue =
    task.status !== "completed" && parseDate(task.dueDate) < currentDay;

  return overDue;
}


