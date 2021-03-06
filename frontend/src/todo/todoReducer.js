const initalState = {
    description: "",
    list: []
}

export default (state = initalState, action) =>{
    switch(action.type){
        case "CHANGE_DESCRIPTION":
            return {...state, description: action.payload}
        case "TODO_SEARCHED":
            return {...state, list: action.payload.data}
        case "TODO_ADDED":
            return {...state, list: action.payload.data}
        case "TODO_CLEAR":
            return {...state, description: ""}
        default: 
            return state
    }
}