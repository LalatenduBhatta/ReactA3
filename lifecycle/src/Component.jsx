import React from 'react'

function Component({ name, age, address }) {
    return (
        <>
            <h1>Reused Component</h1>
            <h2>NAME: {name}</h2>
            <h3>AGE: {age}</h3>
            <h4>ADDRESS: {address}</h4>
        </>
    )
}

export default Component