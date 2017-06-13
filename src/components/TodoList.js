import React from 'react';

import Todo from './Todo';

const TodoList = ({todos, onTodoClick}) => {
    return (
        <ul>
            {todos.map((todo) =>
                <Todo key={todo.id} 
                text={todo.text} 
                completed={todo.completed}
                onClick={() => {onTodoClick(todo.id)}} />
            )}
        </ul>
    );
};

export default TodoList;