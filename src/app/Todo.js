"use client"

import React from "react";
import { useState } from "react";

const Todo = () => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    setTaskList([
      ...taskList,
      {
        id: crypto.randomUUID(),
        text: inputText,
      }
    ]);
    setInputText("");
  };

  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <>
      <main className="min-h-screen items-center justify-between p-24">
        <label htmlFor="name">TODO作成しよ</label>
        <div className="flex">
          <input type="text" name="todo-form" id="todo-id" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="タスクを入力してください" value={inputText} onChange={handleChange} />
          <button actions= {Todo} className="inline-flex h-12 items-center justify-center rounded-md bg-sky-500 px-6 text-sm text-neutral-50 transition active:scale-110 " onClick={addTask}>TODO追加</button>
        </div>
        <ul>
          {taskList.map((task) => (
            <li key={task.id}>
              {task.text}
              <button onClick={() => handleDelete(task.id)}>削除</button>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Todo;