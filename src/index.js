import {createStore} from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';

//reducer composition
const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return { id: action.id, text: action.text, completed: false};
        case 'TOGGLE_TODO':
            return state.id === action.id ?
                {...state, completed: !state.completed} : state;
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

/*
const reducer = (state = 0, action) =>{
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;

    }
};

const store = createStore(reducer);

const Counter = ({value, onIncrement, onDecrement}) => {
    return (
        <div>
            <h1>{value}</h1>
            <input onClick={onIncrement} type="button" value="+" />
            <input onClick={onDecrement} type="button" value="-" />
        </div>
    );
};

const render = () => {
    ReactDOM.render(<Counter value={store.getState()} 
            onIncrement={() => store.dispatch({type:'INCREMENT'})} 
            onDecrement={() => store.dispatch({type:'DECREMENT'})} 
    />
    , document.getElementById('root'));
};

store.subscribe(render);

render();*/

/*const render = () => {
    let elem = document.querySelector('.container');
    elem.innerHTML = store.getState();
};

store.subscribe(render);

window.addEventListener('load', function(){
    document.querySelectorAll('.modifier').forEach((elem) => {
        elem.addEventListener("click", (evt) => {
            let increment_type = evt.target.value === '+' ? 'INCREMENT' : 'DECREMENT';
            store.dispatch({ type: increment_type });
        });
    });
    render();
});*/