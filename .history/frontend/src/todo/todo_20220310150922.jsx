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

        this.refresh()
    }

    refresh(){
        axios.get(`${URL}?sort=-createdAt`)
        .then((resp) => this.setState({...this.state, description: ""}))
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd() {
        const description = this.state.description
        console.log(description)
        axios.post(URL, {description}).then(resp => console.log("funcionou"))
    }

    render(){
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <TodoForm description={this.state.description} handleAdd={this.handleAdd} handleChange={this.handleChange}></TodoForm>
                <TodoList></TodoList>
            </div>
        )
    }
}