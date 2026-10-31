import { useState } from "react";
import type { TaskFormData } from "../../types";

const initialFormData: TaskFormData = {
  title: "",
  description: "",
  category: "setup",
  status: "pending",
  dueDate: "",
  priority: "medium",
};

//holds the form's input values here so typing doesn't re-render Dashboard
function TaskForm() {
  const [formData, setFormData] = useState<TaskFormData>(initialFormData);
  function handleFormData(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const {name, value} = e.target
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <>
      <h2 className="text-3xl font-bold text-purple-600 border border-orange-600">
        Task Form
      </h2>
      <form>
        <label htmlFor="title">Task</label>
        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleFormData}
        />

        <label htmlFor="description">Task Description</label>
        <textarea
          id="description"
          name="description"
          rows={6}
          maxLength={800}
          value={formData.description}
          onChange={handleFormData}
        />
      </form>
    </>
  );
}

export default TaskForm;
