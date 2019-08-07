import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary';

import classes from './NavButton.css';

class NavButton extends Component {
    state = { 
        alive: false
     }
     onHoverHandler = () => {
        console.log("Alive")
        this.setState({ alive: true })
     }
    render() { 
        let startingButton = 
                    <a href="." className={classes.NavButton}
                    onMouseOver={this.onHoverHandler.bind(this)}
                    >
                    {this.props.label}
                    </a>
        if( this.state.alive ){
            console.log("we really alive out here");
        }
        return ( 
            <Aux>
                {startingButton}
            </Aux>
         );
    }
}
 
export default NavButton;