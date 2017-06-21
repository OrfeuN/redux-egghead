import React from 'react';

import FilterLink from './FilterLink';

const Footer = (props) => {
    return (
        <div>
            <FilterLink filter="SHOW_ALL" text="ALL" />
            {' '}
            <FilterLink filter="SHOW_ACTIVE" text="Active" />
            {' '}
            <FilterLink filter="SHOW_COMPLETED" text="Completed" />
        </div>
    );
};

export default Footer;