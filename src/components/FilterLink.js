import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Link from './Link';

const mapDispatchToProps = (dispatch) => {
    return {
        onFilterClick : () => {
                dispatch({type: 'SET_VISIBILITY_FILTER', filter})
        }
    };
}

class FilterLink extends Component {
    constructor(props) {
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
        const { filter, text} = this.props;
        const {store} = this.context;;
        const reduxState = store.getState();
        return (
            <Link 
            onFilterClick={() => store.dispatch({type: 'SET_VISIBILITY_FILTER'
            , filter})}
            active={reduxState.visibilityFilter === filter} 
            text={text} />
        );
    }
}

FilterLink.contextTypes = {
    store: PropTypes.object
};

export default FilterLink;