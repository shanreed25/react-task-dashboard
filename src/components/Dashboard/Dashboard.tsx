import TaskList from "../TaskList/TaskList";
import TaskForm from "../TaskForm/TaskForm";
import TaskFilter from "../TaskFilter/TaskFilter";
import { SunIcon } from "@heroicons/react/24/outline";
import { useCallback, useState } from "react";
import { mockTasks } from "../../data/mockTasks";
import type { Task, TaskStatus } from "../../types";

//holds task shared state
function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks)

  const handleStatusChange = useCallback((taskId: string, newStatus: TaskStatus) => {
          setTasks(prev => prev.map((task) =>
        task.id === taskId ? {...task, status : newStatus} : task
        )
      )
  }, [])


  return (
    <>
      <nav>
        <SunIcon className="h-8 w-8" />
      </nav>

      <h1 className="text-3xl font-bold text-blue-600 border border-red-600">
        React Task Management Dashboard
      </h1>
      
      <TaskForm />
      <TaskFilter />
      <TaskList tasks={tasks} onStatusChange={handleStatusChange}/>
    </>
  );
}

export default Dashboard;
