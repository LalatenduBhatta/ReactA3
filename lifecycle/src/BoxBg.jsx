import React, { useEffect, useRef, useState } from 'react'

function setColor() {
    return `rgb(${Math.trunc(Math.random() * 255)},${Math.trunc(Math.random() * 255)},${Math.trunc(Math.random() * 255)})`
}

function BoxBg() {
    const [boxes, setBoxes] = useState([])
    const [isStart, setIsStart] = useState(false)
    const count = useRef(0)
    useEffect(() => {
        let newArr = Array.from(new Array(100)).map(e => "")
        setBoxes(newArr)
    }, [])
    useEffect(() => {
        let interval
        if (isStart) {
            interval = setInterval(() => {
                let x = count.current++
                if (x === 100) {
                    count.current = 0
                }
                let newBoxes = boxes.map((box, i) => {
                    if (i == x) {
                        return setColor()
                    } else return box
                })
                setBoxes(newBoxes)
                // console.log(newBoxes);
            }, 500)
        }
        else {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [isStart, boxes])
    return (
        <>
            <div className="buttons">
                <button onClick={() => setIsStart(true)}>START</button>
                <button onClick={() => setIsStart(false)}>STOP</button>
                <button>RESET</button>
            </div>
            <div className="boxes" style={{
                margin: "50px 0",
                display: "flex",
                flexWrap: "wrap",
                gap: "20px"
            }}>
                {
                    boxes.map((box, i) => {
                        return (
                            <div className="box" key={i}
                                style={{
                                    height: "80px",
                                    width: "80px",
                                    boxShadow: "0 0 10px black",
                                    backgroundColor: box
                                }}>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default BoxBg