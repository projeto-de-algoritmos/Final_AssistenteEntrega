import React, { Component } from 'react';
import './index.css'

export default class QuantityPicker extends Component {

  constructor(props) {
    super(props);

    this.state = {value: this.props.min, disableDec: false, disableInc: false}
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    const plusState = this.state.value + 1;
    if (this.state.value < this.props.max){
      this.setState({value: plusState});
      this.setState({disable: false});
    }
    if (this.state.value === (this.props.max - 1)) {
      this.setState({disableInc: true});
    }
    if (this.state.value === this.props.min) {
      this.setState({disableDec: false});
    }
    this.props.onChange(plusState)
  }

  decrement() {
    const minusState = this.state.value - 1;
    if (this.state.value > this.props.min) {
      this.setState({value: minusState });
      if (this.state.value === this.props.min + 1) {
        this.setState({disableDec: true});
      }
    } else {
      this.setState({value: this.props.min});
    }
    if (this.state.value === this.props.max) {
      this.setState({disableInc: false});
    }
    this.props.onChange(minusState)
  }
  
  render() {
    const { disableDec, disableInc } = this.state;

    return (
      <span className="quantity-picker">
        <button className={`${disableDec ? 'mod-disable ' : ''}quantity-modifier modifier-left`} onClick={this.decrement}>&ndash;</button>
        <input className="quantity-display" type="text" value={this.state.value} readOnly />
        <button className={`${disableInc ? 'mod-disable ' : ''}quantity-modifier modifier-right`} onClick={this.increment}>&#xff0b;</button>
      </span>
    );
  }
}