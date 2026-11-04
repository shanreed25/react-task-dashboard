import { useState } from "react";
import { taskFormStyles } from "../../utils/taskStyles";
import type {
  TaskFormData,
  TaskStatus,
  TaskPriority,
  TaskCategory,
  TaskFormProps,
} from "../../types";
import { validateForm } from "../../utils/taskUtils";

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
    console.log(Object.keys(validateForm(formData)).length === 0);
    if(Object.keys(validateForm(formData)).length === 0){
      onSubmit(formData);
      setFormData(initialFormData);
    } else {
      console.log(Object.values(validateForm(formData)));
    }
    

  }

  return (
    <section className={taskFormStyles.sectionStyles}>
      <h2 className="text-3xl font-bold text-purple-600">Task Form</h2>
      <form onSubmit={handleSubmit} className="">
        <div className="mb-5">
          <label htmlFor="title" className={taskFormStyles.labelStyles}>
            Task Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            className={taskFormStyles.fieldStyles}
            value={formData.title}
            onChange={handleFormData}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="description" className={taskFormStyles.labelStyles}>
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={6}
            maxLength={800}
            value={formData.description}
            className={taskFormStyles.fieldStyles}
            onChange={handleFormData}
          />
        </div>
        <div className="flex gap-5 mb-5 max-w-3xl mx-auto text-center">
          <div className="">
            <label htmlFor="dueDate" className={taskFormStyles.labelStyles}>
              Due Date
            </label>
            <input
              id="dueDate"
              name="dueDate"
              type="date"
              value={formData.dueDate}
              className={taskFormStyles.fieldStyles}
              onChange={handleFormData}
            />
          </div>

          <div className="">
            <label htmlFor="status" className={taskFormStyles.labelStyles}>
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              className={taskFormStyles.fieldStyles}
              onChange={handleFormData}
            >
              {statusOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-5 mb-5 max-w-3xl mx-auto text-center">
          <div className="">
            <label htmlFor="priority" className={taskFormStyles.labelStyles}>
              Priority
            </label>
            <select
              id="priority"
              name="priority"
              value={formData.priority}
              className={taskFormStyles.fieldStyles}
              onChange={handleFormData}
            >
              {priorityOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="">
            <label htmlFor="category" className={taskFormStyles.labelStyles}>
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              className={taskFormStyles.fieldStyles}
              onChange={handleFormData}
            >
              {categoryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button type="submit" className={taskFormStyles.addTaskBtn}>
          Add Task
        </button>
      </form>
    </section>
  );
}

export default TaskForm;
