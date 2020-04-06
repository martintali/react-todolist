import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  state = { todos: [] };

  onTodoDeleted = (id) => {
    this.setState(
      (prevState) => ({
        todos: prevState.todos.filter((todo) => {
          return todo.id !== id;
        }),
      }),
      () => {
        localStorage.setItem('todoList', JSON.stringify(this.state.todos));
      }
    );
  };

  onTodoCompleted = (idx) => {
    let todos = [...this.state.todos];
    let todo = {
      ...todos[idx],
      isCompleted: !todos[idx].isCompleted,
    };
    todos[idx] = todo;

    this.setState({ todos }, () =>
      localStorage.setItem('todoList', JSON.stringify(this.state.todos))
    );
  };

  addTodo = (title) => {
    this.setState(
      (prevState) => ({
        todos: [
          ...prevState.todos,
          {
            title,
            isCompleted: false,
            id: Math.floor((1 + Math.random()) * 0x10000)
              .toString(16)
              .substring(1),
          },
        ],
      }),
      () => {
        localStorage.setItem('todoList', JSON.stringify(this.state.todos));
      }
    );
  };

  componentDidMount() {
    const todosLs = localStorage.getItem('todoList');
    if (todosLs) {
      this.setState({ todos: JSON.parse(todosLs) });
    }
  }

  render() {
    return (
      <ul className="list-group list-group-flush">
        {this.state.todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onDelete={this.onTodoDeleted}
            onCompleted={this.onTodoCompleted}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
