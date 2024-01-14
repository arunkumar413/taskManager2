import React, { useState } from "react";
import { Labels } from "../components/Labels";
import { DropDown } from "../components/DropDown";

export function CreateNewTaskPage() {
    const [selectedOption, setSelectedOption] = useState("Select Priority");
    const [progress, setProgress] = useState("Select progress");





  const [newTaskInfo, setNewTaskInfo] = useState({
    title: "",
    description: "",
    priority: "",
    status: "",
    user: "",
    dueDate: "",
    labels: [],
  });

  const [selectedLabels, setSelectedLabels] = useState([]);

  function handleNewTaskInfo(evt) {
    setNewTaskInfo(function (prevState) {
      return { ...prevState, [evt.target.name]: evt.target.value };
    });
  }



  return (
    <div className="CreateNewTaskPage">
      <div style={{ textAlign: "center" }} className="new-task-heading">
        <h2> Create new task</h2>
      </div>
      <div className="new-task-form">
        <label> Task title </label>
        <input
          name="title"
          onChange={handleNewTaskInfo}selectedValue
          placeholder="Title"
          className="input small primary filled"
          type="text"
        />

        <div
          className="new-task-second-row"
          style={{
            display: "grid",
            // flexDirection: "row",
            gridTemplateColumns:"repeat(8, 1fr)",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <label>Priority</label>

          <DropDown options={["Low", "Medium", "High", "Urgent"]} value={selectedOption} handleSelected={setSelectedOption} />
          {/* <input onChange={handleNewTaskInfo} name="priority" type="text" list='select-priority' className="input small primary filled" />
                    <datalist id='select-priority' >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                        <option value="Urgent">Urgent</option>
                    </datalist> */}

          <label>Status</label>
          <DropDown options={["In progress", "Done", "Backlog"]} value={progress} handleSelected={setProgress} />


          <label> Assign to</label>
          <input
            onChange={handleNewTaskInfo}
            name="user"
            type="text"
            className="input small primary filled"
          />

          <label> Due date</label>
          <input
            onChange={handleNewTaskInfo}
            name="dueDate"
            type="date"
            className="input small primary filled"
          />
        </div>

        <label> Description (supports markdown) </label>
        <textarea
          className="input primary filled"
          onChange={handleNewTaskInfo}
          name="description"
          rows={10}
        />

        <p> Select labels</p>
        <Labels
          selectedLabels={selectedLabels}
          setSelectedLabels={setSelectedLabels}
        />
        <button className="btn primary small filled">Save</button>
      </div>
    </div>
  );
}
