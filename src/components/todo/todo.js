import React from 'react';
import TodoList from '../todo-list/todo-list';
import './todo.css';
import TodoResource from "../../api/TodoResource.js";

class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todoList : []
        };
    }
    componentDidMount = ()=>{
        TodoResource.getAll()
        .then(res => res.json())
        .then(res => {
            this.props.initializeList(res._embedded.todos);
            console.log(res);
        });
    }

    addList = () => {
        let newTodo = {
            content : this.props.data,
            status : "active"
        }
        this.props.addTodoList(newTodo);
    }
    handleChange = (event) => {
        this.props.updateInputValue(event.target.value);
    }
    render(){
        let todoList = [];
        return(
            <div className="todo">
                <input type="text" value = {this.props.data} onChange={this.handleChange}></input>
                <button onClick = {this.addList}>Add</button>
                <ol>
                    <TodoList listDetail={this.props.todoList} />
                </ol>
            </div>
        );
    }
}

export default Todo;