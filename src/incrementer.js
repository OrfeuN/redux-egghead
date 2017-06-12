import {createStore} from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';

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

render();

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