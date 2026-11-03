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

const styles = {
  sectionStyles: "px-10 my-5",
  labelStyles:"text-purple-700 text-sm mb-1 block font-medium",
  fieldStyles: "w-md py-2 px-3 rounded-lg border border-purple-700 bg-white text-purple-900 shadow-sm",
  addTaskBtn: "bg-purple-700 px-4 py-2 rounded-md font-semibold text-white shadow-sm hover:bg-purple-600",
};

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
    <section className={styles.sectionStyles}>
      <h2 className="text-3xl font-bold text-purple-600">
        Task Form
      </h2>
      <form onSubmit={handleSubmit} className="">
        <div className="mb-5">
          <label htmlFor="title" className={styles.labelStyles}>
            Task Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            className={styles.fieldStyles}
            value={formData.title}
            onChange={handleFormData}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="description" className={styles.labelStyles}>
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={6}
            maxLength={800}
            value={formData.description}
            className={styles.fieldStyles}
            onChange={handleFormData}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="dueDate" className={styles.labelStyles}>
            Due Date
          </label>
          <input
            id="dueDate"
            name="dueDate"
            type="date"
            value={formData.dueDate}
            className={styles.fieldStyles}
            onChange={handleFormData}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="status" className={styles.labelStyles}>Status</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            className={styles.fieldStyles}
            onChange={handleFormData}
          >
            {statusOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-5">
          <label htmlFor="priority" className={styles.labelStyles}>Priority</label>
          <select
            id="priority"
            name="priority"
            value={formData.priority}
            className={styles.fieldStyles}
            onChange={handleFormData}
          >
            {priorityOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-5">
          <label htmlFor="category" className={styles.labelStyles}>Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            className={styles.fieldStyles}
            onChange={handleFormData}
          >
            {categoryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className={styles.addTaskBtn}>
          Add Task
        </button>
      </form>
    </section>
  );
}

export default TaskForm;
