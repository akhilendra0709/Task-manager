# Task Manager Application

A simple yet powerful task manager app built with **React**, **TypeScript**, **Redux Toolkit**, and **Tailwind CSS**. This app allows users to manage their tasks efficiently with features like adding, deleting, toggling completion status, and updating task details. The app persists user data with **Redux Persist**, ensuring that the tasks remain even after refreshing the page.

## Features 🚀

- **Add Tasks**: Add new tasks with a title and description.
- **Delete Tasks**: Easily remove tasks from the list.
- **Toggle Completion**: Mark tasks as completed or pending.
- **Update Tasks**: Edit the title and description of existing tasks.
- **Persist Data**: Thanks to **Redux Persist**, your tasks will be saved even if the page is refreshed.

## Tech Stack 💻

- **React.js**: A powerful library for building user interfaces.
- **TypeScript**: Type safety and better developer experience.
- **Redux Toolkit**: Efficient state management with Redux.
- **Redux Persist**: Persistent state across page refreshes.
- **Tailwind CSS**: Utility-first CSS framework for styling.

## Setup and Installation 🛠️

### 1. Clone the repository

```bash
git clone https://github.com/akhilendra0709/Task-manager.git
```
### 2. Navigate to the project folder
```bash
cd task-manager
```
### 3. Install Dependencies
```bash
npm install
```
### 4. Run the application
```bash
npm run dev
```
#### This will launch the application in your default browser at http://localhost:3000.

## Folder Structure 📂
```bash
src/
├── assets/             # Static assets like images, fonts, etc.
├── components/         # Reusable components (TaskList, TaskItem, etc.)
├── redux/              # Redux-related files (taskSlice.js)
├── types/              # TypeScript types (task.ts)
├── App.css             # Global styles for the app
├── App.tsx             # Main App component
├── index.css           # Entry point for global styles
├── main.tsx            # Main entry point for the app (ReactDOM rendering)
└── vite-env.d.ts       # Vite environment settings (if using Vite)

```

## How It Works ⚙️
### Redux Slice (```taskSlice```)
This application manages the task state using Redux Toolkit with a taskSlice that contains:

- addTask: Adds a new task to the list.
- deleteTask: Deletes a task by its ID.
- toggleTask: Toggles the completed status of a task.
- updateTask: Updates the title and description of an existing task.

## Redux Persist
The app utilizes Redux Persist to store the task state across page refreshes. This means that even after you refresh the page, the tasks remain intact, providing a seamless user experience.

## Contributing 🤝
I welcome contributions to make this app even better! If you want to contribute, please follow these steps:

- Fork the repository.
- Create a new branch (git checkout -b feature-name).
- Make your changes.
- Commit your changes (git commit -m 'Add new feature').
- Push to your branch (git push origin feature-name).
- Open a pull request.

## Acknowledgements 🎉
- React and TypeScript for providing the framework and type safety.
- Redux Toolkit for simplifying state management.
- Tailwind CSS for making styling fast and fun.
- Redux Persist for ensuring data persistence across refreshes.

### Enjoy using the Task Manager app! Feel free to reach out if you have any questions or suggestions. 😊