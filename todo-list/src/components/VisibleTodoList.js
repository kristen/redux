import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';
const VisibilityFilters = actions.VisibilityFilters;
import TodoList from './TodoList';
import { getVisibileTodos } from '../reducers';

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
        // destructure here so we get the correct values before the asyn call
        const { filter, fetchTodos } = this.props;
        fetchTodos(filter);
    }

    render() {
        const { toggleTodo, ...rest } = this.props;
        return (
            <TodoList
                {...rest}
                onTodoClick={toggleTodo}
            />
        );
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
    actions
)(VisibleTodoList));

export default VisibleTodoList;
