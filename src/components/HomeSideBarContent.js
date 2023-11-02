import React, { useEffect, useState } from "react"
import { isHighSelected, isLowSelected, isMediumSelected, isUrgentSelected } from "../appState/taskFilterAtoms";
import { useRecoilState } from "recoil";



export function HomeSideBarContent() {

    const [lowSelected, setLowSelected] = useRecoilState(isLowSelected);
    const [mediumSelected,setMediumSelected]= useRecoilState(isMediumSelected);
    const [highSelected,setHighSelected]= useRecoilState(isHighSelected)
    const [urgentSelected,setUrgentSelected]= useRecoilState(isUrgentSelected)

    function handleLowChange(){
        setLowSelected(!lowSelected)
    }

    function handleMediumChange(){
        setMediumSelected(!mediumSelected)
    }

    return (
        <>
            <h4> Filter by priority </h4>
            <input onChange={handleLowChange} type="checkbox" id="Low" name="Low" checked={lowSelected} />
            <label htmlFor="Low"> Low</label> <br />


            <input onChange={handleMediumChange} checked={mediumSelected} type="checkbox" id="Medium" name="Medium" value="Medium" />
            <label htmlFor="Medium"> Medium</label> <br />

            <input type="checkbox" id="High" name="High" value="High" />
            <label htmlFor="High"> High</label> <br />

            <input type="checkbox" id="Urgent" name="Urgent" value="Urgent" />
            <label htmlFor="Urgent"> Urgent</label> <br />

            <h4> Filter by Status </h4>
            <input type="checkbox" id="in-progress" name="in-progress" value="In progress" />
            <label htmlFor="in-progress"> In progress</label> <br />
            <input type="checkbox" id="done" name="done" value="Done" />
            <label htmlFor="done"> Done</label> <br />
            <input type="checkbox" id="backlog" name="backlog" value="Backlog" />
            <label htmlFor="backlog"> Backlog</label> <br />
            <input type="checkbox" id="canceled" name="canceled" value="Canceled" />
            <label htmlFor="canceled"> Canceled</label> <br />

            <h4> Filter by labels </h4>

            <input type="checkbox" id="ui" name="ui" value="UI/UX" />
            <label htmlFor="ui"> UI/UX</label> <br />
            <input type="checkbox" id="frontend" name="frontend" value="Frontend" />
            <label htmlFor="front-end"> Frontend</label> <br />
            <input type="checkbox" id="backend" name="backend" value="Backend" />
            <label htmlFor="backend"> Backend</label> <br />
            <input type="checkbox" id="docs" name="docs" value="docs" />
            <label htmlFor="docs"> Documentation</label> <br />
            <input type="checkbox" id="testing" name="testing" value="testing" />
            <label htmlFor="testing"> Testing</label> <br />
        </>
    )
}