import React from 'react';

import Aux from '../../hoc/Auxiliary';
import image from '../../assets/images/wmacleod.png'

import classes from './Header.css';


const header = () => {

    return ( 
        <Aux>
        <img className={classes.Picture} src={image} alt="Wilson MacLeod" />
        <h1 
        className={classes.Title}>
            Wilson MacLeod
        </h1>
        </Aux>
    );
}
 
export default header;