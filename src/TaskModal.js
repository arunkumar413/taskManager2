// Modal as a separate component
import { useEffect, useRef, useState } from "react";
import Markdown from 'react-markdown'


export function TaskModal({ isModalOpen, closeModal, selectedTask }) {

    const [comments, setComments] = useState([{
        comment: "### Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        commentedBy: 'Arun',
        date: new Date().toLocaleString()
    },

    {
        comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        commentedBy: 'Arun',
        date: new Date().toLocaleString()

    },
    {
        comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        commentedBy: 'Arun',
        date: new Date().toLocaleString()

    },
    {
        comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        commentedBy: 'Arun',
        date: new Date().toLocaleString()

    }
    ])
    const ref = useRef();

    useEffect(() => {
        if (isModalOpen) {
            ref.current?.showModal();
        } else {
            ref.current?.close();
        }
    }, [isModalOpen]);


    const commentElements = comments.map(function (item, index) {

        return (
            <div key={index.toString()} className="comment-item">
                <Markdown>{item.comment}</Markdown>
                {/* <p>{item.comment}</p> */}

            </div>
        )
    })

    return (
        <dialog className="task-modal" ref={ref} onCancel={closeModal}>
            <div className="selected-task-modal-header">
                <h2> {selectedTask.title}</h2>
                <p>  {selectedTask.user}</p>
                <p>  {selectedTask.status}</p>
                <p>  {selectedTask.priority}</p>
            </div>

            <div className="selected-task-modal-body">
                <p className="task-description">
                    {selectedTask.description}
                </p>

                <div className="selected-task-modal-comments-container">
                    {commentElements}
                    <textarea placeholder="Enter your comments here" rows={5} cols={100} />
                    <button> Add comment </button>

                </div>
            </div>

            <div className="selected-task-modal-footer">
                <div></div>
                <div></div>
                <div></div>
                <button className="button-close" onClick={closeModal}> Close </button>
            </div>
        </dialog>
    );
}
