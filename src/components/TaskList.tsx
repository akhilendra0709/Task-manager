import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Task } from "../types/task";
import {
  deleteTask,
  toggleTask,
  updateTask,
} from "../redux/reducers/taskReducer";

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();

  // Local state to track editing task
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [newTitle, setNewTitle] = useState<string>("");
  const [newDescription, setNewDescription] = useState<string>("");

  const handleEdit = (task: Task) => {
    setEditingTaskId(task.id);
    setNewTitle(task.title);
    setNewDescription(task.description || ""); // Allow empty description if none exists
  };

  const handleSaveEdit = () => {
    if (editingTaskId) {
      dispatch(
        updateTask({
          id: editingTaskId,
          title: newTitle,
          description: newDescription,
        })
      );
      setEditingTaskId(null); // Exit editing mode
      setNewTitle("");
      setNewDescription("");
    }
  };

  const handleDelete = (taskId: string) => {
    // Delete the task and close the editing modal if open
    dispatch(deleteTask(taskId));
    setEditingTaskId(null); // Close the editing modal
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-700 mb-6">
        Task List
      </h2>
      <div className="space-y-4">
        {tasks.map((task: Task) => (
          <div
            key={task.id}
            className={`flex flex-col sm:flex-row items-start justify-between p-4 border rounded-lg shadow-sm ${
              task.completed ? "bg-gray-300" : "bg-white"
            }`}
          >
            <div className="flex-1 mb-4 sm:mb-0">
              {/* Task Title and Description */}
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => dispatch(toggleTask(task.id))}
                  className="h-5 w-5 text-blue-500 rounded"
                />
                <span
                  className={`text-lg ${
                    task.completed
                      ? "line-through text-gray-500"
                      : "text-gray-800"
                  }`}
                >
                  {task.title}
                </span>
              </div>

              {/* Task Description */}
              <div className="relative">
                <p className="text-sm text-gray-600 mt-1 whitespace-normal break-words">
                  {task.description}
                </p>
              </div>
            </div>

            {/* Edit and Delete buttons */}
            <div className="flex space-x-3 items-center">
              <button
                onClick={() => handleEdit(task)}
                className="bg-purple-500 rounded-full hover:bg-purple-600 p-4 transition duration-300"
              >
                ✏️
              </button>
              <button
                onClick={() => handleDelete(task.id)}
                className="bg-red-500 p-4 rounded-full hover:bg-red-600 transition duration-300"
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Task Modal or Inline Edit */}
      {editingTaskId && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Edit Task</h3>
          <div className="space-y-3">
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="New Title"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              placeholder="New Description"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-end space-x-3">
              <button
                onClick={handleSaveEdit}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
              >
                Save
              </button>
              <button
                onClick={() => setEditingTaskId(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskList;
