import React, {Component} from "react";
import axios from "axios"

import PageHeader from "../template/pageHeader";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

const URL = "http://localhost:3003/api/todos"

export default class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {description: "", list: ""}
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)

        this.refresh()
    }

    refresh(description = ""){
        const search = description ? `&description__regex=/${description}/`: ""
        axios.get(`${URL}?sort=-createdAt${search}`)
        .then((resp) => this.setState({...this.state, list: resp.data}))
    }

    handleSearch(){ 
        this.refresh(this.state.description)
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd() {
        const description = this.state.description
        console.log(description)
        axios.post(URL, {description}).then(resp => this.refresh())
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`, {description}).then(resp => this.refresh(this.state.description))
    }

    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, {...todo, done: true}).then(resp => this.refresh(this.state.description))
    }

    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo._id}`, {...todo, done: false}).then(resp => this.refresh(this.state.description))
    }

    handerClear(){

    }
    
    render(){
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <TodoForm description={this.state.description} handleAdd={this.handleAdd} handleChange={this.handleChange} handleSearch={this.handleSearch}></TodoForm>
                <TodoList list={this.state.list} handleRemove={this.handleRemove} handleMarkAsDone={this.handleMarkAsDone} handleMarkAsPending={this.handleMarkAsPending}></TodoList>
            </div>
        )
    }
}