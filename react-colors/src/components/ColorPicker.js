import React, { Component } from 'react';
import ColorInput from './ColorInput';

class ColorPicker extends Component {
  constructor(){
    super();
    this.state = {
      red: 0,
      green: 0,
      blue: 0
    }
  }

  swatchStyle(){
    return {
      width: '500px',
      height: '300px',
      margin: '0 auto',
      backgroundColor: `rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`
    }
  }

  updateRed(value){
    this.setState({red: value})
  }

  updateGreen(value){
    this.setState({green: value})
  }

  updateColor(color, value){
    const newColors = this.state
    newColors[color] = value
    this.setState(newColors)
  }

  render(){
    return(
      <div>
        <div style={this.swatchStyle()}></div>
        <ColorInput color='red' value={this.state.red}
                    updateColor={this.updateColor.bind(this)} /> 
        <ColorInput color='green' value={this.state.green}
                    updateColor={this.updateColor.bind(this)} /> 
        <ColorInput color='blue' value={this.state.blue}
                    updateColor={this.updateColor.bind(this)} /> 
      </div>
    )
  }
}

export default ColorPicker;