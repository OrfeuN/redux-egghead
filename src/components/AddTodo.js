import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

let todoId = 0;

const AddTodo = ({dispatch}) => {
    let newTodoInput;
    return (
        <div>
            <input ref={(node) => {newTodoInput = node;}} />
                <button onClick={() => {
                    dispatch({
                        type: 'ADD_TODO'
                        , text: newTodoInput.value
                        , id: todoId++
                    });
                    newTodoInput.value = '';
                    }}>Add Todo</button>
                
        </div>
    );
};

//const mapDispatchToProps = (dispatch) => { return { dispatch}; };

export default connect(
    null
    , null //mapDispatchToProps
)(AddTodo);

/*const AddTodo = (props, {store}) => {
    let newTodoInput;
    return (
        <div>
            <input ref={(node) => {newTodoInput = node;}} />
                <button onClick={() => {
                    store.dispatch({
                        type: 'ADD_TODO'
                        , text: newTodoInput.value
                        , id: todoId++
                    });
                    newTodoInput.value = '';
                    }}>Add Todo</button>
                
        </div>
    );
};

AddTodo.contextTypes = {
    store: PropTypes.object
};*/

//export default AddTodo;