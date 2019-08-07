import React from 'react';

import Aux from '../Auxiliary';

import classes from './BoxWrapper.css'

const boxWrapper = (props) => {

    return ( 
        <Aux>
        <div className={classes.Border}>
            {props.children}
        </div>
        </Aux>
     );
}
 
export default boxWrapper;