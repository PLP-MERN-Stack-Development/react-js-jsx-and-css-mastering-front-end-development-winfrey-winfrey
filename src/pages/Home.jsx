// src/pages/Home.jsx
import React from "react";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-400">
        PLP MERN React-Vite App
      </h1>

      <p className="text-gray-600 dark:text-gray-300 max-w-xl mb-6">
        This app demonstrates React component architecture, state management,
        API integration, and Tailwind CSS styling — all wrapped in a clean,
        responsive design.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <Link to="/tasks">
          <Button variant="primary">Manage Tasks</Button>
        </Link>
        <Link to="/users">
          <Button variant="secondary">View Users (API)</Button>
        </Link>
      </div>

      {/* Optional: Example card */}
      <div className="mt-8 max-w-md">
        <Card
          title="Built with React + Tailwind"
          footer="Try switching between light and dark themes!"
        ></Card>
      </div>
    </div>
  );
}
