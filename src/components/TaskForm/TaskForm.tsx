import { useState } from "react"
import type { TaskFormData } from "../../types"

const initialFormData: TaskFormData = {
  title: "",
  description:"",
  category: "setup",
  status: "pending",
  dueDate: "",
  priority: "medium",
}
function TaskForm() {

  return (
    <>
      <h2 className="text-3xl font-bold text-purple-600 border border-orange-600">Task Form</h2>
    
    </>
  )
}

export default TaskForm