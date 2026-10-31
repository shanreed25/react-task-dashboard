import { useState } from "react";
import type {
  TaskFormData,
  TaskStatus,
  TaskPriority,
  TaskCategory,
  TaskFormProps,
} from "../../types";

const initialFormData: TaskFormData = {
  title: "",
  description: "",
  category: "setup",
  status: "pending",
  dueDate: "",
  priority: "medium",
};


/* statusOptions, priorityOptions, and categoryOptions all
    use .map() to turn each item into an <option>
*/
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

//holds the form input values here so typing doesn't 
// re-render Dashboard, and sends them up through onSubmit
function TaskForm({ onSubmit }: TaskFormProps) {
  const [formData, setFormData] = useState<TaskFormData>(initialFormData);
  function handleFormData(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit(formData);
    setFormData(initialFormData);
  }

  return (
    <>
      <h2 className="text-3xl font-bold text-purple-600 border border-orange-600">
        Task Form
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="bg-amber-500">
          <label htmlFor="title">Task Title</label>
          <input
            id="title"
            name="title"
            type="text"
            className="border border-b-blue-950"
            value={formData.title}
            onChange={handleFormData}
          />
        </div>

        <div className="bg-green-500">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows={6}
            maxLength={800}
            value={formData.description}
            className="border border-b-blue-950"
            onChange={handleFormData}
          />
        </div>

        <div className="bg-purple-500">
          <label htmlFor="dueDate">Due Date</label>
          <input
            id="dueDate"
            name="dueDate"
            type="date"
            value={formData.dueDate}
            className="border border-b-blue-950"
            onChange={handleFormData}
          />
        </div>

        <div className="bg-blue-500">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            className="border border-b-blue-950"
            onChange={handleFormData}
          >
            {statusOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="bg-rose-500">
          <label htmlFor="priority">Priority</label>
          <select
            id="priority"
            name="priority"
            value={formData.priority}
            className="border border-b-blue-950"
            onChange={handleFormData}
          >
            {priorityOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="bg-green-500">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            className="border border-b-blue-950"
            onChange={handleFormData}
          >
            {categoryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="bg-amber-300">
          Add Task
        </button>
      </form>
    </>
  );
}

export default TaskForm;
