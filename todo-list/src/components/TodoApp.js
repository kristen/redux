import React from 'react';
import AddTodo from './AddTodo';
import Footer from './Footer';
import VisibleTodoList from './VisibleTodoList';
import { VisibilityFilters } from '../actions';

const TodoApp = ({ match: { params } }) => (
    <div>
        <AddTodo />
        <VisibleTodoList filter={params.filter || VisibilityFilters.SHOW_ALL} />
        <Footer />
    </div>
);

export default TodoApp;
