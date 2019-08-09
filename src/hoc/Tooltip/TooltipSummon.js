import React, { Component } from 'react';

import Aux from '../Auxiliary';
import Tooltip from './Tooltip/Tooltip';

class TooltipSummon extends Component {
    state = {
      hover: false
    }
    onMouseInHander() {
      this.setState({
        hover: true
      })
    }
    onMouseOutHandler() {
      this.setState({
        hover: false
      })
    }
    render() {
        const tooltipStyle = {
          display: this.state.hover ? 'block' : 'none'
        }
      return (
          <Aux>
            <div style={tooltipStyle}
            onMouseOver={this.onMouseInHander.bind(this)} 
            onMouseOut={this.onMouseOutHandler.bind(this)}>
              <Tooltip content={this.props.content}/>
              </div>
          <div
          onMouseOver={this.onMouseInHander.bind(this)} 
          onMouseOut={this.onMouseOutHandler.bind(this)}>
          {this.props.children}</div>
          <div>
          </div>
          </Aux>
      );
    }
  }
   
export default TooltipSummon;