import React, { useState } from 'react'

function TaskInput({ dispatch, dark }) {
    let [inputData, setInputData] = useState("")
    const addTask = () => {
        if (!inputData.trim()) {
            alert("WRITE TASK BEFORE ADDING ")
        }
        else {
            dispatch({ type: "add", payload: { task: inputData.trim(), isChecked: false } })
            setInputData("")
        }
    }
    return (
        <>
            <div className="input"
                style={{ backgroundColor: dark && "gray" }}>
                <input type="text" name="task" id="task" autoFocus
                    placeholder='ENTER YOUR TASK HERE.....'
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)} />
                <button onClick={addTask}>ADD TASK</button>
            </div>
        </>
    )
}

export default TaskInput