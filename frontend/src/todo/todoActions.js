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
        .then(resp => dispatch(clear()))
        .then(resp => dispatch(search()))
    }
}

export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: true})
        .then(resp => dispatch(search()))
    }
}

export const markAsPending = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: false})
        .then(resp => dispatch(search()))
    }
}

export const remove = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
        .then(resp => dispatch(search()))
    }
}

export const clear = () =>{
    return {
        type: "TODO_CLEAR"
    }
}