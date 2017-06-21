import React from 'react';

const Link = ({active, onFilterClick, text}) => {

    return active ? (
        <span>{text}</span>
    ) : 
    (
        < a href="#" 
            onClick={(e) => {
            e.preventDefault();
            onFilterClick();
        }}>{text}</a>
    );
};

export default Link;