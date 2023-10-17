// Modal as a separate component
import { useEffect, useRef, useState } from "react";
import Markdown from 'react-markdown'
import { useLocation, useNavigate, useNavigation } from "react-router-dom";


export function TaskPage() {
    const location = useLocation();
    const selectedTask = location.state

    const [comments, setComments] = useState([{
        comment: "### Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        commentedBy: 'Arun',
        date: new Date().toISOString()
    },

    {
        comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        commentedBy: 'Arun',
        date: new Date().toISOString()

    },
    {
        comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        commentedBy: 'Arun',
        date: new Date().toISOString()

    },
    {
        comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        commentedBy: 'Arun',
        date: new Date().toISOString()

    }
    ])
    // const ref = useRef();

    // useEffect(() => {
    //     if (isModalOpen) {
    //         ref.current?.showModal();
    //     } else {
    //         ref.current?.close();
    //     }
    // }, [isModalOpen]);


    const commentElements = comments.map(function (item, index) {

        return (
            <div key={index.toString()} className="comment-item">
                <Markdown>{item.comment}</Markdown>
                {/* <p>{item.comment}</p> */}
                <div className="comment-footer">
                    <span className="commented-by">{item.commentedBy}</span>
                    <span className="commented-date">{new Date(item.date).toDateString()}</span>
                </div>


            </div>
        )
    })

    function addClass(priority) {
        if (priority === "High") {
            return "high";
        } else if (priority === "Low") {
            return "low";
        } else if (priority === "Medium") {
            return "medium";
        } else if (priority === "Urgent") {
            return "urgent";
        }
        else {
            return ''
        }
    }



    return (
        <div className="TaskPage">
            <div className="selected-task-page-header">
                <h2> {selectedTask.title}</h2>
                <div className='username-box' style={{ display: 'flex', justifyContet: 'center', flexDirection: 'row', alignItems: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                    <p>  {selectedTask.user}</p>
                </div>
                <div className='task-status-box' style={{ display: 'flex', justifyContet: 'center', flexDirection: 'row', alignItems: 'center' }}>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list-todo"><rect x="3" y="5" width="6" height="6" rx="1" /><path d="m3 17 2 2 4-4" /><path d="M13 6h8" /><path d="M13 12h8" /><path d="M13 18h8" /></svg>
                    <p>  {selectedTask.status}</p>
                </div>
                <p className={addClass(selectedTask.priority)} >  {selectedTask.priority}</p>
                <p>  {new Date(selectedTask.dueDate).toDateString()}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-edit"><path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5"/><polyline points="14 2 14 8 20 8"/><path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z"/></svg>

            </div>

            <div className="selected-task-page-body">
                <p className="task-description">
                    {selectedTask.description}
                </p>

                <div className="selected-task-page-comments-container">
                    {commentElements}
                </div>



                <textarea style={{ width: '100%' }} className="add-comment-box" placeholder="Add a new comment" rows={5} cols={100} />
                <button> Add comment </button>
            </div>

            <div className="selected-task-modal-footer">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
