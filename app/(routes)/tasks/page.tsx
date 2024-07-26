"use client";

import { cn } from "@/app/libs/utils";
import React, { ChangeEvent, useEffect, useState } from "react";

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

  const ToggleCompleted = (id: number, e: ChangeEvent<HTMLInputElement>) => {
    setTasks((prev) => {
      if (tasks === null || !tasks) return prev;

      const newTodos = prev.map((task) =>
        task.id === id ? { ...task, completed: e.target.checked } : task,
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

      <article className="mx-auto max-w-[500px]">
        {tasks?.find((task) => !task.completed) && (
          <h2 className="mb-4 mt-2 text-xl font-semibold">To do</h2>
        )}
        <section className="space-y-2">
          {tasks?.map(
            (task) =>
              !task.completed && (
                <Task
                  ToggleCompleted={ToggleCompleted}
                  key={task.id}
                  id={task.id}
                  todo={task.todo}
                  completed={task.completed}
                />
              ),
          )}
        </section>

        {tasks?.find((task) => task.completed) && (
          <h2 className="mb-4 mt-2 text-xl font-semibold">Completed</h2>
        )}
        <section className="space-y-2">
          {tasks?.map(
            (task) =>
              task.completed && (
                <Task
                  ToggleCompleted={ToggleCompleted}
                  key={task.id}
                  id={task.id}
                  todo={task.todo}
                  completed={task.completed}
                />
              ),
          )}
        </section>
      </article>
    </main>
  );
};
export default TasksPage;

const Task = ({
  id,
  todo,
  completed,
  ToggleCompleted,
}: {
  id: number;
  todo: string;
  completed: boolean;
  ToggleCompleted: (id: number, e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-full border-2 border-secondary-100 bg-secondary-50 px-4 py-1 shadow-sm",
        {
          "opacity-60": completed,
        },
      )}
    >
      <input
        checked={completed}
        type="checkbox"
        onChange={(e) => ToggleCompleted(id, e)}
      />
      <h2 className="line-clamp-1 font-medium">{todo}</h2>
    </div>
  );
};
