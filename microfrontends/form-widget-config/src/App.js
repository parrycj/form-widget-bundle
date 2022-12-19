import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: props.question,
      option1: props.option1,
      option2: props.option2,
      option3: props.option3,
    };
  }

  handleChange = (e) => {
    const input = e.target;
    this.setState({
      [input.question]: input.value,
      [input.option1]: input.value,
      [input.option2]: input.value,
      [input.option3]: input.value,
    });
  };

  render() {
    const { question, option1, option2, option3 } = this.state;
    return (
      <div>
        <h1>Form Widget Configuration</h1>
        <div>
          <label htmlFor="question">Question </label>
          <input
            id="question"
            name="question"
            defaultValue={question}
            type="text"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="option1">Option 1 </label>
          <input
            id="option1"
            name="option1"
            defaultValue={option1}
            type="text"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="option2">Option 2 </label>
          <input
            id="option2"
            name="option2"
            defaultValue={option2}
            type="text"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="option3">Option 3 </label>
          <input
            id="option3"
            name="option3"
            defaultValue={option3}
            type="text"
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
