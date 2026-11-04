import type { TaskStatus, TaskPriority } from "../types";

//returns the Tailwind color classes for the status 
// dropdown based on the task's status
export function getStatusStyles(status: TaskStatus): string {
        switch (status) {
        case "pending":
            return "bg-yellow-100 text-yellow-800";
        case "in-progress":
            return "bg-white text-blue-700";
        case "completed":
            return "bg-white text-green-700";
        default:
            return "bg-black text-yellow-500"
    }
  }

//returns the Tailwind color classes for the prioirty
// value based on the task's priority
export function getPriorityStyles(priority: TaskPriority): string{
        switch (priority) {
        case "low":
            return "text-green-600";
        case "medium":
            return "text-amber-500";
        case "high":
            return "text-red-600";
        default:
            return "text-yellow-500"
    }
}


export const dashStyles = {
  containerStyles: "bg-purple-100 text-white text-center",
  headerStyles: "bg-purple-700 sticky top-0 z-10 border-b border-yellow-200 shadow-md",
  taskContent:"max-w-3xl mx-auto text-center"
};

export const taskFormStyles = {
  sectionStyles: "px-10 my-5",
  labelStyles: "text-purple-700 text-sm mb-1 block font-medium",
  fieldStyles:
    "w-md py-2 px-3 rounded-lg border border-purple-700 bg-white text-purple-900 shadow-sm",
  addTaskBtn:
    "bg-purple-700 px-4 py-2 rounded-md font-semibold text-white shadow-sm hover:bg-purple-600",
};