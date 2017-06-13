import React, { Component } from 'react';

import TodoList from './TodoList';
import AddTodo from './AddTodo';
import FooterLink from './FooterLink';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.todoId = 0;
    }
    
    render() {
        const {todos, visibilityFilter, store} = this.props;
        const visibleTodos = this.props.getVisibleTodos(todos, visibilityFilter);
        return (
            <div>
                    <AddTodo onAddClick={(value) => {
                        store.dispatch({
                            type: 'ADD_TODO'
                            , text: value
                            , id: this.todoId++
                        });
                    }} />
                    <TodoList onTodoClick={(id) => {
                        store.dispatch({
                                type: 'TOGGLE_TODO'
                                , id: id
                            }); 
                        }} 
                        todos={visibleTodos} />
                <p>
                    <FooterLink onFooterClick={filter => {
                store.dispatch({type: 'SET_VISIBILITY_FILTER', filter });}} 
                visibilityFilter={visibilityFilter} />
                </p>
            </div>
        );
    }
}

export default TodoApp;