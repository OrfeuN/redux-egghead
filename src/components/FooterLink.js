import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Link from './Link';

const mapStateToProps = (reduxState, ownProps) => {
    return { 
        active: reduxState.visibilityFilter === ownProps.filter 
        , text: ownProps.text
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onFilterClick : () => {
                dispatch({type: 'SET_VISIBILITY_FILTER', filter: ownProps.filter})
        }
    };
}

var FooterLink = connect(null, mapDispatchToProps)(Link);

/*class FooterLink extends Component {
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

FooterLink.contextTypes = {
    store: PropTypes.object
};*/

export default FooterLink;