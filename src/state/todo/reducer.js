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
                todoList: [...state.todoList, action.payload]};
        case "UPDATE_TODO":
            return {...state,
                todoList: state.todoList.map(list => {
                    if(list.id === action.payload.id){
                        list.status = action.payload.status;
                    }
                    return list;
                })
            };
        default:
            return state;
    }
};
