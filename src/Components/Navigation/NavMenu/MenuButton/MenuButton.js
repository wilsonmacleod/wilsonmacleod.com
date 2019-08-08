import React from 'react';

import classes from './MenuButton.css';

const menuButton = (props) => {
    return ( 
    <div className={classes.Mb}>
        {props.children}
    </div>
     );
}
 
export default menuButton;