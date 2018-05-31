import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleTodo, VisibilityFilters } from '../actions';
import TodoList from './TodoList';
import { getVisibileTodos } from '../reducers';

const mapStateToProps = (state, { match: { params }}) => ({
    todos: getVisibileTodos(
        state,
        params.filter || VisibilityFilters.SHOW_ALL
    ),
});

const VisibleTodoList = withRouter(connect(
    mapStateToProps,
    { onTodoClick: toggleTodo }
)(TodoList));

export default VisibleTodoList;
