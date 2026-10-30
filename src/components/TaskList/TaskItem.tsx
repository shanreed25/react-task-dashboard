import type { TaskItemProps } from "../../types"


function TaskItem({task} : TaskItemProps) {
  console.log(task);
  return (
    <>
      <h2 className="text-3xl font-bold text-green-600 border border-purple-600">Task Item</h2>
      <p>{task.title}</p>
    </>
  )
}

export default TaskItem