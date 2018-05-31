import React from 'react';
import { NavLink } from 'react-router-dom';
import { VisibilityFilters } from '../actions';

const FilterLink = ({ filter, children }) => (
    <NavLink
        exact
        to={filter === VisibilityFilters.SHOW_ALL ? '/' : `/${filter}`}
        activeStyle={{
            textDecoration: 'none',
            color: 'black',
            cursor: 'auto'
        }}
    >
        {children}
    </NavLink>
);

export default FilterLink;
