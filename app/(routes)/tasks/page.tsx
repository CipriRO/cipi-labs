"use client";

import { cn } from "@/app/libs/utils";
import { MouseEventHandler, useEffect, useState } from "react";

type Tasks =
  | {
      id: number;
      todo: string;
      completed: boolean;
      userId: number;
    }[]
  | [];

const TasksPage = () => {
  const [tasks, setTasks] = useState<Tasks>([]);

  const ToggleCompleted = (id: number) => {
    setTasks((prev) => {
      if (tasks === null || !tasks) return prev;

      const newTodos = prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      );
      return [...newTodos];
    });
  };

  const getTasks = () => {
    fetch("http://localhost:3000/api/tasks", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => setTasks(data.todos));
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <main>
      <h1 className="mb-4 mt-2 text-2xl font-bold">Tasks</h1>

      <article className="space-y-2 max-w-[500px] mx-auto">
        {tasks?.map((task) => (
          <Task
            onClick={() => ToggleCompleted(task.id)}
            key={task.id}
            id={task.id}
            todo={task.todo}
            completed={task.completed}
          />
        ))}
      </article>
    </main>
  );
};
export default TasksPage;

const Task = ({
  id,
  todo,
  completed,
  onClick,
}: {
  id: number;
  todo: string;
  completed: boolean;
  onClick: (id: number) => void;
}) => {
  return (
    <div
      onClick={() => onClick(id)}
      className={cn(
        "flex items-center justify-between gap-3 rounded-full bg-secondary-50 px-4 py-1 shadow-sm border-2 border-secondary-100",
        {
          "opacity-60": completed,
        },
      )}
    >
      <h2 className="font-medium line-clamp-1">{todo}</h2>
      <button className="text-nowrap">{completed ? 'Remove mark' : 'Mark as completed'}</button>
    </div>
  );
};
