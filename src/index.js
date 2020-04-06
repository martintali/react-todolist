import './custom.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import TaskInput from './components/TaskInput';
import TodoList from './components/TodoList';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.todoListRef = React.createRef();
  }

  addTodo = (title) => {
    this.todoListRef.current.addTodo(title);
  };

  render() {
    return (
      <div className="container">
        <div className="m-5">
          <TaskInput onFormSubmit={this.addTodo} />
          <TodoList ref={this.todoListRef} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.querySelector('#root'));
