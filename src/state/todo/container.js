import { connect } from "react-redux";
import Todo from '../../components/todo/todo.js'
import TodoResource from "../../api/TodoResource.js"
const mapDispatchToProps = dispatch => ({
    updateInputValue: inputValue =>
      dispatch({
        type: "UPDATE_INPUT_VALUE",
        payload: inputValue
      }),
      initializeList : retrievedList =>
        dispatch({  
          type: "INITIALIZE_LIST",
          payload : retrievedList
      }),
      addTodoList: newTodo =>
      TodoResource.createTodo(newTodo)
      .then(res => res.json())
      .then(
        res => 
        dispatch({
          type: "ADD_TODO_LIST",
          payload: {id : res.id,...newTodo, _links: res._links}
        })),
      updateTodo: updatedTodo =>
      TodoResource.updateTodo(updatedTodo)
        .then(res=>res.json())
        .then(res => 
      dispatch({
        type: "UPDATE_TODO",
        payload: updatedTodo
      }))
});

const mapStateToProps = state => ({
    data: state.todoreducer.inputValue,
    todoList : state.todoreducer.todoList,
    todo : state.todoreducer.todo
 });

export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(Todo);  