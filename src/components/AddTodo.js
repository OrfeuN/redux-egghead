import React from 'react';

const AddTodo = ({onAddClick}) => {
    let newTodoInput;
    return (
        <div>
            <input ref={(node) => {newTodoInput = node;}} />
                <button onClick={() => {
                    onAddClick(newTodoInput.value);
                    newTodoInput.value = '';
                    }}>Add Todo</button>
                
        </div>
    );
};

export default AddTodo;