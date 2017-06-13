import React, { Component } from 'react';

import FilterLink from './FilterLink';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.todoId = 0;
    }
    
    render() {
        const {todos, visibilityFilter} = this.props;
        const visibleTodos = this.props.getVisibleTodos(todos, visibilityFilter);
        return (
            <div>
                <input ref={(node) => {this.newTodoInput = node;}} />
                <button onClick={() => {
                    this.props.store.dispatch({
                        type: 'ADD_TODO'
                        , text: this.newTodoInput.value
                        , id: this.todoId++
                    });
                    this.newTodoInput.value = '';
                    }}>Add Todo</button>
                <ul>
                    {visibleTodos.map((todo) =>{
                        return <li key={todo.id} style={{ textDecoration: todo.completed? 'line-through' : 'none' }}>
                            <input type="checkbox" readOnly="true" checked={todo.completed} onClick={() => {
                            this.props.store.dispatch({
                            type: 'TOGGLE_TODO'
                            , text: todo.text
                            , id: todo.id
                    }); }} />
                            {todo.text}
                            </li>
                    })}
                </ul>
                <p>
                    <FilterLink store={this.props.store} filter="SHOW_ALL" text="ALL" currentFilter={visibilityFilter} />
                    <FilterLink store={this.props.store} filter="SHOW_ACTIVE" text="Active" currentFilter={visibilityFilter} />
                    <FilterLink store={this.props.store} filter="SHOW_COMPLETED" text="Completed" currentFilter={visibilityFilter} />
                </p>
            </div>
        );
    }
}

export default TodoApp;