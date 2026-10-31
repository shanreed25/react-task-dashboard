import type { TaskItemProps, TaskStatus } from "../../types";
import {
  formatDate,
  getStatusStyles,
  isOverdue,
  getPriorityStyles,
} from "../../utils/taskUtils";
import { TrashIcon } from "@heroicons/react/24/outline";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { memo } from "react";

/*
shows the task's fields, the formatted due date, and the OVERDUE label
has a status dropdown and a delete icon that report changes through callbacks
task info and callbacks come from TaskList
*/

function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
  return (
    <div className="text-xl font-bold text-slate-600 border border-purple-400">
      <p>Title: {task.title}</p>
      <p>Description: {task.description}</p>
      <p>Category: {task.category}</p>
      <p>Status: {task.status}</p>
      <p className={getPriorityStyles(task.priority)}>
        Priority: {task.priority}
      </p>
      <p>Due Date: {formatDate(task.dueDate)}</p>
      {isOverdue(task) && (
        <div>
          <ExclamationTriangleIcon className="size-5 text-red-500" />
          <p>OVERDUE</p>
        </div>
      )}

      <div className="flex items-center gap-5">
        <label htmlFor={`task-${task.id}-status`}>Status</label>
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

        <button
          type="button"
          onClick={() => onDelete(task.id, task.title)}
          aria-label="Delete"
        >
          <TrashIcon className="size-5 cursor-pointer text-red-500" />
        </button>
      </div>
    </div>
  );
}

export default memo(TaskItem);
