import React, { Component } from 'react';
import PropTypes from 'prop-types';

import VisibleTodoList from './VisibleTodoList';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Footer from './Footer';

const TodoApp = (props, {store, getVisibleTodos}) => {
    return (
            <div>
                <AddTodo store={store} />
                <VisibleTodoList store={store} getVisibleTodos={getVisibleTodos}  />
                <Footer store={store} />
            </div>
    );
}

TodoApp.contextTypes = {
    store: PropTypes.object
    , getVisibleTodos: PropTypes.func
};

export default TodoApp;