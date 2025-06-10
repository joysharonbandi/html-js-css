import React, { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import TaskComponent from "./TaskComponent";
import { useNavigate } from "react-router";

export default function Tasks() {
  const { tasks, setTasks } = useContext(TaskContext);
  const navigate = useNavigate();
  console.log(tasks, "task12");
  return (
    <div className="p-2">
      <div className="flex items-center gap-2">
        <div
          className="text-[32px]"
          onClick={() => {
            navigate(-1);
          }}
        >
          {" "}
          &lsaquo;{" "}
        </div>
        <strong className="text-[20px]"> Task List</strong>
      </div>

      {tasks?.map((task, index) => {
        return (
          <TaskComponent
            task={task}
            onChange={(e) => {
              console.log(e, "evnet");
              setTasks((prev) => {
                prev[index] = { ...prev[index], status: e ? "completed" : "pending" };

                return [...prev];
              });
            }}
          />
        );
      })}
    </div>
  );
}


