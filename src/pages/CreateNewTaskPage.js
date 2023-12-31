import React, { useState } from "react";
import { Labels } from "../components/Labels";


export function CreateNewTaskPage() {

    const [newTaskInfo, setNewTaskInfo] = useState({
        title: "",
        description: "",
        priority: "",
        status: "",
        user: "",
        dueDate: "",
        labels: [],

    })

    const [selectedLabels, setSelectedLabels] = useState([])


    function handleNewTaskInfo(evt) {
        setNewTaskInfo(function (prevState) {
            return { ...prevState, [evt.target.name]: evt.target.value }
        })
    }


    return (
        <div className="CreateNewTaskPage">
            <div style={{ textAlign: 'center' }} className="new-task-heading">
                <h2> Create new task</h2>
            </div>
            <div className="new-task-form">
                <label>  Task title   </label>
                <input name="title" onChange={handleNewTaskInfo} placeholder="Title" className="input small primary filled" type="text" />

                <div className="new-task-second-row" style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: "center",
                    gap: '0.5rem'
                }}>

                    <label>Priority</label>
                    <input onChange={handleNewTaskInfo} name="priority" type="text" list='select-priority' className="input small primary filled" />
                    <datalist id='select-priority' >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                        <option value="Urgent">Urgent</option>
                    </datalist>


                    <label>Status</label>
                    <input onChange={handleNewTaskInfo} name="status" type="text" list="select-status" className="input small primary filled" />
                    <datalist id='select-status'>
                        <option value="In progress">In progress</option>
                        <option value="Backlog"> Backlog</option>
                        <option value="Done">Done</option>
                    </datalist>

                    <label> Assign to</label>
                    <input onChange={handleNewTaskInfo} name="user" type="text" className="input small primary filled" />

                    <label> Due date</label>
                    <input onChange={handleNewTaskInfo} name="dueDate" type="date" className="input small primary filled" />
                </div>

                <label> Description (supports markdown) </label>
                <textarea className="input primary filled" onChange={handleNewTaskInfo} name="description" rows={10} />

                <p> Select labels</p>
                <Labels selectedLabels={selectedLabels} setSelectedLabels={setSelectedLabels}/>
                <button className="btn primary small filled">Save</button>

            </div>

        </div>
    )
}