const reducer = (state, action) => {
    switch (action.type) {
        case "inc":
            return state + 1;
        case "dec":
            return state - 1
        case "inc10":
            return state + 10
        case "dec10":
            return state - 10
        case "input":
            return state + Number(action.payload)
        default:
            return state
    }
}
export default reducer