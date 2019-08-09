import React from 'react';

import Aux from '../../../hoc/Auxiliary';

import classes from './NavButton.css';

const navButton = (props) => {
        return ( 
            <Aux>
               <div 
                    className={ classes.NavButton }
                    onClick={ props.clicked }
                    >
                    MORE
                    </div>
            </Aux>
         );
    }

export default navButton;