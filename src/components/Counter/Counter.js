import React from 'react';
import Controls from './ControlsForCounter';
import Value from './Value';

export default class Counter extends React.Component {
  static defaultProps = { initialValue: 0 };

  static propTypes = {};

  state = {
    value: this.props.initialValue,
  };

  incrementBtn = () => {
    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      };
    });
  };
  decrementBtn = () => {
    this.setState(prevState => {
      return {
        value: prevState.value - 1,
      };
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <Value value={value} />

        <Controls
          onIncrement={this.incrementBtn}
          onDecrement={this.decrementBtn}
        />
      </div>
    );
  }
}
