import React from 'react';

import FilterLink from './FilterLink';

const Footer = ({store}) => {
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


export default Footer;