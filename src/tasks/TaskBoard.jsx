import React, { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import SearchBox from "./SearchBox";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

const TaskBoard = () => {
  const defaultTasks = {
    id: crypto.randomUUID(),
    title: "learn react",
    description: "react is used for user interactivity ",
    tags: ["web", "html", "css"],
    priority: "high",
    isFavourite: true,
  };
  function handleAddTask(task) {
    console.log("adding a task", task);
  }
  const [tasks, setTasks] = useState([defaultTasks]);
  const [showAddModal, setShowAddModal] = useState(false);
  return (
    <section className="mb-20" id="tasks">
      {showAddModal && <AddTaskModal onSave={handleAddTask}></AddTaskModal>}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchBox></SearchBox>
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction onAddClick={() => setShowAddModal(true)} />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
