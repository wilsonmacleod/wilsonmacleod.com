import React from 'react';

import classes from './Tooltip.css';

const tooltip = (props) => {
    return ( 
        <div className={classes.Tooltip}>
            {props.content}
        </div>
     );
}
 
export default tooltip ;