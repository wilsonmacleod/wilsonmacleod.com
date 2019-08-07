import React, { Component } from 'react';

import Aux from '../Auxiliary';
import Tooltip from './Tooltip/Tooltip';

class TooltipSummon extends Component {
    state = {
        hover: false
    }
    handleMouseIn() {
      this.setState({ hover: true })
    }
    
   /* handleMouseOut() {
      this.setState({ hover: false })
    }*/
    
    render() {
      const tooltipStyle = {
        display: this.state.hover ? 'block' : 'none'
      }
      
      return (
          <Aux>
            <div style={tooltipStyle}>
              <Tooltip content={this.props.content}/>
              </div>
          <div
          onMouseOver={this.handleMouseIn.bind(this)} 
          //onMouseOut={this.handleMouseOut.bind(this)}
          >
          {this.props.children}</div>
          <div>
          </div>
          </Aux>

      );
    }
  }
   
export default TooltipSummon;