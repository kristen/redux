import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleTodo, VisibilityFilters } from '../actions';
import TodoList from './TodoList';
import { getVisibileTodos } from '../reducers';
import { fetchTodos } from '../api';

class VisibleTodoList extends Component {
    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.filter !== this.props.filter) {
            this.fetchData();
        }
    }

    fetchData() {
        fetchTodos(this.props.filter).then(todos =>
            console.log(this.props.filter, todos)
        );
    }

    render() {
        return <TodoList {...this.props} />;
    }
}

const mapStateToProps = (state, { match: { params }}) => {
    const filter = params.filter || VisibilityFilters.SHOW_ALL;
    return {
        todos: getVisibileTodos(state, filter),
        filter,
    };
};

VisibleTodoList = withRouter(connect(
    mapStateToProps,
    { onTodoClick: toggleTodo }
)(VisibleTodoList));

export default VisibleTodoList;
