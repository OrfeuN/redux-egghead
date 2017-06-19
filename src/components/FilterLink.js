import React, { Component } from 'react';

import Link from './Link';

class FilterLink extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const {store, filter, text} = this.props;
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


export default FilterLink;