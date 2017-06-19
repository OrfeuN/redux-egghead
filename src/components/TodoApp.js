import React, { Component } from 'react';

import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Footer from './Footer';

let todoId = 0;
const TodoApp = ({todos, visibilityFilter, store, getVisibleTodos}) => {
    return (
            <div>
                <AddTodo onAddClick={(value) => {
                    store.dispatch({
                        type: 'ADD_TODO'
                        , text: value
                        , id: todoId++
                    });
                }} />
                <TodoList onTodoClick={(id) => {
                    store.dispatch({
                            type: 'TOGGLE_TODO'
                            , id: id
                        }); 
                    }} 
                    todos={getVisibleTodos(todos, visibilityFilter)} />
                    <Footer store={store} />
            </div>
    );
}

export default TodoApp;