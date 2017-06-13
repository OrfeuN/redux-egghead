import React from 'react';

import FilterLink from './FilterLink';

const FooterLink = ({onFooterClick, visibilityFilter}) => {
    return (
        <div>
            <FilterLink onFilterClick={onFooterClick} filter="SHOW_ALL" text="ALL" currentFilter={visibilityFilter} />
            {' '}
            <FilterLink onFilterClick={onFooterClick} filter="SHOW_ACTIVE" text="Active" currentFilter={visibilityFilter} />
            {' '}
            <FilterLink onFilterClick={onFooterClick} filter="SHOW_COMPLETED" text="Completed" currentFilter={visibilityFilter} />
        </div>
    );
};


export default FooterLink;