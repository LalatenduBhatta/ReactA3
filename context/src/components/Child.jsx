import { useUser } from "../context/userContext"

function Child() {
    let data = useUser()
    console.log(data);
    return (
        <div>Child</div>
    )
}

export default Child