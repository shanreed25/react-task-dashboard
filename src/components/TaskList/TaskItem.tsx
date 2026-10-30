import type { TaskItemProps, TaskStatus } from "../../types"
import { formatDate, getStatusStyles, isOverDue } from "../../utils/taskUtils";

/*
shows the task's fields, the formatted due date, and the OVERDUE label
task info come from TaskList
*/
function TaskItem({task, onStatusChange} : TaskItemProps) {
  return (
    <div className="text-xl font-bold text-slate-600 border border-purple-400">
      <p>Title: {task.title}</p>
      <p>Description: {task.description}</p>
      <p>Category: {task.category}</p>
      <p>Status: {task.status}</p>
      <p>Priority: {task.priority}</p>
      <p>Due Date: {formatDate(task.dueDate)}</p>
      {isOverDue(task) && <span>OVERDUE</span>}

      <div className="flex items-center gap-5">
        <select
          id={`task-${task.id}-status`}
          name="task-status"
          value={task.status}
          onChange={(e) =>
            onStatusChange(task.id, e.target.value as TaskStatus)
          }
          className={`${getStatusStyles(task.status)} cursor-pointer rounded-md px-2 py-1`}
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    </div>
  )
}

export default TaskItem