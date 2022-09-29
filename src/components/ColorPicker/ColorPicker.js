import React, { Component } from 'react';
import './ColorPicker.css';

export default class ColorPicker extends Component {
  state = {
    activeOptionIdx: 1,
  };

  setActiveIdx = idx => {
    this.setState({ activeOptionIdx: idx });
  };

  makeOptionClasses = idx => {
    const optionClasses = ['ColorPicker__option'];

    if (idx === this.state.activeOptionIdx) {
      optionClasses.push('ColorPicker__option--active');
    }
    return optionClasses.join(' ');
  };

  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;

    const { label } = options[activeOptionIdx];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Chosen color: {label}</p>
        <div>
          {options.map(({ label, color }, idx) => (
            <button
              key={label}
              className={this.makeOptionClasses(idx)}
              style={{
                backgroundColor: color,
              }}
              onClick={() => this.setActiveIdx(idx)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}
