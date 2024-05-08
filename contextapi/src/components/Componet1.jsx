import Componet2 from "./Componet2"
import { useCount } from "../context/Context"

function Componet1() {
    const { count, setCount } = useCount()
    return (
        <>
            <h4>Componet 1</h4>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Change Count</button>
            <Componet2 />
        </>
    )
}

export default Componet1