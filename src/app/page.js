import AddTodo from "./addTodo";

export default function Home() {
  return (
    <>
      <main className="min-h-screen items-center justify-between p-24">
        <label htmlFor="name">TODO作成しよ</label>
        <div className="flex">
          <input type="text" name="todo-form" id="todo-id" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="タスクを入力してください" />
          {/* <button actions= {AddTodo} className="inline-flex h-12 items-center justify-center rounded-md bg-sky-500 px-6 text-sm text-neutral-50 transition active:scale-110 ">TODO追加</button> */}
          <AddTodo />
        </div>
      </main>
    </>
  );
}
