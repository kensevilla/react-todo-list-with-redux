import React from 'react';
import './todo-detail.css';
import TodoResource from '../../api/TodoResource.js';
import { Checkbox, Button } from 'antd';
import 'antd/dist/antd.css';

class TodoDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            content : this.props.listDetail.content, 
            status : this.props.listDetail.status,
            id : this.props.listDetail.id
        }
    }
    changeStatus = () =>{
        if(this.state.status === "active"){
            this.state.status = "completed";
            this.setState({state : this.state.status});
        }
        else{
            this.state.status = "active";
            this.setState({state : this.state.status});
        }

        TodoResource.updateTodo(this.state)
        .then(res=>res.json())
        .then(res => console.log(res));
    }
   render(){
       return(
        <li className={this.state.status}>
            <Checkbox onClick={this.changeStatus} checked={this.state.status === "completed" ? true : false} ></Checkbox>
            <span>{this.state.content}</span>
         </li>
       );
   } 
}

export default TodoDetail;