import { useState } from "react";
import type { TaskFormData, TaskStatus, TaskPriority, TaskCategory } from "../../types";

const initialFormData: TaskFormData = {
  title: "",
  description: "",
  category: "setup",
  status: "pending",
  dueDate: "",
  priority: "medium",
};

const statusOptions: { value: TaskStatus; label: string }[] = [
  { value: "pending", label: "Pending" },
  { value: "in-progress", label: "In Progress" },
  { value: "completed", label: "Completed" },
];

const priorityOptions: { value: TaskPriority; label: string }[] = [
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
];

const categoryOptions: { value: TaskCategory; label: string }[] = [
  { value: "setup", label: "Setup" },
  { value: "ui", label: "UI" },
  { value: "feature", label: "Feature" },
  { value: "testing", label: "Testing" },
  { value: "deployment", label: "Deployment" },
];

//holds the form's input values here so typing doesn't re-render Dashboard
function TaskForm() {
  const [formData, setFormData] = useState<TaskFormData>(initialFormData);
  function handleFormData(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <>
      <h2 className="text-3xl font-bold text-purple-600 border border-orange-600">
        Task Form
      </h2>
      <form>
        <label htmlFor="title">Task Title</label>
        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleFormData}
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows={6}
          maxLength={800}
          value={formData.description}
          onChange={handleFormData}
        />

        <label htmlFor="dueDate">Due Date</label>
        <input
          id="dueDate"
          name="dueDate"
          type="date"
          value={formData.dueDate}
          onChange={handleFormData}
        />

        <label htmlFor="status">Status</label>
        <select id="status" name="status" value={formData.status}>
          {statusOptions.map(option =>(
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <label htmlFor="priority">Priority</label>
        <select id="priority" name="priority" value={formData.priority}>
          {priorityOptions.map(option =>(
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <label htmlFor="Category">Category</label>
        <select id="Category" name="Category" value={formData.category}>
          {categoryOptions.map(option =>(
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </form>
    </>
  );
}

export default TaskForm;
