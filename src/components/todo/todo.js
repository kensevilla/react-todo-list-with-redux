import React from 'react';
import TodoList from '../todo-list/todo-list';
import './todo.css';
import TodoResource from "../../api/TodoResource.js";
import { Button, Input } from 'antd';
import 'antd/dist/antd.css';

class Todo extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount = ()=>{
        TodoResource.getAll()
        .then(res => res.json())
        .then(res => {
            this.props.initializeList(res._embedded.todos);
            console.log(res);
        });
    }
    onChangeStatus = (thisStatus, thisId) =>{
        console.log(thisStatus, thisId);
        if(thisStatus === "active"){
            thisStatus = "completed";
        }
        else{
            thisStatus = "active";
        }
        let updateTodo = {
            id : thisId,
            status : thisStatus
        }
        this.props.updateTodo(updateTodo);
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
    prepareTodoList = () =>{
        return this.props.todoList.map(detail => 
            <TodoList listDetail={detail} whenChanged={this.onChangeStatus} />
        );
    }
    render(){
        let todoList = this.prepareTodoList();
        return(
            <div className="todo">
                <Input type="text" value = {this.props.data} onChange={this.handleChange}></Input>
                <Button type='primary' onClick = {this.addList}>Add</Button>
                <ol>
                    {todoList}
                </ol>
            </div>
        );
    }
}

export default Todo;