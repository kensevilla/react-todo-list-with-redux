const initialState = {
    inputValue : "",
    todoList : []
};

export default (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_INPUT_VALUE":
        return {...state, inputValue: action.payload};
        case "INITIALIZE_LIST":
            return {...state, todoList: action.payload};
        case "ADD_TODO_LIST":
            return {...state,
                todoList: [...state.todoList, action.payload]
            };
        default:
            return state;
    }
};
