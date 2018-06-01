import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions';
import VisibilityFilters from '../actions/visibilityFilters';
import TodoList from './TodoList';
import FetchError from './FetchError';
import { getVisibileTodos, getIsFetching, getErrorMessage } from '../reducers';

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
        fetchTodos(filter).then(() => console.log('done!'));
    }

    render() {
        const { toggleTodo, todos, isFetching, errorMessage } = this.props;
        if (isFetching && !todos.length) {
            return <p>Loading...</p>;
        }
        if (errorMessage && !todos.length) {
            return (
                <FetchError
                    message={errorMessage}
                    onRetry={() => this.fetchData()}
                />
            );
        }
        return (
            <TodoList
                todos={todos}
                onTodoClick={toggleTodo}
            />
        );
    }
}

const mapStateToProps = (state, { match: { params }}) => {
    const filter = params.filter || VisibilityFilters.SHOW_ALL;
    return {
        todos: getVisibileTodos(state, filter),
        errorMessage: getErrorMessage(state, filter),
        isFetching: getIsFetching(state, filter),
        filter,
    };
};

VisibleTodoList = withRouter(connect(
    mapStateToProps,
    actions
)(VisibleTodoList));

export default VisibleTodoList;
