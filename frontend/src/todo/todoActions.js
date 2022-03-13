import axios from "axios"

const URL = "http://localhost:3003/api/todos"

export const changeDescription = (event) => ({
    type: "CHANGE_DESCRIPTION",
    payload: event.target.value
})

export const search = () => {
    const request = axios.get(`${URL}?sort=-createdAt`)
    return {
        type: "TODO_SEARCHED",
        payload: request
    }
}

// middleware redux-multi - Não utilizado porque executa as multiplas actions ao mesmo tempoS 

/* export const add = (description) => {
    const request = axios.post(URL, {description}).then(resp => this.refresh())
    return [
        {
            type: "TODO_ADDED",
            payload: request
        },
        search()
    ]  
} */

export const add = (description) => {
    return dispatch => {
        axios.post(URL, {description})
        .then(resp => dispatch({type: "TODO_ADDED", payload: resp.data}))
        .then(resp => dispatch(search()))
    }
}