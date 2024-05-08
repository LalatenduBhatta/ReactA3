import React, { useState } from 'react'
import EditModal from './EditModal'
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";


function TaskDisplay({ tasks, dispatch, dark }) {
    const [isModal, setISModal] = useState(false)
    const [editTask, setEditTask] = useState({})
    const [isComplete, setIsComplete] = useState(false)

    const editHandeler = (task, index) => {
        setISModal(true)
        setEditTask({ task, index })
    }
    const closeModal = () => {
        setISModal(false)
    }
    return (
        <>
            <div className='btns'>
                <button onClick={() => setIsComplete(false)}>Pendings</button>
                <button onClick={() => setIsComplete(true)}>Completed</button>
            </div>
            <div className="container">
                {!isComplete &&
                    tasks.map((ele, index) => {
                        if (!ele.isChecked) {
                            return (
                                <div className="card" key={index}
                                    style={{ boxShadow: dark && "0 0 5px white" }}>
                                    <div className="checkbox">
                                        <input type="checkbox" name="check" id="check"
                                            checked={ele.isChecked}
                                            onChange={() => dispatch({ type: "checked", payload: index })}
                                        />
                                    </div>
                                    <h3>{ele.task}</h3>
                                    <div className='buttons'>
                                        <button
                                            onClick={() => dispatch({ type: "delete", payload: index })}
                                        >
                                            <RiDeleteBin5Fill />
                                        </button>
                                        <button onClick={() => editHandeler(ele.task, index)}>
                                            <FaEdit />
                                        </button>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
                {isComplete &&
                    tasks.map((ele, index) => {
                        if (ele.isChecked) {
                            return (
                                <div className="card" key={index}
                                    style={{ boxShadow: dark && "0 0 5px white", background: "green" }}>
                                    <div className="checkbox">
                                        <input type="checkbox" name="check" id="check"
                                            checked={ele.isChecked}
                                            onChange={() => dispatch({ type: "unchecked", payload: index })}
                                        />
                                    </div>
                                    <h3>{ele.task}</h3>
                                    <div className='buttons'>
                                        <button
                                            onClick={() => dispatch({ type: "delete", payload: index })}
                                        >
                                            <RiDeleteBin5Fill />
                                        </button>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
            <div>
                {isModal && <EditModal closeModal={closeModal} editTask={editTask} dispatch={dispatch} />}
            </div>
        </>
    )
}

export default TaskDisplay