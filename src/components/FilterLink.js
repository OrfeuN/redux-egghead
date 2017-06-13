import React from 'react';

const FilterLink = ({onFilterClick, filter, currentFilter, text}) => {

    return filter === currentFilter ? (
        <span>{text}</span>
    ) : 
    (
            < a href="#" 
            onClick={(e) => {
                e.preventDefault();
                onFilterClick(filter);
            }}>{text}</a>
    );
};

export default FilterLink;