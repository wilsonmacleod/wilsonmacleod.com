import React from 'react';

import classes from './BoxWrapper.css'

const boxWrapper = (props) => {

    return ( 
        <div className={classes.Border}>
            {props.children}
        </div>
     );
}
 
export default boxWrapper;