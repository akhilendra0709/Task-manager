// Parent component that wraps AddTaskForm and TaskList

import React from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/Tasklist";

const TaskManager: React.FC = () => {
  return (
    <div className="flex space-x-8 justify-center p-8">
      <div className="flex-1">
        <AddTaskForm />
      </div>
      <div className="flex-1">
        <TaskList />
      </div>
    </div>
  );
};

export default TaskManager;
