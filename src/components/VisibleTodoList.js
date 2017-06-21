import React, { Component } from 'react';

import TodoList from './TodoList';

class VisibleTodoList extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const {store, getVisibleTodos} = this.props;
        const reduxState = store.getState();
        return (
            <TodoList 
                onTodoClick={(id) => {
                    store.dispatch({
                            type: 'TOGGLE_TODO'
                            , id: id
                        }); 
                    }} 
                todos={getVisibleTodos(reduxState.todos, reduxState.visibilityFilter)}
            />
        );
    }
}

export default VisibleTodoList;