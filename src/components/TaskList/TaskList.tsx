import type { TaskListProps } from "../../types"
import TaskItem from "./TaskItem"

/*
maps over tasks and renders one TaskItem per task
tasks data comes from Dashboard
*/
function TaskList({tasks, onStatusChange, onDelete}: TaskListProps) {
  return (
    <>
      <h2 className="text-3xl font-bold text-orange-600 border border-teal-600">Task List</h2>

      {tasks.map((task) => (
        <TaskItem 
        key={task.id} 
        task={task}
        onStatusChange={onStatusChange}
        onDelete={onDelete} 
        />
      ))}
      
    </>
  )
}

export default TaskList
