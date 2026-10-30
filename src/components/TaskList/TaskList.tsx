import type { TaskListProps } from "../../types"
import TaskItem from "./TaskItem"

function TaskList({tasks}: TaskListProps) {
  console.log(tasks);
  return (
    <>
      <h2 className="text-3xl font-bold text-orange-600 border border-teal-600">Task List</h2>

      {tasks.map((task) => (
        <TaskItem key={task.id} task={task}/>
      ))}
      
    </>
  )
}

export default TaskList
