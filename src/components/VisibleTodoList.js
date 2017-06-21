import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TodoList from './TodoList';

class VisibleTodoList extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        const {store} = this.context;
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const {store, getVisibleTodos} = this.context;
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

VisibleTodoList.contextTypes = {
    store: PropTypes.object
    , getVisibleTodos: PropTypes.func
};

export default VisibleTodoList;