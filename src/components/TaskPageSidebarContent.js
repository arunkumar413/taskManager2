import React, { useState } from "react"





export function TaskPageSidebarContent() {

    const [labels, setLabels] = useState(['bug', 'feature', 'enhancement'])
    const labelElements = labels.map(function (item, index) {
        return (
            <span className="tag primary" key={index.toString()}> {item} </span>
        )
    })

    return (
        <>
            <h3> Lables</h3>
            {labelElements}
        </>
    )
}