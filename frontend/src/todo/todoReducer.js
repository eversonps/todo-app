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
            return {...state, description: "", list: action.payload.data}
        default: 
            return state
    }
}