import React from 'react';
import { Checkbox } from 'antd';
import 'antd/dist/antd.css';
import './todo-list.css';
class TodoList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const isCompleted = this.props.listDetail.status === "completed" ? true : false;
        return(
            <li className={this.props.listDetail.status}>
                <Checkbox onClick = {() => this.props.whenChanged(this.props.listDetail.status, this.props.listDetail.id)} checked={isCompleted} ></Checkbox>
                <span>{this.props.listDetail.content}</span>
            </li>
        );
    }
}

export default TodoList;