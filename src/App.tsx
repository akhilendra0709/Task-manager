import React from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/Tasklist";

const TaskManager: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row space-x-8 justify-center p-8">
      <div className="flex-1 mb-8 md:mb-0">
        <AddTaskForm />
      </div>
      <div className="flex-1">
        <TaskList />
      </div>
    </div>
  );
};

export default TaskManager;
