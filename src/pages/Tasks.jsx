// src/pages/Tasks.jsx
import React from "react";
import TaskManager from "../components/TaskManager.jsx";
import Card from "../components/Card";

export default function Tasks() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card title="Task Manager" className="mb-4">
        <p className="text-gray-600 dark:text-gray-300">
          Add new tasks, mark them as complete, delete, or filter them. Your
          tasks are saved automatically using local storage.
        </p>
      </Card>

      {/* Main Task Manager component */}
      <TaskManager />
    </div>
  );
}
