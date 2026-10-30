import TaskList from "../TaskList/TaskList";
import TaskForm from "../TaskForm/TaskForm";
import TaskFilter from "../TaskFilter/TaskFilter";
import { SunIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { mockTasks } from "../../data/mockTasks";
import type { Task } from "../../types";


function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>(mockTasks)
  console.log(tasks);
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
      <TaskList tasks={tasks}/>
    </>
  );
}

export default Dashboard;
