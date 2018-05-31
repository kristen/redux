import { connect } from 'react-redux';
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

const mapStateToProps = (state, ownProps) => ({
    todos: getVisibileTodos(state.todos, ownProps.filter),
});

const mapDispatchToProps = (dispatch) => ({
    onTodoClick(id) {
        dispatch(toggleTodo(id))
    },
});

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
