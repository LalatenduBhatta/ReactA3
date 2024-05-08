import React, { useRef, useState } from 'react'

function Circle() {
    const [circle, setCircle] = useState([])
    const count = useRef(0)
    const createCircle = () => {
        let obj = { id: count.current++, isSelected: false }
        setCircle([...circle, obj])
    }
    const selectCircle = (id) => {
        // console.log(id);
        let updatedCircle = circle.map(ele => {
            if (ele.id == id) {
                ele.isSelected = !ele.isSelected
            }
            return ele
        })
        setCircle(updatedCircle)
    }
    const deleteCircle = () => {
        let newCircles = circle.filter(ele => !ele.isSelected)
        setCircle(newCircles)
    }
    return (
        <>
            {console.log(circle)}
            <div>
                <button onClick={createCircle}>CREATE</button>
                <button onClick={deleteCircle}>DELETE</button>
            </div>
            <div className="info">
                <h3>NO OF CIRCLES:{circle.length}</h3>
                <h3>NO OF SELECTED-CIRCLES:{circle.filter(ele => ele.isSelected).length}</h3>
            </div>
            <div className="circles" style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
                {circle.map(ele => {
                    return <div className='circle' key={ele.id} style={{
                        height: "100px",
                        width: "100px",
                        borderRadius: "50%",
                        background: ele.isSelected ? "red" : "green"
                    }}
                        onClick={() => selectCircle(ele.id)}
                    >
                    </div>
                })}
            </div>
        </>
    )
}

export default Circle