import TaskList from "../TaskList/TaskList";
import TaskForm from "../TaskForm/TaskForm";
import TaskFilter from "../TaskFilter/TaskFilter";
import { SunIcon } from "@heroicons/react/24/outline";
import { useCallback, useState } from "react";
import type { Task, TaskFormData, TaskStatus } from "../../types";
import { createTask } from "../../utils/taskUtils";
import { mockTasks } from "../../data/mockTasks";
import { dashStyles } from "../../utils/taskStyles";


//holds task shared state
function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [taskEdit, setTaskEdit] = useState<Task | null>(null)

  const handleStatusChange = useCallback(
    (taskId: string, newStatus: TaskStatus) => {
      setTasks((prev) =>
        prev.map((task) =>
          task.id === taskId ? { ...task, status: newStatus } : task,
        ),
      );
    },
    [],
  );

  const handleDelete = useCallback((taskId: string, taskTitle: string) => {
    const deleteOK = window.confirm(
      `Are You Sure You Want to Delete Task '${taskTitle}'`,
    );
    if (deleteOK) {
      setTasks((prev) => prev.filter((task) => task.id !== taskId));
    }
  }, []);

  const handleSubmit = useCallback((data: TaskFormData) => {
    const newTask = createTask(data)
    setTasks(prev => [...prev, newTask])
    // console.log("Form submitted", newTask);
  }, [])

  const handleEdit = useCallback((task: Task) => {
    setTaskEdit(task)
  }, [])

  return (
    <div className={dashStyles.containerStyles}>
      <header className={dashStyles.headerStyles}>
        <nav>
          <SunIcon className="h-8 w-8" />
        </nav>
        <h1 className="text-3xl">React Task Management Dashboard</h1>
      </header>

      <div>
        <TaskForm onSubmit={handleSubmit} />
        <TaskFilter />
        <TaskList
          tasks={tasks}
          onStatusChange={handleStatusChange}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default Dashboard;
