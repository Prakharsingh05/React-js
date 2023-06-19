import React from 'react';


class Counter1 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 0,
        acknowledgmentMessage: null,
      };
    }
  
    handleClick = () => {
      this.setState({
        counter: this.state.counter + 1,
      });
      if (this.state.counter === 15) {
        this.setState({
          acknowledgmentMessage: 'You have reached 15!',
        });
      }
    };
  
    render() {
      return (
        <div>
          <h1>Counter</h1>
          <h2>{this.state.counter}</h2>
          <button onClick={this.handleClick}>Click me</button>
          {this.state.acknowledgmentMessage && (
            <h1>{this.state.acknowledgmentMessage}</h1>
          )}
        </div>
      );
    }
  }
  export default Counter1