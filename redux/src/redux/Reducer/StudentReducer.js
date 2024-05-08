let initialState = {
    name: "Vicky",
    id: "1001",
    age: 24,
    address: "Bengaluru",
    email: "vicky@gmail.com"
}
const StudentReducer = (state = initialState, action) => {
    let payload = action.payload
    switch (action.type) {
        case "name":
            return { ...state, name: payload }
        case "age":
            return { ...state, age: payload }
        case "address":
            return { ...state, address: payload }
        default:
            return state
    }
}
export default StudentReducer