import React from "react";

export default function TaskComponent({ task, onChange = () => {} }) {
  return (
    <div>
      <div className="border-1 border-black rounded-2xl p-4 mb-4 flex justify-between">
        <div>
          <p>Task Name: {task.title}</p>
          <p>Description: {task.description}</p>
          <p>Priority: {task.priority}</p>
          <p>Status: {task.status}</p>
        </div>

        <input
          type="checkbox"
          className="w-10 h-10"
          onChange={(e) => {
            onChange(e.target.checked);
          }}
        ></input>
      </div>
    </div>
  );
}


const testCFunctiion =(e)=>{
console.log(e)

}


testCFunctiion("jpy")