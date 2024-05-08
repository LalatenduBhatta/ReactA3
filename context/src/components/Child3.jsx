import { useContext } from "react"
import { studentContext } from "../context/studentContext"
function Child3() {
    let student = useContext(studentContext)
    console.log(student);
    return (
        <div>Child3</div>
    )
}

export default Child3