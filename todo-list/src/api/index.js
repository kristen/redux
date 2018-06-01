import { v4 } from 'node-uuid';
import VisibilityFilters from '../actions/visibilityFilters';

// This is a fake in memory implementation of something
// that would be implemented by calling a REST server.

const fakeDatabase = {
    todos: [{
        id: v4(),
        text: 'Learn React',
        completed: false,
    }, {
        id: v4(),
        text: 'Learn Redux',
        completed: false,
    }, {
        id: v4(),
        text: 'Learn how to type',
        completed: true,
    }],
};

const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = (filter) => {
    return delay(500).then((() => {
        if (Math.random() > 0.9) {
            throw new Error('Boom!');
        }
        switch (filter) {
            case VisibilityFilters.SHOW_ALL:
                return fakeDatabase.todos;
            case VisibilityFilters.SHOW_ACTIVE:
                return fakeDatabase.todos.filter(todo => !todo.completed);
            case VisibilityFilters.SHOW_COMPLETED:
                return fakeDatabase.todos.filter(todo => todo.completed);
            default:
                throw new Error(`Unknown filter: ${filter}`);
        }
    }));
};

export const addTodo = (text) => 
    delay(500).then(() => {
        const todo = {
            id: v4(),
            text,
            completed: false,
        };
        fakeDatabase.todos.push(todo);
        return todo;
    }
);


export const toggleTodo = (id) =>
    delay(500).then(() => {
        const todo = fakeDatabase.todos.find(t => t.id === id);
        todo.completed = !todo.completed;
        return todo;
    });
