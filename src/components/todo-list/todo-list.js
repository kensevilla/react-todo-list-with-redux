import React from 'react';
import TodoDetail from '../todo-detail/todo-detail';

class TodoList extends React.Component{
    constructor(props){
        super(props);
    }
    getList = () =>{
        return this.props.listDetail.map(detail => <TodoDetail listDetail={detail} />);
    }
    render(){
        let listDetail = this.getList();
        return(
            <div className='todo-list'>
                {listDetail}
            </div>
        );
    }
}

export default TodoList;