import React from 'react';
import './todo-detail.css';

class TodoDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {content : this.props.listDetail.content, status : this.props.listDetail.status}
    }
    changeStatus = () =>{
        if(this.state.status === "checked"){
            this.state.status = "unchecked";
            this.setState({state : this.state.status});
        }
        else{
            this.state.status = "checked";
            this.setState({state : this.state.status});
        }
        console.log(this.state.status);
    }
   render(){
       return(
        <li className={this.state.status}>
            <input type="checkbox" onClick={this.changeStatus}></input>
            <span>{this.state.content}</span>
         </li>
       );
   } 
}

export default TodoDetail;