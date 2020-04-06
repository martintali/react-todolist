import React, { Component } from 'react';

class TaskInput extends Component {
  state = { title: '' };

  onInputChange = (e) => {
    this.setState({ title: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.title);
    this.setState({ title: '' });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="input"
            value={this.state.title}
            onChange={this.onInputChange}
            className="form-control form-control-lg"
            placeholder="What do you want to do?"
          />
        </div>
      </form>
    );
  }
}

export default TaskInput;
