import React, { useEffect, useState } from 'react'

function HOC(WrappedComponent) {
    function UpdatedComponent(props) {
        // console.log(props);
        const [flag, setFlag] = useState(false)
        useEffect(() => {
            if (true) {
                setFlag(true)
            }
        }, [])
        return (
            <>
                {flag ? <WrappedComponent {...props} />
                    : <></>}
            </>
        )
    }
    return UpdatedComponent
}

export default HOC