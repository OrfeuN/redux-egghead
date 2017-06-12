import React, { Component } from 'react';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.todoId = 0;
    }
    
    render() {
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
                    {this.props.todos.map((todo) =>{
                        return <li key={todo.id} style={{ textDecoration: todo.completed? 'line-through' : 'none' }}>
                            <input type="checkbox" checked={todo.completed} onClick={() => {
                            this.props.store.dispatch({
                            type: 'TOGGLE_TODO'
                            , text: todo.text
                            , id: todo.id
                    }); }} />
                            {todo.text}
                            </li>
                    })}
                </ul>
            </div>
        );
    }
}

export default TodoApp;