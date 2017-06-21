import React from 'react';
let todoId = 0;

const AddTodo = ({store}) => {
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

export default AddTodo;