
export function todoReducer(state, action) {
    switch (action.type) {
        case "add":
            localStorage.setItem("todoList", JSON.stringify([...state, action.payload]))
            return [...state, action.payload]
        case "delete":
            let newState = state.filter((e, i) => i !== action.payload)
            localStorage.setItem("todoList", JSON.stringify(newState))
            return newState
        case "edit":
            let updatedState = state.map((e, i) => {
                if (i == action.payload.index) {
                    e.task = action.payload.task
                }
                return e
            })
            localStorage.setItem("todoList", JSON.stringify(updatedState))
            return updatedState;
        case "checked":
            let checkedState = state.map((ele, i) => {
                if (i == action.payload) {
                    ele.isChecked = true
                }
                return ele;
            })
            localStorage.setItem("todoList", JSON.stringify(checkedState))
            return checkedState;
        case "unchecked":
            let uncheckedState = state.map((ele, i) => {
                if (i == action.payload) {
                    ele.isChecked = false
                }
                return ele;
            })
            localStorage.setItem("todoList", JSON.stringify(uncheckedState))
            return uncheckedState;
        default:
            return state;
    }
}