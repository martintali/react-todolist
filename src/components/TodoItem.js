import React from 'react';

class TodoItem extends React.Component {
  state = { todo: {} };

  deleteTodo = () => {
    this.props.onDelete(this.state.todo.id);
  };

  completeTodo = () => {
    this.setState((state) => ({
      todo: {
        ...state.todo,
        isCompleted: !state.todo.isCompleted,
      },
    }));
    this.props.onCompleted(this.state.todo.id);
  };

  componentDidMount() {
    this.setState((state, props) => ({
      todo: props.todo,
    }));
  }

  render() {
    const { todo } = this.state;
    return (
      <li className="list-group list-group-item">
        <p
          className={`align-middle ${
            this.state.todo.isCompleted ? 'completed' : ''
          }`}
        >
          {todo.title}
          <button
            id="delete"
            type="button"
            className="btn btn-link float-right"
            onClick={this.deleteTodo}
          >
            <svg
              className="bi bi-x text-danger"
              width="1.3em"
              height="1.3em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button
            id="done"
            type="button"
            className="btn btn-link float-right mr-3"
            onClick={this.completeTodo}
          >
            <svg
              className="bi bi-check text-success"
              width="1.3em"
              height="1.3em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </p>
      </li>
    );
  }
}

export default TodoItem;
