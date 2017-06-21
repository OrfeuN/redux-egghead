import React from 'react';
import PropTypes from 'prop-types';

import FilterLink from './FilterLink';

const Footer = (props, {store}) => {
    return (
        <div>
            <FilterLink store={store} filter="SHOW_ALL" text="ALL" />
            {' '}
            <FilterLink store={store} filter="SHOW_ACTIVE" text="Active" />
            {' '}
            <FilterLink store={store} filter="SHOW_COMPLETED" text="Completed" />
        </div>
    );
};

Footer.contextTypes = {
    store: PropTypes.object
    , getVisibleTodos: PropTypes.func
};

export default Footer;