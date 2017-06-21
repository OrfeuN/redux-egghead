import {createStore, combineReducers} from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';

import TodoApp from './components/TodoApp'

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

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch(action.type){
    case 'SET_VISIBILITY_FILTER':
        return action.filter;
    default:
        return state;
    }
};
/*
const combineReducers = (reducers) =>{
    return (state, action) => {
            Object.keys(reducers).reduce((nextState, key) => {
                nextState[key] = reducers[key](state, action);
                return nextState;
        }, {})
    };
};

const todoApp = combineReducers({todos: todos, visibilityFilter: visibilityFilter});

const todoApp = (state = {}, action) => {
    return { 
        todos: todos(state, action)
        , visibilityFilter: visibilityFilter(state.visibilityFilter, action)
    };
};*/

//reducer composition
const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return { id: action.id, text: action.text, completed: false};
        case 'TOGGLE_TODO':
            return state.id === action.id ?
                Object.assign({}, state, { completed: !state.completed }) : state;
                //{...state, completed: !state.completed} : state;
        default:
            return state;
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, todo(null, action) ];
        case 'TOGGLE_TODO':
            return state.map((item) => todo(item, action));
        default:
            return state;
    }
};

const todoApp = combineReducers({ 
    todos
    , visibilityFilter
});

const store = createStore(todoApp);

ReactDOM.render(<TodoApp store={store} getVisibleTodos={getVisibleTodos} />, document.getElementById('root'));