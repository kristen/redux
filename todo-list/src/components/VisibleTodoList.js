import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleTodo, VisibilityFilters } from '../actions';
import TodoList from './TodoList';

const getVisibileTodos = (
    todos,
    filter
) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        default:
            return todos;
    }
};

const mapStateToProps = (state, { match: { params }}) => ({
    todos: getVisibileTodos(
        state.todos,
        params.filter || VisibilityFilters.SHOW_ALL
    ),
});

const VisibleTodoList = withRouter(connect(
    mapStateToProps,
    { onTodoClick: toggleTodo }
)(TodoList));

export default VisibleTodoList;
