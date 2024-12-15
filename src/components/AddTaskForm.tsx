import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/reducers/taskReducer";
import { Task } from "../types/task";

const AddTaskForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [finishDate, setFinishDate] = useState<string>(""); // New state for finish date
  const dispatch = useDispatch();

  const handleAddTask = () => {
    const newTask: Task = {
      id: Math.random().toString(36).substring(7),
      title,
      description,
      completed: false,
      finishDate,
    };
    dispatch(addTask(newTask));
    setTitle("");
    setDescription("");
    setFinishDate("");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8 sm:mt-12 md:mt-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-700 mb-6">
        Add a New Task
      </h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="date" // Input type for date
          value={finishDate}
          onChange={(e) => setFinishDate(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddTask}
          className="w-full py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-300"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default AddTaskForm;
