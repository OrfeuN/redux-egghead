import React, { Component } from 'react';

import VisibleTodoList from './VisibleTodoList';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Footer from './Footer';


const TodoApp = ({store, getVisibleTodos}) => {
    return (
            <div>
                <AddTodo store={store} />
                <VisibleTodoList store={store} getVisibleTodos={getVisibleTodos}  />
                <Footer store={store} />
            </div>
    );
}

export default TodoApp;