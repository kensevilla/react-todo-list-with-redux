import React from 'react';
import TodoList from '../todo-list/todo-list';
import './todo.css';

class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todoList : [],
            inputValue : ""
        };
    }
    addList = () => {
        this.state.todoList.push({
            content : this.state.inputValue,
            status : "unchecked"
        });
        this.setState({todoList : this.state.todoList});
        console.log(this.state.todoList);
    }
    handleChange = (event) => {
        this.setState({inputValue: event.target.value});
    }
    render(){
        let todoList = [];
        return(
            <div className="todo">
                <input type="text" value = {this.state.inputValue} onChange={this.handleChange}></input>
                <button onClick = {this.addList}>Add</button>
                <ol>
                    <TodoList listDetail={this.state.todoList} />
                </ol>
            </div>
        );
    }
}

export default Todo;