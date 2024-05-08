import { useCount } from "../context/Context"

function Component3() {
    let { count, setCount } = useCount()
    return (
        <>
            <h4>Component3</h4>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Change count</button>
        </>
    )
}

export default Component3