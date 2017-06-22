import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import {connect} from 'react-redux'

import TodoList from './TodoList';

const getVisibleTodos = (todos, filter) => {
    switch(filter){
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter((todo) => todo.completed);
        case 'SHOW_ACTIVE':
            return todos.filter((todo) => !todo.completed);

    }
};

const mapStateToProps = (reduxState) => {
    return { todos: getVisibleTodos(reduxState.todos, reduxState.visibilityFilter)};
};

const mapDispatchToProps = (dispatch) => {
    return { onTodoClick: (id) => {
                        dispatch({
                                type: 'TOGGLE_TODO'
                                , id: id
                            }); 
                        }
            };
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

/*class VisibleTodoList extends Component {
    constructor(props){
        super(props);
    }

    getVisibleTodos(todos, filter) {
        switch(filter){
            case 'SHOW_ALL':
                return todos;
            case 'SHOW_COMPLETED':
                return todos.filter((todo) => todo.completed);
            case 'SHOW_ACTIVE':
                return todos.filter((todo) => !todo.completed);

        }
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
        const mapStateToProps = (reduxState) => this.getVisibleTodos(reduxState.todos, reduxState.visibilityFilter);
        return (
            <TodoList 
                onTodoClick={(id) => {
                    store.dispatch({
                            type: 'TOGGLE_TODO'
                            , id: id
                        }); 
                    }} 
                todos={mapStateToProps(store.getState())}
            />
        );
    }
}

VisibleTodoList.contextTypes = {
    store: PropTypes.object
//    , getVisibleTodos: PropTypes.func
};*/

export default VisibleTodoList;