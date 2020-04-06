import './custom.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import TaskInput from './components/TaskInput';
import TodoList from './components/TodoList';

const Index = () => {
  return (
    <div className="main container rounded p-3 mt-3">
      <TaskInput />
      <TodoList />
    </div>
  );
};

ReactDOM.render(<Index />, document.querySelector('#root'));
