import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Provider extends Component {
    constructor(props) {
        super(props);

    }

    getChildContext(){
        return {
            store: this.props.store 
            //, getVisibleTodos: this.props.getVisibleTodos
        };
    }

    render() {
        return this.props.children;
    }
}

Provider.childContextTypes = {
    store: PropTypes.object
    , getVisibleTodos: PropTypes.func
};

export default Provider;