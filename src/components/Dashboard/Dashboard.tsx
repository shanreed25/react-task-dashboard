import TaskList from "../TaskList/TaskList";
import TaskForm from "../TaskForm/TaskForm";
import TaskFilter from "../TaskFilter/TaskFilter";
import { SunIcon } from "@heroicons/react/24/outline";
import { useCallback, useState } from "react";
import { mockTasks } from "../../data/mockTasks";
import type { Task, TaskFormData, TaskStatus } from "../../types";
import { createTask } from "../../utils/taskUtils";

const styles = {
  containerStyles: "bg-purple-100 text-white text-center",
  headerStyles: "bg-purple-700 sticky top-0 z-10 border-b border-yellow-200 shadow-md",
  taskContent:"max-w-3xl mx-auto text-center"
};

//holds task shared state
function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);

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

  function handleSubmit(data: TaskFormData) {
    const newTask = createTask(data)
    setTasks(prev => [...prev, newTask])
    console.log("Form submitted", createTask(data));
  }

  return (
    <div className={styles.containerStyles}>
      <header className={styles.headerStyles}>
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
