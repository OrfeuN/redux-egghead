import React from 'react';

const FilterLink = ({store, filter, currentFilter, text}) => {

    return filter === currentFilter ? (
        <span>{text}</span>
    ) : 
    (
            < a href="#" 
            onClick={(e) => {
                e.preventDefault();
                store.dispatch({type: 'SET_VISIBILITY_FILTER', filter });
            }}>{text}</a>
    );
};

export default FilterLink;