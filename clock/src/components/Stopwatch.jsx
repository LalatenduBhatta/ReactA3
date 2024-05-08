import React, { useEffect, useState } from 'react'

function Stopwatch() {
    const [millisec, setMillisec] = useState(0)
    const [isStart, setIsStart] = useState(false)
    useEffect(() => {
        let interval
        if (isStart) {
            interval = setInterval(() => {
                setMillisec((prev) => prev + 1)
            }, 10)
        }
        else {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [isStart])

    let ms = millisec % 100
    let sec = Math.trunc(millisec / 100 % 60)
    let min = Math.trunc(millisec / 100 / 60 % 60)
    return (
        <>
            <div className="stopwatch">
                <h1 align="center">STOPWATCH</h1>

                <div className="screen">
                    <div className="clock">
                        <div className="min">{min < 10 ? "0" + min : min}</div>:
                        <div className="sec">{sec < 10 ? "0" + sec : sec}</div>:
                        <div className="m-sec">{ms < 10 ? "0" + ms : ms}</div>
                    </div>
                    <div className="button">
                        <button onClick={() => setIsStart(!isStart)}>{isStart ? "STOP" : "START"}</button>
                        <button onClick={() => { setIsStart(false); setMillisec(0) }}>RESET</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Stopwatch