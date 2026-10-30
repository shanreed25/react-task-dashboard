import type { TaskItemProps } from "../../types"
import { parseDate } from "../../utils/taskUtils";

function TaskItem({task} : TaskItemProps) {
  console.log(task);
  return (
    <div className="text-1xl font-bold text-slate-600 border border-purple-400">
      <p>Title: {task.title}</p>
      <p>Description: {task.description}</p>
      <p>Category: {task.category}</p>
      <p>Status: {task.status}</p>
      <p>Priority: {task.priority}</p>
      <p>Due Date: {parseDate(task.dueDate)}</p>

    </div>
  )
}

export default TaskItem