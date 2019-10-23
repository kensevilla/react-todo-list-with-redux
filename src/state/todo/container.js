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
          payload: newTodo
        }))
});

const mapStateToProps = state => ({
    data: state.todoreducer.inputValue,
    todoList : state.todoreducer.todoList
 });

export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(Todo);  