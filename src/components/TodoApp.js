import React, { Component } from 'react';

import VisibleTodoList from './VisibleTodoList';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Footer from './Footer';

const TodoApp = (props) => {
    return (
            <div>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </div>
    );
}

export default TodoApp;