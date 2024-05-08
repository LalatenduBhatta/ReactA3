import React from "react"

const Third = () => {
    let x = 10
    return (
        <React.Fragment>
            {
                x > 10 ?
                    <h1>{x} is greater</h1>
                    :
                    <h1>{x} is smaller</h1>
            }
            {
                x > 10 && <h1>{x} IS THE GREATER NUMBER</h1>
            }
        </React.Fragment>
    )
}

export default Third;