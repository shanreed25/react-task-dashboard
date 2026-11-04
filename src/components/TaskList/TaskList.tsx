import type { TaskListProps } from "../../types"
import TaskItem from "./TaskItem"

/*
maps over tasks and renders one TaskItem per task
tasks data comes from Dashboard, if there are no tasks a 
no task message displays
*/
function TaskList({tasks, onStatusChange, onDelete, onEdit}: TaskListProps) {
  return (
    <>
      <h2 className="text-3xl font-bold text-orange-600 border border-teal-600">Task List</h2>

      {tasks.length > 0 ? 
      tasks.map((task) => (
        <TaskItem 
        key={task.id} 
        task={task}
        onStatusChange={onStatusChange}
        onDelete={onDelete} 
        onEdit={onEdit}
        />
      )) : <span className="text-3xl">No Tasks Yet</span>
    
    }
      
    </>
  )
}

export default TaskList
