import type { TaskItemProps } from "../../types"
import { formatDate, isOverDue } from "../../utils/taskUtils";

//displays task info
//task info come from TaskList
function TaskItem({task} : TaskItemProps) {
  console.log(task);

  return (
    <div className="text-xl font-bold text-slate-600 border border-purple-400">
      <p>Title: {task.title}</p>
      <p>Description: {task.description}</p>
      <p>Category: {task.category}</p>
      <p>Status: {task.status}</p>
      <p>Priority: {task.priority}</p>
      <p>Due Date: {formatDate(task.dueDate)}</p>
      {isOverDue(task) && <span>OVERDUE</span>}

    </div>
  )
}

export default TaskItem