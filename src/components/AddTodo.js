import React from 'react';
import PropTypes from 'prop-types';

let todoId = 0;

const AddTodo = (props, {store}) => {
    let newTodoInput;
    return (
        <div>
            <input ref={(node) => {newTodoInput = node;}} />
                <button onClick={() => {
                    store.dispatch({
                        type: 'ADD_TODO'
                        , text: newTodoInput.value
                        , id: todoId++
                    });
                    newTodoInput.value = '';
                    }}>Add Todo</button>
                
        </div>
    );
};

AddTodo.contextTypes = {
    store: PropTypes.object
    , getVisibleTodos: PropTypes.func
};

export default AddTodo;