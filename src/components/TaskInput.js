import React, { Component } from 'react';

class TaskInput extends Component {
  render() {
    return (
      <form className="form-group mb-5">
        <input
          type="text"
          id="input"
          className="form-control mb-2"
          placeholder="What do you want to do?"
        />
        <label htmlFor="#input">
          <em>
            Press <code>Return</code> to save
          </em>
        </label>
      </form>
    );
  }
}

export default TaskInput;
